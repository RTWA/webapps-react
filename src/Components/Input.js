import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { WebAppsUXContext } from '../Context/index';
import Loader from './Loader';

const Input = props => {
    const {
        id,
        name,
        label,
        action,
        actionLocation,
        helpText,
        error,
        state,
        wrapperClassName,
        labelClassName,
        inputClassName,
        ...attributes
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    const labelClasses = classNames(
        'block',
        'mb-2',
        'text-sm',
        'font-medium',
        'text-gray-700',
        'dark:text-gray-300',
        labelClassName,
    )

    const inputClasses = classNames(
        'bg-transparent',
        'border-2',
        'border-gray-400',
        'text-gray-900',
        'outline-none',
        'text-sm',
        'rounded-lg',
        'block',
        'w-full',
        'p-2.5',
        'focus:bg-gray-50',
        'dark:focus:bg-gray-700',
        'dark:border-gray-600',
        'dark:placeholder-gray-400',
        'dark:text-white',
        'transition-colors',
        'focus:ring-0',
        `focus:border-${theme}-600`,
        `dark:focus:border-${theme}-500`,
        (state === 'error') ? 'border-red-500 text-red-500 focus:border-red-500 dark:focus:border-red-500' : '',
        (state === 'saved') ? 'border-green-500 text-green-500 focus:border-green-500 dark:focus:border-green-500' : '',
        (state === 'saving') ? 'border-orange-500 focus:border-orange-500 dark:focus:border-orange-500' : '',
        (actionLocation === 'left') ? 'pl-10' : '',
        inputClassName,
    )

    const Append = () => {
        if (state === 'saving') {
            return (
                <div className={`flex absolute inset-y-0 ${actionLocation}-0 items-center p${actionLocation.charAt(0)}-3`}>
                    <Loader style="circle" height="5" width="5" color="orange" />
                </div>
            )
        } else if (state === 'saved') {
            return (
                <div className={`flex absolute inset-y-0 ${actionLocation}-0 items-center p${actionLocation.charAt(0)}-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )
        } else if (state === 'error') {
            return (
                <div className={`flex absolute inset-y-0 ${actionLocation}-0 items-center p${actionLocation.charAt(0)}-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            )
        } else if (action && actionLocation === 'none') {
            return action;
        } else if (action !== undefined) {
            return (
                <div className={`flex absolute inset-y-0 ${actionLocation}-0 items-center p${actionLocation.charAt(0)}-3`}>
                    {action}
                </div>
            )
        }
        return null;
    }

    return (
        <div className={wrapperClassName}>
            {
                (label !== '') ? <label htmlFor={id} className={labelClasses}>{label}</label> : null
            }
            <div className="relative">
                <input id={id} name={name} className={inputClasses} {...attributes} />
                <Append />
            </div>
            {
                (helpText !== '' || error !== '')
                    ? (
                        <span className={`text-sm transition-colors ${(state === 'error') ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
                            {(state === 'error') ? error : helpText}
                        </span>
                    ) : null
            }
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    action: PropTypes.object,
    actionLocation: PropTypes.oneOf(['right', 'left', 'none']),
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.string,
    state: PropTypes.oneOf(['', 'saving', 'error', 'saved']),
    wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    inputClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Input.defaultProps = {
    error: '',
    state: '',
    label: '',
    actionLocation: 'right',
    helpText: '',
    wrapperClassName: 'mb-6',
    labelClassName: '',
    inputClassName: '',
}

export default Input;