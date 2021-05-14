import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const NavTitle = props => {

    const {
        name,
        className,
        innerRef,
        ...attributes
    } = props

    const classes = classNames(
        'relative',
        'my-6',
        'h-px',
        'bg-gray-600',
        'dark:bg-gray-400',
        className
    )

    return (
        <li className={classes} {...attributes} ref={innerRef}>
            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                <span className="bg-white dark:bg-gray-800 px-4 text-xs text-gray-600 dark:text-gray-400 uppercase">{name}</span>
            </div>
        </li>
    )
}

NavTitle.propTypes = {
    name: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};


export default NavTitle
