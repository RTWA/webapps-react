import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { WebAppsContext } from '../Context';

const Switch = props => {
    const {
        id,
        name,
        label,
        helpText,
        error,
        state,
        checked,
        disabled,
        onChange,
        className,
    } = props;

    const { UI } = useContext(WebAppsContext);

    const classes = classNames(
        'outline-none',
        'focus:ring-0',
        'focus:ring-offset-0',
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
        'border-2',
        'appearance-none',
        'transition-colours',
        'duration-500',
        (disabled) ? 'cursor-not-allowed' : 'cursor-pointer',
        (checked) ? `border-${UI.theme}-600 dark:border-${UI.theme}-500` : 'border-gray-300 dark:border-gray-700',
        (state === 'error') ? 'border-red-500' : '',
        (state === 'saved') ? 'border-green-500' : '',
        (state === 'saving') ? 'border-orange-500' : '',
    )

    const labelClasses = classNames(
        'block',
        'overflow-hidden',
        'h-6',
        'rounded-full',
        'transition-colours',
        'duration-500',
        (disabled) ? 'cursor-not-allowed' : 'cursor-pointer',
        (!checked && state === '') ? 'bg-gray-300 dark:bg-gray-700' : '',
        (checked && state === '') ? `bg-${UI.theme}-600 dark:bg-${UI.theme}-500` : '',
        (state === 'error') ? 'bg-red-500' : '',
        (state === 'saved') ? 'bg-green-500' : '',
        (state === 'saving') ? 'bg-orange-500' : '',
    )

    return (
        <div className={className}>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id={id} name={name} className={classes} checked={checked} disabled={disabled} onChange={onChange} />
                <label htmlFor={id} className={labelClasses} />
            </div>
            <label htmlFor={id} className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
            {
                (helpText !== '' || error !== '')
                    ? (
                        <p className={`text-sm transition-colors ${(state === 'error') ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                            {(state === 'error') ? error : helpText}
                        </p>
                    ) : null
            }
        </div>
    )
}

Switch.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.string,
    state: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Switch.defaultProps = {
    error: '',
    state: '',
    label: '',
    helpText: '',
    disabled: false,
    className: 'w-full',
}

export default Switch;