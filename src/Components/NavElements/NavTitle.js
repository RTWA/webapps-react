import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { WebAppsUXContext } from '../../Context'

const NavTitle = props => {
    const {
        name,
        className,
        innerRef,
        ...attributes
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    const classes = classNames(
        'relative',
        'flex',
        'items-center',
        'justify-start',
        'mt-6',
        'px-4',
        'py-2.5',
        'text-sm',
        'font-medium',
        'leading-5',
        'rounded-md',
        className
    )

    return (
        <div className={classes} {...attributes} ref={innerRef}>
            <h6 className={`text-${theme}-600 text-xs uppercase font-semibold tracking-wider`}>
                {name}
            </h6>
        </div>
    )
}

NavTitle.propTypes = {
    name: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};


export default NavTitle;
