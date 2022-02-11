import getCookie from '../Helpers/getCookie';

// Regular expression patterns for testing content-type response headers.
const RE_CONTENT_TYPE_JSON = new RegExp("^application/(x-)?json", "i");
const RE_CONTENT_TYPE_TEXT = new RegExp("^text/", "i");
// Static strings.
const TYPE_JSON = 'application/json';
const UNEXPECTED_ERROR_MESSAGE = "An unexpected error occurred while processing your request.";

export const controller = new AbortController();

export const client = async (
    endpoint,
    data = undefined,
    {
        headers: customHeaders,
        accept: accept = TYPE_JSON,
        type: type = TYPE_JSON,
        ...customConfig
    } = {}
) => {
    try {
        const config = {
            method: data ? 'POST' : 'GET',
            body: data ? JSON.stringify(data) : undefined,
            headers: {
                'Accept': accept ? accept : null,
                'Content-Type': data ? type : undefined,
                ...customHeaders
            },
            signal: controller.signal,
            ...customConfig,
        }

        const csrfToken = getCookie('XSRF-TOKEN');
        if (csrfToken !== undefined) {
            config.headers['X-XSRF-TOKEN'] = csrfToken.replace('%3D', '=');
        }

        const fetchRequest = new window.Request(`${window.location.origin.replace(/\/$/, "")}${endpoint}`, config)
        const fetchResponse = await window.fetch(fetchRequest);
        const responseData = await unwrapResponseData(fetchResponse);

        return new Promise(async (resolve, reject) => {
            if (fetchResponse.ok && (fetchResponse.status >= 200 && fetchResponse.status < 300)) {
                fetchResponse.data = responseData;
                return resolve(fetchResponse);
            }

            return reject(normalizeError(responseData, fetchRequest, fetchResponse));
        });
    } catch (error) {
        return Promise.reject(normalizeTransportError(error));
    }
}

export const unabortableClient = async (
    endpoint,
    data = undefined,
    {
        headers: customHeaders,
        accept: accept = TYPE_JSON,
        type: type = TYPE_JSON,
        ...customConfig
    } = {}
) => {
    try {
        const config = {
            method: data ? 'POST' : 'GET',
            body: data ? JSON.stringify(data) : undefined,
            headers: {
                'Accept': accept ? accept : null,
                'Content-Type': data ? type : undefined,
                ...customHeaders
            },
            ...customConfig,
        }

        const csrfToken = getCookie('XSRF-TOKEN');
        if (csrfToken !== undefined) {
            config.headers['X-XSRF-TOKEN'] = csrfToken.replace('%3D', '=');
        }

        const fetchRequest = new window.Request(`${window.location.origin.replace(/\/$/, "")}${endpoint}`, config)
        const fetchResponse = await window.fetch(fetchRequest);
        const responseData = await unwrapResponseData(fetchResponse);

        return new Promise(async (resolve, reject) => {
            if (fetchResponse.ok && (fetchResponse.status >= 200 && fetchResponse.status < 300)) {
                fetchResponse.data = responseData;
                return resolve(fetchResponse);
            }

            return reject(normalizeError(responseData, fetchRequest, fetchResponse));
        });
    } catch (error) {
        return Promise.reject(normalizeTransportError(error, fetchRequest, fetchResponse));
    }
}

const normalizeError = (data, fetchRequest, fetchResponse) => {
    if (fetchResponse.status === 401 && window.location.pathname !== '/login') {
        new Promise(async (resolve, reject) => {
            try {
                await unabortableClient('/api/logout', {});
                localStorage.setItem('WA_Login', window.location.href);
                window.location.replace(window.location.origin + '/login?logout');
                resolve(true);
            } catch (error) {
                return reject(error);
            }
        });
    }

    var error = {
        data: {
            type: "ServerError",
            message: UNEXPECTED_ERROR_MESSAGE,
            ...data
        },
        status: {
            code: fetchResponse.status,
            text: fetchResponse.statusText,
            isAbort: false,
        },
        // The following data is being provided for debugging
        request: fetchRequest,
        response: fetchResponse,
    }

    return error;
}

const normalizeTransportError = (transportError, fetchRequest, fetchResponse) => {
    return({
        data: {
            type: "TransportError",
            message: UNEXPECTED_ERROR_MESSAGE,
            rootCause: transportError
        },
        status: {
            code: 0,
            text: "Unknown",
            isAbort: (transportError.name === "AbortError")
        },
        // The following data is being provided for debugging
        request: fetchRequest,
        response: fetchResponse,
    });
}

const unwrapResponseData = async response => {
    if (response.status === 204) {
        return;
    }

    const contentType = response.headers.has('Content-Type')
        ? response.headers.get('Content-Type')
        : "";

    if (RE_CONTENT_TYPE_JSON.test(contentType)) {
        return await response.json();
    } else if (RE_CONTENT_TYPE_TEXT.test(contentType)) {
        return await response.text();
    } else {
        return await response.blob();
    }
}