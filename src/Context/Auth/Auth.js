import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { client } from '../../API';
import Loader from '../../Components/Loader';

let controller = new AbortController();

const Auth = props => {
    const [state, setState] = useState({
        user: null,
        authenticated: null,
    });
    const [preferences, setPreferences] = useState({});

    const isMountedRef = useRef(true);
    const isMounted = useCallback(() => isMountedRef.current, []);

    useEffect(() => {
        if (props.checkOnInit) {
            checkAuthentication();
        }

        return () => {
            void (isMountedRef.current = false);
            controller.abort();
        }
    }, []);

    const signIn = async (username, password) => {
        return new Promise(async (resolve, reject) => {
            try {
                // Get CSRF Cookie
                await client('/sanctum/csrf_cookie', undefined, { accept: 'text/html', signal: controller.signal });
                // Perform sign in
                await client('/login', { username, password }, { signal: controller.signal });
                // When correct, get the user object
                const { data } = await client('/api/user', undefined, { signal: controller.signal });
                let _preferences = data.preferences ? JSON.parse(data.preferences) : {};
                delete data.preferences;

                if (isMounted) {
                    setState({
                        user: data,
                        authenticated: true,
                    });
                    setPreferences(_preferences);
                    return resolve(data);
                }
            } catch (error) {
                if (!error.status?.isAbort && isMounted) {
                    return reject(error);
                }
            }
        });
    }

    const signOut = async () => {
        new Promise(async (resolve, reject) => {
            try {
                await client('/api/logout', {});
                if (isMounted) {
                    setState({
                        user: null,
                        authenticated: false
                    });

                    window.location.replace(window.location.origin + '/login?logout');
                    resolve(true);
                }
            } catch (error) {
                if (!error.status?.isAbort && isMounted) {
                    return reject(error);
                }
            }
        });
    }

    const setUser = (user, authenticated) => {
        if (isMounted) {
            setState({
                user,
                authenticated
            });
        }
    }

    const checkAuthentication = async () => {
        return new Promise(async (resolve, reject) => {
            if (state.authenticated === null) {
                // The status is null if it hasn't been checked
                try {
                    const { data } = await client('/api/user', undefined, { signal: controller.signal });
                    let _preferences = data.preferences ? JSON.parse(data.preferences) : {};
                    delete data.preferences;

                    if (isMounted) {
                        setState({
                            user: data,
                            authenticated: true,
                        });
                        setPreferences(_preferences);
                        return resolve(true);
                    }
                } catch (error) {
                    if (error.response && error.status.code === 401) {
                        // If 401 returns, the user is not logged in
                        if (isMounted) {
                            setState({
                                user: null,
                                authenticated: false,
                            });
                            setPreferences({});
                            return resolve(false);
                        }
                    } else {
                        // Any other code, something went wrong
                        if (isMounted) {
                            return reject(error);
                        }
                    }
                }
            } else {
                // We've already check authenticated, just return state
                if (isMounted) {
                    return resolve(state.authenticated);
                }
            }
        });
    }

    const checkPermission = async permission => {
        return new Promise(async (resolve, reject) => {
            await client('/api/permission/check', { 'permission': permission }, { signal: controller.signal })
                .then(json => {
                    if (isMounted) {
                        return resolve(json.data.has_permission);
                    }
                })
                .catch(error => {
                    if (!error.status?.isAbort && isMounted) {
                        return reject(error);
                    }
                })
        });
    }

    const checkGroup = async group => {
        return new Promise(async (resolve, reject) => {
            await client('/api/group/check', { 'group': group }, { signal: controller.signal })
                .then(json => {
                    if (isMounted) {
                        return resolve(json.data.in_group);
                    }
                })
                .catch(error => {
                    if (!error.status?.isAbort && isMounted) {
                        return reject(error);
                    }
                })
        });
    }

    const setPreference = async (preference, value) => {
        preferences[preference] = value;
        setPreferences({ ...preferences });

        await client('/api/user/preference', { 'preference': preference, 'value': value }, { method: 'PUT', signal: controller.signal })
            .catch(error => {
                if (!error.status?.isAbort && isMounted) {
                    // TODO: Handle errors
                    console.error(error);
                }
            })
    }

    if (state.authenticated !== null) {
        return (
            <AuthContext.Provider
                children={props.children || null}
                value={{
                    user: state.user,
                    authenticated: state.authenticated,
                    signIn,
                    signOut,
                    setUser,
                    checkAuthentication,
                    checkPermission,
                    checkGroup,
                    preferences,
                    setPreference
                }}
            />
        )
    } else {
        return <Loader />
    }
}



Auth.propTypes = {
    config: PropTypes.object,
    checkOnInit: PropTypes.bool
};

Auth.defaultProps = {
    checkOnInit: true
}

export default Auth;
