import React from 'react';
import classNames from 'classnames';

const placements = {
    'top-left': ['top-0', 'left-0'],
    'top-center': ['top-0', 'left-1/2', 'transform', '-translate-x-1/2'],
    'top-right': ['top-0', 'right-0'],
    'bottom-left': ['bottom-0', 'left-0'],
    'bottom-center': ['bottom-0', 'left-1/2', 'transform', '-translate-x-1/2'],
    'bottom-right': ['bottom-0', 'right-0'],
};

const classes = (placement, hasToasts) => classNames(
    'box-border',
    'max-w-full',
    'max-h-screen',
    'overflow-hidden',
    'fixed',
    'p-2',
    placements[placement],
    (hasToasts) ? null : 'pointer-events-none'
)

export const ToastContainer = ({ hasToasts, placement, ...props }) => (
    <div
        className={classes(placement, hasToasts)}
        style={{
            zIndex: 1000,
        }}
        {...props}
    />
);