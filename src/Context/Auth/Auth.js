import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { client } from '../../API';
import AppLoader from '../../Components/AppLoader';
import Loader from '../../Components/Loader';

const Auth = props => {
    const [coreError, setCoreError] = useState(null);
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(null);
    const [preferences, setPreferences] = useState({});

    const isMountedRef = useRef(true);
    const isMounted = useCallback(() => isMountedRef.current, []);

    let controller = new AbortController();

    useEffect(() => {
        /* istanbul ignore else */
        if (props.checkOnInit) {
            checkAuthentication();
        }

        return () => {
            void (isMountedRef.current = false);
            controller.abort();
        }
    }, []);

    const signIn = async (username, password, history) => {
        return new Promise(async (resolve, reject) => {
            try {
                // Get CSRF Cookie
                await client('/sanctum/csrf_cookie', undefined, { accept: 'text/html', signal: controller.signal });
                // Perform sign in
                await client('/login', { username, password }, { signal: controller.signal });
                // When correct, get the user object
                const { data } = await client('/api/user', undefined, { signal: controller.signal });
                let _preferences = data.preferences ? /* istanbul ignore next */ JSON.parse(data.preferences) : {};
                delete data.preferences;

                /* istanbul ignore else */
                if (isMounted()) {
                    setUser(data);
                    setAuthenticated(true);
                    setPreferences(_preferences);
                    return resolve(data);
                }
            } catch (error) {
                /* istanbul ignore else */
                if (!error.status?.isAbort && isMounted()) {
                    return reject(error);
                }
            }
        });
    }

    const signOut = async () => {
        new Promise(async (resolve, reject) => {
            try {
                await client('/api/logout', {})
                /* istanbul ignore else */
                if (isMounted()) {
                    setUser(null);
                    setAuthenticated(false);
                    // Only if we are not in a test environment (Jest)
                    /* istanbul ignore next */
                    if (process.env.JEST_WORKER_ID === undefined || process.env.NODE_ENV !== 'test') {
                        window.location.replace(window.location.origin + '/login?logout');
                    }
                    resolve(true);
                }
            } catch (error) {
                /* istanbul ignore next */
                if (!error.status?.isAbort && isMounted()) {
                    return reject(error);
                }
            }
        });
    }

    const _setUser = (_user, _authenticated) => {
        /* istanbul ignore else */
        if (isMounted()) {
            setUser(_user);
            setAuthenticated(_authenticated);
        }
    }

    const checkAuthentication = async () => {
        return new Promise(async (resolve, reject) => {
            if (authenticated === null) {
                // The status is null if it hasn't been checked
                await client('/api/user', undefined, { signal: controller.signal })
                    .then(json => {
                        let _preferences = json.data.preferences ? /* istanbul ignore next */ JSON.parse(json.data.preferences) : {};
                        delete json.data.preferences;

                        /* istanbul ignore else */
                        if (isMounted()) {
                            setUser(json.data)
                            setAuthenticated(true);
                            setPreferences(_preferences);
                            return resolve(true);
                        }
                    })
                    .catch(error => {
                        /* istanbul ignore else */
                        if (!error.status?.isAbort) {
                            if (error.response && error.status.code === 401) {
                                // If 401 returns, the user is not logged in
                                /* istanbul ignore else */
                                if (isMounted()) {
                                    setUser(null)
                                    setAuthenticated(false);
                                    setPreferences({});
                                    return resolve(false);
                                }
                            } else {
                                // Any other code, something went wrong
                                /* istanbul ignore else */
                                if (isMounted()) {
                                    setCoreError(error.data?.message);
                                }
                            }
                        }
                    });
            } else {
                // We've already check authenticated, just return state
                /* istanbul ignore else */
                if (isMounted()) {
                    return resolve(authenticated);
                }
            }
        });
    }

    const checkPermission = async permission => {
        return new Promise(async (resolve, reject) => {
            await client('/api/permission/check', { 'permission': permission }, { signal: controller.signal })
                .then(json => {
                    /* istanbul ignore else */
                    if (isMounted()) {
                        return resolve(json.data.has_permission);
                    }
                })
                .catch(error => {
                    /* istanbul ignore else */
                    if (!error.status?.isAbort && isMounted()) {
                        setCoreError(error.data?.message);
                    }
                })
        });
    }

    const checkGroup = async group => {
        return new Promise(async (resolve, reject) => {
            await client('/api/group/check', { 'group': group }, { signal: controller.signal })
                .then(json => {
                    /* istanbul ignore else */
                    if (isMounted()) {
                        return resolve(json.data.in_group);
                    }
                })
                .catch(error => {
                    /* istanbul ignore else */
                    if (!error.status?.isAbort && isMounted()) {
                        setCoreError(error.data?.message);
                    }
                })
        });
    }

    const setPreference = async (preference, value) => {
        preferences[preference] = value;
        setPreferences({ ...preferences });

        await client('/api/user/preference', { 'preference': preference, 'value': value }, { method: 'PUT', signal: controller.signal })
            .catch(error => {
                /* istanbul ignore else */
                if (!error.status?.isAbort && isMounted()) {
                    setCoreError(error.data?.message);
                }
            })
    }

    if (coreError) {
        throw Error(coreError);
    }

    if (authenticated !== null) {
        return (
            <AuthContext.Provider
                children={props.children}
                value={{
                    user,
                    authenticated,
                    signIn,
                    signOut,
                    setUser: _setUser,
                    checkAuthentication,
                    checkPermission,
                    checkGroup,
                    preferences,
                    setPreference
                }}
            />
        )
    }

    if (window.location.pathname !== '/login') {
        return <AppLoader theme={null} />
    }

    return <Loader />
}



Auth.propTypes = {
    config: PropTypes.object,
    checkOnInit: PropTypes.bool
};

Auth.defaultProps = {
    checkOnInit: true
}

export default Auth;
