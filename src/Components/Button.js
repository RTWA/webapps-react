import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from './Link';
import { WebAppsUXContext } from '../Context/index';

const Button = props => {
    const {
        shade,
        darkShade,
        type,
        size,
        rounded,
        square,
        padding,
        className,
        children,
        ...attributes
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    const color = (props.color === 'brand') ? theme : props.color;

    const classes = classNames(
        'font-bold',
        'outline-none',
        'focus:outline-none',
        'ease-linear',
        'transition-all',
        'duration-150',
        (type === 'full')
            ? `bg-${color}-${shade} hover:bg-${color}-${darkShade} dark:bg-${color}-${darkShade} dark:hover:bg-${color}-${shade} text-white dark:text-gray-900`
            : '',
        (type === 'outline')
            ? `text-${color}-${shade} dark:text-${color}-${darkShade} bg-transparent border border-${color}-${shade} dark:border-${color}-${darkShade} hover:bg-${color}-600 dark:hover:bg-${color}-${darkShade} hover:text-white dark:hover:text-white`
            : '',
        (type === 'ghost')
            ? `text-${color}-${shade} dark:text-${color}-${darkShade} bg-transparent hover:bg-${color}-${shade} dark:hover:bg-${color}-${darkShade} hover:text-white dark:hover:text-white`
            : '',
        (type === 'link')
            ? `text-${color}-${shade} dark:text-${color}-${darkShade} bg-transparent hover:text-${color}-${darkShade} dark:hover:text-${color}-${shade}`
            : '',
        (size === "small")
            ? 'text-xs'
            : (size === "large")
                ? 'text-lg'
                : '',
        (padding)
            ? (size === "small")
                ? 'px-2 py-1'
                : (size === "large")
                    ? 'px-8 py-3'
                    : 'px-4 py-2'
            : '',
        (rounded)
            ? 'rounded-full'
            : (square)
                ? 'rounded-none'
                : 'rounded-md',
        className
    );

    return (props.href !== undefined || props.to !== undefined)
        ? <Link className={classes} {...attributes}>{children}</Link>
        : <button type="button" className={classes} {...attributes}>{children}</button>
}

Button.propTypes = {
    color: PropTypes.string,
    shade: PropTypes.string,
    darkShade: PropTypes.string,
    type: PropTypes.oneOf(['full', 'outline', 'ghost', 'link']),
    size: PropTypes.oneOf(['', 'small', 'large']),
    rounded: PropTypes.bool,
    square: PropTypes.bool,
    padding: PropTypes.bool,
}

Button.defaultProps = {
    color: 'brand',
    shade: '600',
    darkShade: '400',
    type: 'full',
    size: '',
    padding: true,
}

export default Button;
