import React, { useContext } from 'react';
import { WebAppsContext } from '../../../Context/index';

const AppActionButtons = ({ app, ...props }) => {
    const { apps } = useContext(WebAppsContext);

    // Installed, has update
    if (app.installed && app.hasUpdate) {
        return (
            <button className="py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full"
                data-slug={app.slug} onClick={apps.update}>
                Update<br />
                <span className="text-xs">from {app.current_version}</span>
            </button>
        );
    }

    // Installed, not active
    if ((app.installed && !app.active)) {
        return (
            <div className="flex flex-col w-full">
                <button className="py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow"
                    data-slug={app.slug} onClick={apps.activate}>
                    Activate
                </button>
                <button className="py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow"
                    data-slug={app.slug} onClick={apps.uninstall}>
                    Uninstall
                </button>
            </div>
        )
    }

    // Not downloaded, not installed
    if (!app.downloaded && !app.installed) {
        return (
            <button className="py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full"
                data-slug={app.slug} onClick={apps.download}>
                Install
            </button>
        )
    }

    // Downloaded, but not installed
    if (app.downloaded && !app.installed) {
        return (
            <button className="py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full"
                data-slug={app.slug} onClick={apps.install}>
                Install
            </button>
        )
    }

    // Installed, Active, No Updates
    if (app.installed && app.active && !app.hasUpdate) {
        return (
            <button className="py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full "
                data-slug={app.slug} onClick={apps.deactivate}>
                Deactivate
            </button>
        )
    }
}

export default AppActionButtons;