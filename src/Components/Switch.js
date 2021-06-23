import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Switch = props => {
    const {
        name,
        error,
        state,
        className,
    } = props;

    const classes = classNames(
        className,
        'checked:bg-gray-500',
        'outline-none',
        'focus:ring-0',
        'focus:outline-none',
        'right-4',
        'checked:right-0',
        'duration-200',
        'ease-in',
        'absolute',
        'block',
        'w-6',
        'h-6',
        'rounded-full',
        'bg-white',
        'border-4',
        'appearance-none',
        'cursor-pointer',
        (state === 'error') ? 'border-red-500 checked:bg-red-500' : '',
        (state === 'saved') ? 'border-green-500 checked:bg-green-500' : '',
        (state === 'saving') ? 'border-orange-500 checked:bg-orange-500' : '',
    )

    return (        
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" id={name} name={name} className={classes} {...props} />
            <label htmlFor={name} className="block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer" />
            {
                (state === 'error' && error !== '')
                    ? <span className="text-sm text-red-500">{error}</span>
                    : null
            }
        </div>
    )
}

Switch.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string,
    state: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Switch.defaultProps = {
    name: 'check',
}

export default Switch;