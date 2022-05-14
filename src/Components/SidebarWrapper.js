import React, { useEffect } from 'react';
import { withWebAppsUX, withWebApps } from '../Context/index';
import NavigationError from '../Errors/NavigationError';
import Scrollbar from './Scrollbar';
import classNames from 'classnames';

const SidebarWrapper = props => {
    const {
        breakpoint,
        isWithinBreakpoint,
        loadNavigation,
        UI,
        setUI,
        children,
    } = props;

    useEffect(() => {
        if (isWithinBreakpoint(breakpoint, 'md')) {
            UI.navigation.display_mode = 'side';
            UI.navigation.opened = true;
        } else {
            UI.navigation.display_mode = 'overlay';
            UI.navigation.opened = false;
        }
        setUI({ ...UI });
    }, [breakpoint]);

    const toggle = () => {
        UI.navigation.opened = !UI.navigation.opened
        setUI({ ...UI });
    }

    const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';

    const navClasses = classNames(
        'webapps-sidebar',
        (UI.navigation.color_mode === 'dark') ? 'bg-gray-900' : 'bg-white dark:bg-gray-900',
        (UI.navigation.display_mode === 'side') ? '' : 'webapps-sidebar-overlay',
        (UI.navigation.display_mode === 'side')
            ? (UI.navigation.opened)
                ? 'ml-0' : '-ml-72'
            : (UI.navigation.opened)
                ? 'translate-x-0' : '-translate-x-full'
    )

    return (
        <>
            <nav className={navClasses}>
                <div className="absolute left-0 top-0 bottom-0 flex flex-auto flex-col w-full h-full overflow-hidden z-[1000]">
                    <div className={`flex items-center h-20 p-6 pb-0 ${(UI.navigation.color_mode === 'dark') ? 'text-white' : 'text-gray-600 dark:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-10 text-${UI.theme}-600 dark:text-${UI.theme}-500`}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        <span className="ml-4 text-2xl font-bold">
                            WebApps {breakpoint}
                        </span>
                    </div>
                    <NavigationError retry={loadNavigation}>
                        <Scrollbar
                            settings={{ suppressScrollX: !isRtl }}
                            tag="div"
                            className={`flex flex-col flex-grow h-full px-3 mt-6`}
                        >
                            {children}
                        </Scrollbar>
                    </NavigationError>
                </div>
            </nav>
            {
                (UI.navigation.display_mode === 'overlay' && UI.navigation.opened)
                    ? <div className="absolute top-0 bottom-0 left-0 right-0 z-[170] opacity-60 bg-gray-600" onClick={toggle}></div>
                    : null
            }
        </>
    )
}

export default withWebAppsUX(withWebApps(SidebarWrapper));