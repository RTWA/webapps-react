import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';

import { client as APIClient } from '../../API';
import { getDeviceConfig } from '../../Helpers/getDeviceConfig';
import { isWithinBreakpoint } from '../../Helpers/isWithinBreakpoint';
import { ToastProvider } from '../../Toasts';

export const WebAppsUXContext = createContext({});

let APIController = new AbortController();

export const WebAppsUX = props => {
    const [breakpoint, setBreakpoint] = useState(() => getDeviceConfig(window.innerWidth));
    const [darkMode, setDarkMode] = useState();
    const [drawer, setDrawer] = useState({
        display_mode: 'side',
        opened: true,
    });
    const [flyout, setFlyout] = useState({
        display_mode: 'side',
        opened: false,
    });
    const [navigation, setNavigation] = useState({});
    const [theme, setTheme] = useState();

    const isMountedRef = useRef(true);
    const isMounted = useCallback(() => isMountedRef.current, []);

    useEffect(async () => {
        window.addEventListener('resize', calcInnerWidth);
        await loadUI();
        await loadNavigation();

        return () => {
            void (isMountedRef.current = false);
            APIController.abort();
            window.removeEventListener('resize', calcInnerWidth);
        }
    }, []);

    const loadUI = async () => {
        await APIClient('/api/setting', { key: JSON.stringify(['core.ui.theme', 'core.ui.dark_mode']) }, { signal: APIController.signal })
            .then(json => {
                if (isMounted()) {
                    setTheme(json.data['core.ui.theme']);
                    setDarkMode(json.data['core.ui.dark_mode']);
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    // TODO: Handle errors
                    console.error(error);
                }
            });
    };

    const loadNavigation = async () => {
        await APIClient('/api/navigation', undefined, { signal: APIController.signal })
            .then(json => {
                if (isMounted()) {
                    let navigation = {
                        menu: json.data.navigation,
                        routes: json.data.routes,
                        color_mode: json.data.sidebar.color_mode,
                        display_mode: isBreakpoint('lg') ? 'side' : 'overlay',
                        opened: isBreakpoint('lg') ? true : false,
                    }
                    setNavigation({ ...navigation });
                }
            })
            .catch(error => {
                if (!error.status?.isAbort && isMounted()) {
                    let nav = [];
                    navigation.error = true;
                    navigation.message = error.data.message;
                    setNavigation({ ...navigation });
                }
            });
    };
    
    const toggleNavigation = () => {
        navigation.opened = !navigation.opened
        setNavigation({ ...navigation });
    }

    const calcInnerWidth = throttle(function () {
        setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);

    const isBreakpoint = bp => {
        return isWithinBreakpoint(breakpoint, bp);
    };

    const openDrawer = () => {
        if (!drawer.opened) {
            if (isBreakpoint('lg') && flyout.active) {
                flyout.opened = false;
                setFlyout({ ...flyout });
            }
            drawer.opened = true;
            setDrawer({ ...drawer });
        }
    };

    const closeDrawer = () => {
        if (drawer.opened) {
            drawer.opened = false;
            setDrawer({ ...drawer });
        }
    };

    const toggleDrawer = () => {
        if (drawer.opened) {
            closeDrawer();
        } else {
            openDrawer();
        }
    };

    const openFlyout = () => {
        if (!flyout.opened) {
            if (isBreakpoint('lg') && drawer.active) {
                drawer.opened = false;
                setDrawer({ ...drawer });
            }
            flyout.opened = true;
            setFlyout({ ...flyout });
        }
    };

    const closeFlyout = () => {
        if (flyout.opened) {
            if (isBreakpoint('lg') && drawer.active) {
                drawer.opened = true;
                setDrawer({ ...drawer });
            }
            flyout.opened = false;
            setFlyout({ ...flyout });
        }
    };

    const toggleFlyout = () => {
        if (flyout.opened) {
            closeFlyout();
        } else {
            openFlyout();
        }
    };

    const useNavigation = {
        navigation,
        loadNavigation,
        setNavigation,
        toggleNavigation,
    }

    const useDrawer = {
        drawer,
        setDrawer,
        toggleDrawer,
        closeDrawer,
        openDrawer,
    };

    const useFlyouts = {
        flyout,
        setFlyout,
        toggleFlyout,
        closeFlyout,
        openFlyout,
    };

    return (
        <WebAppsUXContext.Provider
            value={{
                breakpoint,
                darkMode,
                isBreakpoint,
                setDarkMode,
                setTheme,
                theme,
                useDrawer,
                useFlyouts,
                useNavigation,
            }}
        >
            <ToastProvider theme={theme} autoDismiss="true" autoDismissTimeout="3000">
            {props.children || null}
            </ToastProvider>
        </WebAppsUXContext.Provider>
    )
}