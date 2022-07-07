import React, { useContext } from 'react';
import { NotificationsContext } from './NotificationsContext';

import { appearances } from './styles/appearances';


const NotificationItem = ({ notification, ...props }) => {
    const { useNotifications } = useContext(NotificationsContext);
    const { update, remove } = useNotifications;

    const Style = appearances[notification.appearance || 'misc'];

    let timer = null;

    const mouseEnter = () => {
        timer = setTimeout(() => {
            notification.seen = true;
            update(notification.id, notification);
        }, 1500);
    }

    const mouseLeave = () => {
        if (timer) {
            clearTimeout(timer);
        }
    }

    return (
        <div className="flex group hover:bg-gray-50 dark:hover:bg-black dark:hover:bg-opacity-5 text-sm" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} {...props}>
            <div className="flex flex-auto p-3">
                <div className="relative flex shrink-0 items-center justify-center w-6 h-6 mr-3 rounded-full bg-gray-100 dark:bg-gray-800">
                    {
                        (!notification.seen)
                            ? <span className="motion-reduce:hidden animate-ping absolute inline-flex h-3 w-3 rounded-full bg-gray-500 opacity-75"></span>
                            : null
                    }
                    <span className={`relative inline-flex h-4 w-4 ${Style.iconColor}`}>
                        <Style.icon />
                    </span>
                </div>
                <div className="flex flex-col flex-auto">
                    {
                        (notification.seen)
                            ? <div className="line-clamp-1">{notification.title}</div>
                            : <div className="font-semibold line-clamp-1">{notification.title}</div>
                    }
                    <div className="line-clamp-2">{notification.content}</div>
                    <div className="text-xs text-gray-600"> Jun 27, 10:21 AM </div>
                </div>
                <button className="w-6 h-6 min-h-6 sm:opacity-0 sm:group-hover:opacity-100" onClick={() => remove(notification.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NotificationItem;