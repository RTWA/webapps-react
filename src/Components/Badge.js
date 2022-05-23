import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Badge = props => {
    let {
        tag,
        className,
        innerRef,
        color,
        darkColor,
        shade,
        darkShade,
        pill,
        children,
        ...attributes
    } = props;

    const classes = classNames(
        'inline-flex',
        'items-center',
        'justify-center',
        'px-2',
        'py-1',
        'text-xs',
        'font-bold',
        'leading-none',
        'text-white',
        'dark:text-gray-800',
        `bg-${color}-${shade}`,
        `dark:${darkColor || color}-${darkShade}`,
        (pill ? 'rounded-full' : ''),
        className,
    );

    const Tag = attributes.to || attributes.href ? NavLink : tag;
    const ref = { [`${typeof Tag === 'string' ? 'ref' : 'innerRef'}`]: innerRef };

    return <Tag className={classes} {...attributes} {...ref}>{children}</Tag>

}

Badge.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    color: PropTypes.string,
    darkColor: PropTypes.string,
    shade: PropTypes.string,
    darkShade: PropTypes.string,
    pill: PropTypes.bool
};

Badge.defaultProps = {
    tag: 'span',
    shade: '600',
    darkShade: '600',
}

export default Badge
