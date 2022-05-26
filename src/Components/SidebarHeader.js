import React, { useContext } from 'react';
import { WebAppsUXContext } from '../Context';

const SidebarHeader = () => {
    const { theme, useNavigation } = useContext(WebAppsUXContext);
    const { navigation } = useNavigation;

    return (
        <div className={`flex items-center h-20 p-6 pb-0 ${(navigation?.color_mode === 'dark') ? 'text-white' : 'text-gray-600 dark:text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-10 text-${theme}-600`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <span className="ml-4 text-2xl font-bold">
                WebApps
            </span>
        </div>
    );
}

export default SidebarHeader;