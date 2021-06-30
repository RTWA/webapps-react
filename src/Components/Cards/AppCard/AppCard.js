import React from 'react';
import AppActionButtons from './AppActionButtons';

import Icon from '../../Icon';

const AppCard = props => {
    const {
        app,
        showActions,
    } = props;

    return (
        <div className="my-2 px-1 w-full lg:my-4 lg:px-4 lg:w-4/12">
            <div className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 flex flex-row">
                <div className="flex flex-grow-0 flex-shrink-0 w-20 bg-gray-100 dark:bg-gray-700 relative">
                    <Icon icon={app.icon} className="absolute top-1.5 bottom-1.5 left-1.5 right-1.5" />
                </div>
                <div className="flex-grow p-4">
                    <div className="flex">
                        <p className="font-bold flex-grow">{app.name}</p>
                        <span className="inline-block text-blue-600 border border-blue-600 bg-blue-300 px-2 py-1 text-xs font-bold">{app.version}</span>
                    </div>
                    <p className="text-gray-400 text-sm">By {app.author}</p>
                    <p className="text-gray-400">{app.description}</p>
                </div>
                {
                    (showActions) ?
                        (
                            <div className="flex flex-grow-0 flex-shrink-0 w-24 ml-3">
                                <AppActionButtons app={app} />
                            </div>
                        ) : null
                }
            </div>
        </div>
    )
}

export default AppCard;