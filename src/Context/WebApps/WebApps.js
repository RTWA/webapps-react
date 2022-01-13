import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import { ToastProvider, useToasts } from '../../Toasts';

export const WebAppsContext = React.createContext({});

const useModals = createLocalStorageStateHook('modals', {});
const useUI = createLocalStorageStateHook('UI', { sidebar: 'responsive', envWriteable: false })

const WebAppsProvider = props => {
    const unmounted = useRef(false);
    const [UI, setUI] = useUI();
    const [modals, setModals] = useModals();
    const [navigation, setNavigation] = useState({});
    const [apps, setApps] = useState({});
    const [plugins, setPlugins] = useState({});

    const { addToast } = useToasts();

    useEffect(() => {
        unmounted.current = true;

        loadUI();
        loadNavigation();
        getApps();
        getPlugins();

        return () => { unmounted.current = false; }
    }, []);

    const toggleModal = modal => {
        if (unmounted.current) {
            setModals({
                modal: !modals[modal]
            });
        }
    }

    const loadUI = async () => {
        let formData = new FormData();
        formData.append('key', JSON.stringify(['core.ui.theme', 'core.ui.dark_mode']));

        await axios.post('/api/setting', formData)
            .then(json => {
                if (unmounted.current) {
                    UI.theme = json.data['core.ui.theme'];
                    UI.dark_mode = json.data['core.ui.dark_mode'];
                    setUI({ ...UI });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const loadNavigation = async () => {
        await axios.get('/api/navigation')
            .then(json => {
                if (unmounted.current) {
                    navigation.menu = json.data.navigation;
                    navigation.routes = json.data.routes;
                    UI.envWriteable = json.data.envPermissions;

                    setNavigation({ ...navigation });
                    setUI({ ...UI });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    let nav = [];
                    nav['error'] = true;
                    nav['message'] = error.response.data.message;
                    setNavigation(nav);
                }
            });
    }

    const getApps = async () => {
        await axios.get('/api/apps')
            .then(json => {
                if (unmounted.current) {
                    apps.local = json.data.apps;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TOOD: Handle errors
                    console.error(error);
                }
            });
        await axios.get('/api/online/apps/list')
            .then(json => {
                if (unmounted.current) {
                    apps.online = json.data.apps;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const getPlugins = async () => {
        await axios.get('/api/plugins')
            .then(json => {
                if (unmounted.current) {
                    plugins.all = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TOOD: Handle errors
                    console.error(error);
                }
            });
        await axios.get('/api/plugins/active')
            .then(json => {
                if (unmounted.current) {
                    plugins.active = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TOOD: Handle errors
                    console.error(error);
                }
            });
        await axios.get('/api/online/plugins/list')
            .then(json => {
                if (unmounted.current) {
                    plugins.online = json.data.plugins;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const downloadApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/online/apps/download', formData)
            .then(json => {
                if (unmounted.current) {
                    addToast(e.target.dataset.slug, 'Has been downloaded and installed', { appearance: 'success' });
                    apps.local = json.data.apps;
                    apps.online = json.data.online;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const updateApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/online/apps/download', formData)
            .then(json => {
                if (unmounted.current) {
                    addToast(e.target.dataset.slug, `Has been updated`, { appearance: 'success' });
                    apps.local = json.data.apps;
                    apps.online = json.data.online;
                    setApps({ ...apps });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const activateApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        formData.append('task', 'activate');
        await axios.post('/api/apps/control', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
                    console.error(error);
                }
            });
    }

    const deactivateApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        formData.append('task', 'deactivate');
        await axios.post('/api/apps/control', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
                    console.error(error);
                }
            });
    }

    const installApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        formData.append('task', 'install');
        await axios.post('/api/apps/control', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
                    console.error(error);
                }
            });
    }

    const uninstallApp = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        formData.append('task', 'uninstall');
        await axios.post('/api/apps/control', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
                    console.error(error);
                }
            });
    }

    const downloadPlugin = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/online/plugins/download', formData)
            .then(json => {
                if (unmounted.current) {
                    addToast(json.data.message, '', { appearance: 'success' });

                    plugins.all = json.data.plugins;
                    plugins.online = json.data.online;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const updatePlugin = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/online/plugins/download', formData)
            .then(json => {
                if (unmounted.current) {
                    addToast(json.data.message, '', { appearance: 'success' });

                    plugins.all = json.data.plugins;
                    plugins.online = json.data.online;
                    setPlugins({ ...plugins });
                }
            })
            .catch(error => {
                if (unmounted.current) {
                    // TODO: handle errors
                    console.log(error);
                }
            });
    }

    const togglePlugin = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/plugins/toggle', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
                    console.error(error);
                }
            });
    }

    const uninstallPlugin = async e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('_method', 'DELETE');
        formData.append('slug', e.target.dataset.slug);
        await axios.post('/api/plugin', formData)
            .then(json => {
                if (unmounted.current) {
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
                if (unmounted.current) {
                    // TODO: handle errors
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