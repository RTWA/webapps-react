import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { WebAppsUXContext } from '../Context';
import Loader from './Loader';

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
        action,
        className,
        ...attributes
    } = props;

    const { theme } = useContext(WebAppsUXContext);

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
        (checked) ? `border-${theme}-600 dark:border-${theme}-500` : 'border-gray-300 dark:border-gray-700',
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
        (checked && state === '') ? `bg-${theme}-600 dark:bg-${theme}-500` : '',
        (state === 'error') ? 'bg-red-500' : '',
        (state === 'saved') ? 'bg-green-500' : '',
        (state === 'saving') ? 'bg-orange-500' : '',
    )

    const Append = () => {
        if (state === 'saving') {
            return <Loader type="circle" height="5" width="5" color="orange" />
        } else if (state === 'saved') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        } else if (state === 'error') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )
        } else if (action) {
            return action
        }
        return null;
    }

    return (
        <div className={className}>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" id={id} name={name} className={classes} checked={checked} disabled={disabled} onChange={onChange} {...attributes} />
                <label htmlFor={id} className={labelClasses} />
            </div>
            <div className="inline-flex flex-row gap-4">
                <label htmlFor={id} className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                <Append />
            </div>
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
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    action: PropTypes.object,
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