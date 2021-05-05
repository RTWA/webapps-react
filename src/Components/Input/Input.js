import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = props => {
    const {
        error,
        state,
        className,
    } = props;

    const classes = classNames(
        className,
        'input-field',
        (state === 'error') ? 'border-red-500 text-red-500' : '',
        (state === 'saved') ? 'border-green-500 text-green-500' : '',
        (state === 'saving') ? 'border-orange-500' : '',
    )

    return (
        <>
            <input {...props} className={classes} />
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
    state: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
}

Input.defaultProps = {
    error: '',
    state: '',
    className: '',
}

export default Input;