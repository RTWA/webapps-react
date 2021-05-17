import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withWebApps } from '../Context/index';
import NavigationError from '../Errors/NavigationError';
import Scrollbar from './Scrollbar';

const SidebarWrapper = ({ loadNavigation, UI, setUI, ...props }) => {
    const {
        children,
        dropdownMode,
    } = props;

    useEffect(() => {
        if (UI.navigation !== undefined) {
            UI.navigation = {
                dropdownMode: dropdownMode,
                openDropdown: ''
            };
            setUI({ ...UI });
        }
    }, [dropdownMode]);

    const [collapseShow, setCollapseShow] = useState('hidden');

    const toggle = () => {
        setCollapseShow((collapseShow === 'hidden') ? '' : 'hidden');
    }
    const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';

    return (
        <nav className="flex flex-wrap items-center relative z-50 shadow-xl bg-white dark:bg-gray-800 md:flex-col md:w-72 md:h-screen md:border-r border-transparent dark:border-gray-600">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button
                    className="cursor-pointer text-black dark:text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent outline-none"
                    type="button"
                    onClick={toggle}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="flex flex-none items-center justify-center md:h-24 py-2 md:py-0 mx-auto text-gray-600 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-10 text-${UI.theme}-600 dark:text-${UI.theme}-500`}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                    <span className="ml-4 text-2xl font-bold">
                        WebApps
                    </span>
                </div>
                <NavigationError retry={loadNavigation}>
                    <Scrollbar
                        settings={{ suppressScrollX: !isRtl }}
                        tag="ul"
                        className={`md:my-5 md:px-6 md:flex md:flex-col md:flex-grow md:relative md:top-0 md:left-0 md:right-0 md:p-0 bg-white dark:bg-gray-800 absolute top-14 left-2 right-2 p-2 z-40 overflow-y-auto overflow-x-hidden h-auto flex-1 rounded-b ${collapseShow}`}
                    >
                        {children}
                    </Scrollbar>
                </NavigationError>
            </div>
        </nav>
    )
}

SidebarWrapper.propTypes = {
    dropdownMode: PropTypes.oneOf([
        '', 'openActive', 'close', 'closeInactive', 'noAction'
    ]),
}

SidebarWrapper.defaultProps = {
    dropdownMode: 'closeInactive'
}

export default withWebApps(SidebarWrapper);