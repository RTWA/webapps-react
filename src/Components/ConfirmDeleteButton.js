import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ConfirmDeleteButton = props => {
    const {
        text,
        confirmText,
        onClick,
        timeout,
        className,
        initialClasses,
        confirmClasses,
        ...attributes
    } = props;

    const [waiting, setWaiting] = useState(false);

    const onConfirm = e => {
        e.preventDefault();
        setWaiting(false);
        onClick();
    }

    const onQuery = e => {
        e.preventDefault();
        setWaiting(true);

        setTimeout(() => {
            setWaiting(false);
        }, timeout)
    }

    const queryClass = classNames(
        className,
        initialClasses
    )

    const confirmClass = classNames(
        className,
        confirmClasses
    )

    return (
        (waiting)
            ?
            <button type="button" onClick={onConfirm} className={confirmClass} {...attributes}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {confirmText}
            </button>
            :
            <button type="button" onClick={onQuery} className={queryClass} {...attributes}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                {text}
            </button>
    )
}

ConfirmDeleteButton.propTypes = {
    text: PropTypes.string,
    confirmText: PropTypes.string,
    onClick: PropTypes.func,
    timeout: PropTypes.number,
    className: PropTypes.string,
    initialClasses: PropTypes.string,
    confirmClasses: PropTypes.string,
}

ConfirmDeleteButton.defaultProps = {
    text: "Delete",
    confirmText: "Delete - Are you sure?",
    timeout: 2000,
    className: 'block mx-auto my-auto px-4 py-2 outline-none',
    initialClasses: 'bg-red-500',
    confirmClasses: 'bg-orange-500',
}

export default ConfirmDeleteButton;