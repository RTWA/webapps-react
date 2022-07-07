import React, { createContext, useEffect, useState } from 'react';

import { generateUEID, NOOP } from '../Helpers/utils';

export const NotificationsContext = createContext({});

export const NotificationsProvider = props => {
    const [notifications, setNotifications] = useState([]);
    const [unread, setUnread] = useState(0);

    useEffect(() => {
        setUnread(notifications.filter(n => !n.seen).length);
    }, [notifications]);

    const hasNotification = id => {
        if (!notifications.length) {
            return false;
        }

        return Boolean(notifications.filter(n => n.id === id).length);
    }

    const onDismiss = (id, cb = NOOP) => {
        cb(id);
        removeNotification(id);
    }

    const addNotification = (title, content, options = {}, cb = NOOP) => {
        const id = options.id ? options.id : generateUEID();
        const callback = () => cb(id);

        // Don't add a notification, if one with this ID already exists
        if (hasNotification(id)) {
            return;
        }

        // Add the Notifications
        let newNotification = {
            title,
            content,
            id,
            seen: false,
            ...options
        };
        setNotifications([newNotification, ...notifications]);
        callback();

        // Return the ID of the new notification
        return id;
    }

    const removeNotification = (id, cb = NOOP) => {
        const callback = () => cb(id);

        // Can't remove a notification, if it does not exist
        if (!hasNotification(id)) {
            return;
        }

        setNotifications(notifications.filter(n => n.id !== id));
        callback();
    }

    const removeAllNotifications = () => {
        // Can't remove notifications if there aren't any
        if (!notifications.length) {
            return;
        }

        setNotifications([]);
    }

    const updateNotification = (id, options = {}, cb = NOOP) => {
        const callback = () => cb(id);

        // Can't update a notification, if it does not exist
        if (!hasNotification(id)) {
            return;
        }

        let i = notifications.findIndex(n => n.id === id);
        setNotifications([...notifications.slice(0, i), { ...notifications[i], ...options }, ...notifications.slice(i + 1)]);
        callback();
    }

    const markNotificationAsSeen = (id, cb = NOOP) => {
        const callback = () => cb(id);

        // Can't mark as seend, if it does not exit
        if (!hasNotification(id)) {
            return;
        }

        let i = notifications.findIndex(n => n.id === id);
        let notification = notifications[i];
        notification.seen = true;
        setNotifications([...notifications.slice(0, i), notification, ...notifications.slice(i + 1)]);
        callback();
    }

    const markAllAsSeen = () => {
        notifications.map(n => {
            if (!n.seen) {
                markNotificationAsSeen(n.id);
            }
        });
    }

    const useNotifications = {
        add: addNotification,
        update: updateNotification,
        remove: removeNotification,
        markAsSeen: markNotificationAsSeen,
        hasNotification,
        onDismiss,
    }

    return (
        <NotificationsContext.Provider
            children={props.children}
            value={{
                notifications,
                useNotifications,
                markAllAsSeen,
                removeAll: removeAllNotifications,
                unread,
            }}
        />
    )
}