import React, { useContext } from 'react';
import NotificationItem from './NotificationItem';
import { NotificationsContext } from './NotificationsContext';

const NotificationList = () => {
    const { notifications, markAllAsSeen, removeAll, unread } = useContext(NotificationsContext);

    return (
        <div className="absolute top-8 right-0 w-80 border border-gray-300 dark:border-gray-700">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-2 flex items-center">
                Notifications
                {
                    (notifications.length)
                        ? (
                            <button className="text-xs hover:text-semibox ml-auto cursor-pointer bg-transparent outline-none" type="button" onClick={removeAll}>
                                Clear All Notifications
                            </button>
                        ) : null
                }
            </div>
            <div className="bg-white dark:bg-gray-900 relative flex flex-col flex-auto sm:max-h-120 divide-y overflow-y-auto">
                {
                    (!notifications.length)
                        ? (
                            <p className="text-sm text-center p-3">You have no unread notifications!</p>
                        ) :
                        notifications.map((notification, idx) => {
                            return <NotificationItem key={idx} notification={notification} />
                        })
                }
            </div>
            {
                (unread !== 0)
                    ? (
                        <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 p-2 flex items-center text-xs">
                            <button className="mx-auto cursor-pointer bg-transparent outline-none" type="button" onClick={markAllAsSeen}>
                                Mark All Notifications As Read
                            </button>
                        </div>
                    ) : null
            }
        </div>
    )
}

export default NotificationList;