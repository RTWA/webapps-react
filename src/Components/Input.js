import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { WebAppsContext } from '../Context/index';

const Input = props => {
    const {
        error,
        state,
        className,
        ...attributes
    } = props;

    const { UI } = useContext(WebAppsContext);

    const classes = classNames(
        className,
        'input-field',
        `focus:border-${UI.theme}-600`,
        `dark:focus:border-${UI.theme}-500`,
        (state === 'error') ? 'border-red-500 text-red-500' : '',
        (state === 'saved') ? 'border-green-500 text-green-500' : '',
        (state === 'saving') ? 'border-orange-500' : '',
    )

    return (
        <>
            <input {...attributes} className={classes} />
            {
                (state === 'error' && error !== '')
                    ? <span className="text-sm text-red-500">{error}</span>
                    : null
            }
        </>
    );
}

Input.propTypes = {
    error: PropTypes.string,
    state: PropTypes.oneOf(['', 'saving', 'error', 'saved']),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Input.defaultProps = {
    error: '',
    state: '',
    className: '',
}

export default Input;