import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Link from './Link';
import { WebAppsUXContext } from '../Context/index';

const DropDownItem = props => {
    const {
        active,
        align,
        shade,
        darkShade,
        className,
        children,
        ...attributes
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    const color = (props.color === 'brand') ? theme : props.color;

    const classes = classNames(
        `text-${align}`,
        'py-2',
        'px-4',
        'outline-none',
        'focus:outline-none',
        'ease-linear',
        'transition-all',
        'duration-150',
        `text-${color}-${shade}`,
        `dark:text-${color}-${darkShade}`,
        'bg-transparent',
        'hover:font-semibold',
        `hover:bg-gray-100`,
        `dark:hover:bg-gray-600`,
        (active) ? 'font-semibold bg-gray-100 dark:bg-gray-600' : '',
        className
    );

    return (props.href !== undefined || props.to !== undefined)
            ? <Link className={classes} {...attributes}>{children}</Link>
            : <button type="button" className={classes} {...attributes}>{children}</button>
}

DropDownItem.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'right', 'center']),
    color: PropTypes.string,
    shade: PropTypes.string,
    darkShade: PropTypes.string,
}

DropDownItem.defaultProps = {
    active: false,
    align: 'center',
    color: 'brand',
    shade: '600',
    darkShade: '400',
}

export default DropDownItem;
