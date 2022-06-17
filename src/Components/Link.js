import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const Link = props => {
  const {
    className,
    activeClasses,
    innerRef,
    active,
    href,
    onClick,
    disabled,
    ...rest
  } = props;

  const to = rest.to ? rest.to : null;
  const click = e => {
    if ((!href && !to) || href === '#') {
      e.preventDefault()
    }
    !disabled && onClick && onClick(e)
  };

  const classes = classNames(
    active,
    disabled,
    className
  );

  return to ? (
    <NavLink
      {...rest}
      className={({ isActive }) => classNames(
        classes,
        isActive ? activeClasses : ''
      )}
      onClick={click}
      ref={innerRef}
    />
  ) : (
    <a
      href={href || '#'}
      className={classes}
      rel={rest.target === '_blank' ? 'noopener norefferer' : null}
      {...rest}
      onClick={click}
      ref={innerRef}
    />
  )
}

Link.propTypes = {
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  active: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  ...NavLink.propTypes,
};

export default Link;
