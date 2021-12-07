import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from './Link';
import { WebAppsContext } from '../Context/index';

const Button = props => {
    const {
        style,
        size,
        rounded,
        square,
        className,
        children,
        ...attributes
    } = props;

    const { UI } = useContext(WebAppsContext);

    const color = (props.color === 'brand') ? UI.theme : props.color;

    const classes = classNames(
        'font-bold',
        'outline-none',
        'focus:outline-none',
        'ease-linear',
        'transition-all',
        'duration-150',
        (style === 'full')
            ? `bg-${color}-600 hover:bg-${color}-400 dark:bg-${color}-400 dark:hover:bg-${color}-600 text-white dark:text-gray-900`
            : '',
        (style === 'outline')
            ? `text-${color}-600 dark:text-${color}-400 bg-transparent border border-${color}-600 dark:border-${color}-400 hover:bg-${color}-600 dark:hover:bg-${color}-400 hover:text-white dark:hover:text-white`
            : '',
        (style === 'ghost')
            ? `text-${color}-600 dark:text-${color}-400 bg-transparent hover:bg-${color}-600 dark:hover:bg-${color}-400 hover:text-white dark:hover:text-white`
            : '',
        (style === 'link')
            ? `text-${color}-600 dark:text-${color}-400 bg-transparent hover:text-${color}-400 dark:hover:text-${color}-600`
            : '',
        (size === "small")
            ? 'text-xs px-2 py-1'
            : (size === "large")
                ? 'text-lg px-8 py-3'
                : 'px-4 py-2',
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
    style: PropTypes.oneOf(['full', 'outline', 'ghost', 'link']),
    size: PropTypes.oneOf(['', 'small', 'large']),
    rounded: PropTypes.bool,
    square: PropTypes.bool,
}

Button.defaultProps = {
    color: 'brand',
    style: 'full',
    size: '',
}

export default Button;
