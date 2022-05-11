import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withWebApps } from '../../Context'

const NavTitle = ({ UI, ...props }) => {

    const {
        name,
        className,
        innerRef,
        ...attributes
    } = props

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
            {/* <div className="absolute left-0 top-0 flex justify-center w-full -mt-2"> */}
            <div className={`text-${UI.theme}-600 text-xs uppercase font-semibold tracking-wider`}>
                {name}
            </div>
            {/* </div> */}
        </div>
    )
}

NavTitle.propTypes = {
    name: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};


export default withWebApps(NavTitle)
