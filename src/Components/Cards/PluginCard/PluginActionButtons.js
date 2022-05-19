import React, { useContext } from 'react';
import { WebAppsContext } from '../../../Context/index';

const PluginActionButtons = ({ plugin, setChangelog, ...props }) => {
    const { plugins } = useContext(WebAppsContext);

    if (plugin.installed && plugin.hasUpdate) {
        return (
            <>
                <button className="w-full dark:text-white bg-orange-300 dark:bg-orange-900 hover:bg-orange-400 dark:hover:bg-orange-800 font-bold py-2 px-4 inline-flex items-center rounded-none"
                    data-slug={plugin.slug} onClick={plugins.update}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                    Install Update
                </button>
                <button className="w-full dark:text-white bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 font-bold py-2 px-4 inline-flex items-center rounded-none"
                    data-slug={plugin.slug} onClick={() => setChangelog(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    What's Changed?
                </button>
            </>
        );
    }

    if ((plugin.downloaded && !plugin.installed) || (plugin.installed && !plugin.state)) {
        return (
            <>
                <button className="w-full dark:text-white bg-blue-300 dark:bg-blue-900 hover:bg-blue-400 dark:hover:bg-blue-800 font-bold py-2 px-4 inline-flex items-center rounded-none"
                    data-slug={plugin.slug} onClick={plugins.toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Activate
                </button>
                <button className="w-full dark:text-white bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 font-bold py-2 px-4 inline-flex items-center rounded-none"
                    data-slug={plugin.slug} onClick={plugins.uninstall}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Uninstall
                </button>
            </>
        )
    }

    if (!plugin.downloaded && !plugin.installed) {
        return (
            <button className="w-full dark:text-white bg-green-300 dark:bg-green-900 hover:bg-green-400 dark:hover:bg-green-800 font-bold py-2 px-4 inline-flex items-center rounded-none"
                data-slug={plugin.slug} onClick={plugins.download}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Install
            </button>
        )
    }

    if (plugin.installed && !plugin.hasUpdate) {
        return (
            <button className="w-full dark:text-white bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 font-bold py-2 px-4 inline-flex items-center rounded-none"
                data-slug={plugin.slug} onClick={plugins.toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
                Deactivate
            </button>
        )
    }
}

export default PluginActionButtons;