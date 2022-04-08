import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loader from './Loader';
import { WebAppsContext } from '../Context';

const Select = props => {
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
        selectClassName,
        children,
        ...attributes
    } = props;

    const { UI } = useContext(WebAppsContext);

    const labelClasses = classNames(
        'block',
        'mb-2',
        'text-sm',
        'font-medium',
        'text-gray-700',
        'dark:text-gray-300',
        labelClassName,
    )

    const selectClasses = classNames(
        'bg-gray-50',
        'border-2',
        'border-gray-300',
        'text-gray-900',
        'outline-none',
        'text-sm',
        'rounded-lg',
        'block',
        'w-full',
        'p-2.5',
        'dark:bg-gray-700',
        'dark:border-gray-600',
        'dark:placeholder-gray-400',
        'dark:text-white',
        'transition-colors',
        `focus:ring-${UI.theme}-600`,
        `dark:focus:ring-${UI.theme}-500`,
        `focus:border-${UI.theme}-600`,
        `dark:focus:border-${UI.theme}-500`,
        (state === 'error') ? 'border-red-500 text-red-500 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' : '',
        (state === 'saved') ? 'border-green-500 text-green-500 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500 dark:focus:ring-green-500' : '',
        (state === 'saving') ? 'border-orange-500 focus:border-orange-500 dark:focus:border-orange-500 focus:ring-orange-500 dark:focus:ring-orange-500' : '',
        (actionLocation === 'left') ? 'pl-10' : '',
        selectClassName,
    )

    const Append = () => {
        if (state === 'saving') {
            return (
                <div className={`flex absolute inset-y-0 ${(actionLocation === 'right') ? 'right-5' : 'left-0'} items-center p${actionLocation.charAt(0)}-3`}>
                    <Loader style="circle" height="5" width="5" color="orange" />
                </div>
            )
        } else if (state === 'saved') {
            return (
                <div className={`flex absolute inset-y-0 ${(actionLocation === 'right') ? 'right-5' : 'left-0'} items-center p${actionLocation.charAt(0)}-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            )
        } else if (state === 'error') {
            return (
                <div className={`flex absolute inset-y-0 ${(actionLocation === 'right') ? 'right-5' : 'left-0'} items-center p${actionLocation.charAt(0)}-3`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            )
        } else if (action !== undefined) {
            return (
                <div className={`flex absolute inset-y-0 ${(actionLocation === 'right') ? 'right-5' : 'left-0'} items-center p${actionLocation.charAt(0)}-3`}>
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
                <select id={id} name={name} className={selectClasses} {...attributes}>
                    {children}
                </select>
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

Select.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    action: PropTypes.object,
    actionLocation: PropTypes.oneOf(['right', 'left']),
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    error: PropTypes.string,
    state: PropTypes.oneOf(['', 'saving', 'error', 'saved']),
    wrapperClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    labelClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    selectClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Select.defaultProps = {
    error: '',
    state: '',
    label: '',
    actionLocation: 'right',
    helpText: '',
    wrapperClassName: 'mb-6',
    labelClassName: '',
    selectClassName: '',
}

export default Select;