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
        pill,
        children,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'inline-flex',
        'items-center',
        'justify-center',
        'px-2',
        'py-1',
        'text-xs',
        'font-bold',
        'leading-none',
        `bg-${color}`,
        (pill ? 'rounded-full' : '')
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
    pill: PropTypes.bool
};

Badge.defaultProps = {
    tag: 'span'
}

export default Badge
