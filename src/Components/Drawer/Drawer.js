import React, { useEffect } from 'react';
import classNames from 'classnames';

import { withWebAppsUX } from '../../Context';
import Scrollbar from '../Scrollbar';

const Drawer = props => {
    const {
        breakpoint,
        isBreakpoint,
        useDrawer,
        children,
    } = props;

    const { drawer, setDrawer, toggleDrawer } = useDrawer;

    useEffect(() => {
        drawer.active = true;
        setDrawer({ ...drawer });

        return () => {
            drawer.active = false;
            setDrawer({ ...drawer });
        }
    }, []);

    useEffect(() => {
        if (isBreakpoint('lg')) {
            drawer.display_mode = 'side';
            drawer.opened = true;
        } else {
            drawer.display_mode = 'overlay';
            drawer.opened = false;
        }
        setDrawer({ ...drawer });
    }, [breakpoint]);

    const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';

    const navClasses = classNames(
        'webapps-drawer',
        'bg-white dark:bg-gray-900',
        'text-black dark:text-white',
        'border-r',
        'dark:border-gray-800',
        (drawer.display_mode === 'side') ? '' : 'webapps-drawer-overlay',
        (drawer.display_mode === 'side')
            ? (drawer.opened)
                ? 'ml-0' : '-ml-72'
            : (drawer.opened)
                ? 'translate-x-0' : '-translate-x-full'
    )

    return (
        <>
            <div className={navClasses}>
                <div className="absolute left-0 top-0 bottom-0 flex flex-auto flex-col w-full h-full overflow-hidden z-[110]">
                    <Scrollbar
                        settings={{ suppressScrollX: !isRtl }}
                        tag="div"
                        className={`flex flex-col flex-grow h-full`}
                    >
                        {children || null}
                    </Scrollbar>
                </div>
            </div>
            {
                (drawer.display_mode === 'overlay' && drawer.opened)
                    ? <div className="absolute top-0 bottom-0 left-0 right-0 z-[199] opacity-60 bg-gray-600" onClick={toggleDrawer}></div>
                    : null
            }
        </>
    );
}

export default withWebAppsUX(Drawer);