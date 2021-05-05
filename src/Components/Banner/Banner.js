import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Banner = props => {
    const {
        tag,
        className,
        innerRef,
        color,
        darkColor,
        children,
        ...attributes
    } = props;

    const classes = classNames(
        className,
        'py-2',
        'px-8',
        'mb-4',
        `bg-${color}`,
        `dark:bg-${darkColor}`,
    );

    const Tag = attributes.to || attributes.hred ? NavLink : tag;
    const ref = { [`${typeof Tag === 'string' ? 'ref' : 'innerRef'}`]: innerRef };

    return <Tag className={classes} {...attributes} {...ref}>{children}</Tag>;
}

Banner.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    color: PropTypes.string,
    darkColor: PropTypes.string,
};

Banner.defaultProps = {
    tag: 'div',
    color: 'gray-300',
    darkColor: 'gray-700',
}

export default Banner;