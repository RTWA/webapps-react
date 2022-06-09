import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import { client } from '../../API';
import { useToasts } from '../../Toasts';

import { WebAppsUXContext } from '..';

export const WebAppsContext = React.createContext({});

let controller = new AbortController();

export const WebApps = props => {
    const [apps, setApps] = useState({});
    const [plugins, setPlugins] = useState({});

    const { addToast } = useToasts();
    const { darkMode, theme, useNavigation } = useContext(WebAppsUXContext);
    const { navigation, loadNavigation } = useNavigation;

    const isMountedRef = useRef(true);
    const isMounted = useCallback(() => isMountedRef.current, []);

    useEffect(() => {
        getApps();
        getPlugins();

        return () => {
            void (isMountedRef.current = false);
            controller.abort();
        }
    }, []);

    const setAppProp = (slug, prop, value) => {
        Object.keys(apps.local).map(key => {
            if (apps.local[key]?.slug === slug) {
                apps.local[key][prop] = value;
            }
        });
        Object.keys(apps.online).map(key => {
            if (apps.local[key]?.slug === slug) {
                apps.local[key][prop] = value;
            }
        });
        setApps({ ...apps });
    }

    const clearAppProp = (slug, prop) => {
        Object.keys(apps.local).map(key => {
            if (apps.local[key]?.slug === slug) {
                delete apps.local[key][prop];
            }
        });
        Object.keys(apps.online).map(key => {
            if (apps.online[key]?.slug === slug) {
                delete apps.online[key][prop];
            }
        });
        setApps({ ...apps });
    }

    const setPluginProp = (slug, prop, value) => {
        Object.keys(plugins.all).map(key => {
            if (plugins.all[key]?.slug === slug) {
                plugins.all[key][prop] = value;
            }
        });
        Object.keys(plugins.active).map(key => {
            if (plugins.active[key]?.slug === slug) {
                plugins.active[key][prop] = value;
            }
        });
        Object.keys(plugins.online).map(key => {
            if (plugins.online[key]?.slug === slug) {
                plugins.online[key][prop] = value;
            }
        });
        setPlugins({ ...plugins });
    }

    const clearPluginProp = (slug, prop) => {
        Object.keys(plugins.all).map(key => {
            if (plugins.all[key]?.slug === slug) {
                delete plugins.all[key][prop];
            }
        });
        Object.keys(plugins.active).map(key => {
            if (plugins.active[key]?.slug === slug) {
                delete plugins.active[key][prop];
            }
        });
        Object.keys(plugins.online).map(key => {
            if (plugins.online[key]?.slug === slug) {
                delete plugins.online[key][prop];
            }
        });
        setPlugins({ ...plugins });
    }

    const getApps = async () => {
        await client('/api/apps', undefined, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    apps.local = json.data.apps;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
        await client('/api/online/apps/list', undefined, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    apps.online = json.data.apps;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const getPlugins = async () => {
        await client('/api/plugins', undefined, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    plugins.all = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
        await client('/api/plugins/active', undefined, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    plugins.active = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
        await client('/api/online/plugins/list', undefined, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    plugins.online = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const downloadApp = async e => {
        e.preventDefault();
        setAppProp(e.target.dataset.slug, 'queued', 'Install');
        await client('/api/online/apps/download', { slug: e.target.dataset.slug }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(e.target.dataset.slug, 'Has been downloaded and installed', { appearance: 'success' });
                    clearAppProp(e.target.dataset.slug, 'queued');
                    apps.local = json.data.apps;
                    apps.online = json.data.online;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const updateApp = async e => {
        e.preventDefault();
        setAppProp(e.target.dataset.slug, 'queued', 'Update');
        await client('/api/online/apps/download', { slug: e.target.dataset.slug }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(e.target.dataset.slug, `Has been updated`, { appearance: 'success' });
                    clearAppProp(e.target.dataset.slug, 'queued');
                    apps.local = json.data.apps;
                    apps.online = json.data.online;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const activateApp = async e => {
        e.preventDefault();
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'activate' }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

                    // Reload Navigation
                    loadNavigation();

                    Object.keys(apps.local).map((key) => {
                        if (e.target.dataset.slug === apps.local[key].slug) {
                            apps.local[key].active = true;
                        }
                    });
                    Object.keys(apps.online).map((key) => {
                        if (e.target.dataset.slug === apps.online[key].slug) {
                            apps.online[key].active = true;
                        }
                    });
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const deactivateApp = async e => {
        e.preventDefault();
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'deactivate' }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

                    // Reload Navigation
                    loadNavigation();

                    Object.keys(apps.local).map((key) => {
                        if (e.target.dataset.slug === apps.local[key].slug) {
                            apps.local[key].active = false;
                        }
                    });
                    Object.keys(apps.online).map((key) => {
                        if (e.target.dataset.slug === apps.online[key].slug) {
                            apps.online[key].active = false;
                        }
                    });
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const installApp = async e => {
        e.preventDefault();
        setAppProp(e.target.dataset.slug, 'queued', 'Install');
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'install' }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });
                    clearAppProp(e.target.dataset.slug, 'queued');

                    // Reload Navigation
                    loadNavigation();

                    Object.keys(apps.local).map((key) => {
                        if (e.target.dataset.slug === apps.local[key].slug) {
                            apps.local[key].installed = true;
                        }
                    });
                    Object.keys(apps.online).map((key) => {
                        if (e.target.dataset.slug === apps.online[key].slug) {
                            apps.online[key].installed = true;
                        }
                    });
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const uninstallApp = async e => {
        e.preventDefault();
        setAppProp(e.target.dataset.slug, 'queued', 'Uninstall');
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'uninstall' }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });
                    clearAppProp(e.target.dataset.slug, 'queued');

                    let _apps = [];
                    Object.keys(apps.local).map((key) => {
                        if (e.target.dataset.slug !== apps.local[key].slug) {
                            _apps.push(apps.local[key]);
                        }
                    });
                    apps.local = _apps;

                    Object.keys(apps.online).map((key) => {
                        if (e.target.dataset.slug === apps.online[key].slug) {
                            apps.online[key] = json.data.app;
                        }
                    });
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const downloadPlugin = async e => {
        e.preventDefault();
        setPluginProp(e.target.dataset.slug, 'queued', 'Install');
        await client('/api/online/plugins/download', { slug: e.target.dataset.slug }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });
                    clearPluginProp(e.target.dataset.slug, 'queued');

                    plugins.all = json.data.plugins;
                    plugins.online = json.data.online;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const updatePlugin = async e => {
        e.preventDefault();
        setPluginProp(e.target.dataset.slug, 'queued', 'Update');
        await client('/api/online/plugins/download', { slug: e.target.dataset.slug }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });
                    clearPluginProp(e.target.dataset.slug, 'queued');

                    plugins.all = json.data.plugins;
                    plugins.online = json.data.online;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const togglePlugin = async e => {
        e.preventDefault();
        await client('/api/plugins/toggle', { slug: e.target.dataset.slug }, { signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.plugin.name, json.data.message, { appearance: 'success' });

                    Object.keys(plugins.all).map((key) => {
                        if (e.target.dataset.slug === plugins.all[key].slug) {
                            plugins.all[key].state = json.data.plugin.state;
                            plugins.all[key].installed = true;
                            delete plugins.all[key].downloaded;
                        }
                    });
                    Object.keys(plugins.online).map((key) => {
                        if (e.target.dataset.slug === plugins.online[key].slug) {
                            plugins.online[key].state = json.data.plugin.state;
                            plugins.online[key].installed = true;
                            delete plugins.online[key].downloaded;
                        }
                    });
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const uninstallPlugin = async e => {
        e.preventDefault();
        setPluginProp(e.target.dataset.slug, 'queued', 'Uninstall');
        await client('/api/plugin', { slug: e.target.dataset.slug, '_method': 'DELETE' }, { method: 'DELETE', signal: controller.signal })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.plugin.name, json.data.message, { appearance: 'success' });
                    clearPluginProp(e.target.dataset.slug, 'queued');

                    let _plugins = [];
                    Object.keys(plugins.all).map((key) => {
                        if (e.target.dataset.slug !== plugins.all[key].slug) {
                            _plugins.push(plugins.all[key]);
                        }
                    });
                    plugins.all = _plugins;
                    Object.keys(plugins.online).map((key) => {
                        if (e.target.dataset.slug === plugins.online[key].slug) {
                            plugins.online[key] = json.data.plugin;
                        }
                    });
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const _apps = {
        local: apps.local,
        online: apps.online,
        download: downloadApp,
        update: updateApp,
        activate: activateApp,
        deactivate: deactivateApp,
        install: installApp,
        uninstall: uninstallApp,
    }

    const _plugins = {
        all: plugins.all,
        active: plugins.active,
        online: plugins.online,
        download: downloadPlugin,
        update: updatePlugin,
        toggle: togglePlugin,
        uninstall: uninstallPlugin,
    }

    const setUI = () => {
        console.error('Deprecated function, please use WebAppsUX context instead!');
    }

    const UI = {
        dark_mode: darkMode,
        theme: theme,
    }

    return (
        <WebAppsContext.Provider
            value={{
                navigation: navigation, // Legacy - from UX
                UI: UI, // Legacy - from UX
                loadNavigation: loadNavigation, // Legacy - from UX
                setUI: setUI, // Legacy - Deprecated
                apps: _apps,
                plugins: _plugins,
            }}
        >
            {props.children || null}
        </WebAppsContext.Provider>
    )
}