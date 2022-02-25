import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from './Button';

const ConfirmDeleteButton = props => {
    const {
        text,
        confirmText,
        onClick,
        timeout,
        initialColor,
        confirmColor,
        className,
        ...attributes
    } = props;

    const isMountedRef = useRef(true);
    const isMounted = useCallback(() => isMountedRef.current, []);

    let timer = null;

    useEffect(() => {
        () => {
            if (timer) {
                clearTimeout(timer);
            }
            void (isMountedRef.current = false);
        }
    },[]);

    const [waiting, setWaiting] = useState(false);

    const onConfirm = e => {
        e.preventDefault();
        setWaiting(false);
        onClick();
    }

    const onQuery = e => {
        e.preventDefault();
        setWaiting(true);

        timer = setTimeout(() => {
            if (isMounted()) {
                setWaiting(false);
            }
        }, timeout)
    }

    return (
        (waiting)
            ?
            <Button className={classNames('flex', 'flex-row', 'items-center', className)} color={confirmColor} onClick={onConfirm} {...attributes}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {confirmText}
            </Button>
            :
            <Button className={classNames('flex', 'flex-row', 'items-center', className)} color={initialColor} onClick={onQuery} {...attributes}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {text}
            </Button>
    )
}

ConfirmDeleteButton.propTypes = {
    text: PropTypes.string,
    confirmText: PropTypes.string,
    onClick: PropTypes.func,
    timeout: PropTypes.number,
    initialColor: PropTypes.string,
    confirmColor: PropTypes.string,
}

ConfirmDeleteButton.defaultProps = {
    text: "Delete",
    confirmText: "Delete - Are you sure?",
    timeout: 2000,
    initialColor: 'red',
    confirmColor: 'orange',
}

export default ConfirmDeleteButton;