import React, { useContext, useEffect, useRef, useState } from 'react';
import NotificationList from './NotificationList';
import { NotificationsContext } from './NotificationsContext';

const Notifications = () => {
    const [isOpen, setIsOpen] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [wrapperRef]);

    const { useNotifications, unread } = useContext(NotificationsContext);
    const { add } = useNotifications;

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);

        add(
            'Notification Title',
            'notification content is this',
            { appearance: 'error' }
        );
    }

    return (
        <div className="relative" ref={wrapperRef}>
            <button className="relative w-8 cursor-pointer text-gray-600 dark:text-gray-400 text-xl leading-none bg-transparent outline-none" type="button" onClick={toggleIsOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {
                    (unread)
                        ? <span className="absolute top-1 right-0 transform -translate-y-1/2 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                        : null
                }
            </button>
            {
                (isOpen)
                    ? <NotificationList />
                    : null
            }
        </div>
    )
}

export default Notifications;