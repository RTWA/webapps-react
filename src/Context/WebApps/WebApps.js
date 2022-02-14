import React, { useEffect, useState } from 'react';
import { createLocalStorageStateHook } from 'use-local-storage-state';

import { client, controller } from '../../API';
import isMounted from '../../Helpers/isMounted';
import { ToastProvider, useToasts } from '../../Toasts';

export const WebAppsContext = React.createContext({});

const useModals = createLocalStorageStateHook('modals', {});
const useUI = createLocalStorageStateHook('UI', { sidebar: 'responsive', envWriteable: false })

const WebAppsProvider = props => {
    const [UI, setUI] = useUI();
    const [modals, setModals] = useModals();
    const [navigation, setNavigation] = useState({});
    const [apps, setApps] = useState({});
    const [plugins, setPlugins] = useState({});

    const { addToast } = useToasts();

    useEffect(() => {
        loadUI();
        loadNavigation();
        getApps();
        getPlugins();

        return () => { controller.abort(); }
    }, []);

    const toggleModal = modal => {
        if (unmounted.current) {
            setModals({
                modal: !modals[modal]
            });
        }
    }

    const loadUI = async () => {
        await client('/api/setting', { key: JSON.stringify(['core.ui.theme', 'core.ui.dark_mode']) })
            .then(json => {
                if (isMounted()) {
                    UI.theme = json.data['core.ui.theme'];
                    UI.dark_mode = json.data['core.ui.dark_mode'];
                    setUI({ ...UI });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    }

    const loadNavigation = async () => {
        await client('/api/navigation')
            .then(json => {
                if (isMounted()) {
                    navigation.menu = json.data.navigation;
                    navigation.routes = json.data.routes;
                    UI.envWriteable = json.data.envPermissions;

                    setNavigation({ ...navigation });
                    setUI({ ...UI });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    let nav = [];
                    nav['error'] = true;
                    nav['message'] = error.data.message;
                    setNavigation(nav);
                }
            });
    }

    const getApps = async () => {
        await client('/api/apps')
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
        await client('/api/online/apps/list')
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
        await client('/api/plugins')
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
        await client('/api/plugins/active')
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
        await client('/api/online/plugins/list')
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
        await client('/api/online/apps/download', { slug: e.target.dataset.slug })
            .then(json => {
                if (isMounted()) {
                    addToast(e.target.dataset.slug, 'Has been downloaded and installed', { appearance: 'success' });
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
        await client('/api/online/apps/download', { slug: e.target.dataset.slug })
            .then(json => {
                if (isMounted()) {
                    addToast(e.target.dataset.slug, `Has been updated`, { appearance: 'success' });
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
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'activate' })
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
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'deactivate' })
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
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'install' })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

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
        await client('/api/apps/control', { slug: e.target.dataset.slug, task: 'uninstall' })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

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
        await client('/api/online/plugins/download', { slug: e.target.dataset.slug })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

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
        await client('/api/online/plugins/download', { slug: e.target.dataset.slug })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.message, '', { appearance: 'success' });

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
        await client('/api/plugins/toggle', { slug: e.target.dataset.slug })
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
        await client('/api/plugin', { slug: e.target.dataset.slug, '_method': 'DELETE' }, { method: 'DELETE' })
            .then(json => {
                if (isMounted()) {
                    addToast(json.data.plugin.name, json.data.message, { appearance: 'success' });

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

    return (
        <WebAppsContext.Provider
            value={{
                navigation: navigation,
                UI: UI,
                modals: modals,
                loadNavigation: loadNavigation,
                setUI: setUI,
                setModals: setModals,
                toggleModal: toggleModal,
                apps: _apps,
                plugins: _plugins,
            }}
        >
            {props.children || null}
        </WebAppsContext.Provider>
    )
}

export const WebApps = props => {
    const [UI, setUI] = useUI();

    return (
        <ToastProvider UI={UI} autoDismiss="true" autoDismissTimeout="3000">
            <WebAppsProvider {...props} />
        </ToastProvider>
    )
}