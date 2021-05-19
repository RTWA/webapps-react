import React, { useContext } from 'react';
import { WebAppsContext } from '../../../Context/index';

const PluginActionButtons = ({ plugin, ...props }) => {
    const { plugins } = useContext(WebAppsContext);

    if (plugin.installed && plugin.hasUpdate) {
        return (
            <button className="py-auto bg-orange-300 dark:bg-orange-600 hover:bg-orange-600 dark:hover:bg-orange-400 focus:outline-none w-full"
                data-slug={plugin.slug} onClick={plugins.update}>
                Update<br />
                <span className="text-xs">from {plugin.current_version}</span>
            </button>
        );
    }

    if ((plugin.downloaded && !plugin.installed) || (plugin.installed && !plugin.state)) {
        return (
            <div className="flex flex-col w-full">
                <button className="py-auto bg-blue-300 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 focus:outline-none w-full flex-grow"
                    data-slug={plugin.slug} onClick={plugins.toggle}>
                    Activate
                </button>
                <button className="py-auto bg-gray-200 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-500 hover:text-white focus:outline-none w-full flex-grow"
                    data-slug={plugin.slug} onClick={plugins.uninstall}>
                    Uninstall
                </button>
            </div>
        )
    }

    if (!plugin.downloaded && !plugin.installed) {
        return (
            <button className="py-auto bg-green-300 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-400 focus:outline-none w-full"
                data-slug={plugin.slug} onClick={plugins.download}>
                Install
            </button>
        )
    }

    if (plugin.installed && !plugin.hasUpdate) {
        return (
            <button className="py-auto bg-gray-300 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white focus:outline-none w-full "
                data-slug={plugin.slug} onClick={plugins.toggle}>
                Deactivate
            </button>
        )
    }
}

export default PluginActionButtons;