import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from '../Badge';
import Icon from '../Icon';
import Link from '../Link';

import { DropdownContext } from './NavDropdown';

const NavItem = props => {
    const {
        className,
        innerRef,
        name,
        icon,
        badge,
        addLinkClass,
        label,
        color,
        ...rest
    } = props

    const { isOpen } = useContext(DropdownContext);

    const isJSON = string => {
        try {
            JSON.parse(string);
        } catch {
            return false;
        }
        return true;
    }

    const linkClasses = classNames(
        'flex',
        'items-center',
        'py-2',
        'mb-1',
        'rounded-lg',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        color
            ? `text-${color}-600 hover:text-${color}-800 dark:text-${color}-400 dark:hover:text-${color}-100 hover:bg-${color}-100 dark:hover:bg-${color}-600`
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600',
    )

    const routerLinkProps = rest.to && {
        exact: true,
        activeClassName: classNames(
            color
                ? `text-${color}-800 bg-gray-100 dark:text-${color}-100 dark:bg-gray-600`
                : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600',
        )
    }

    return (
        <li className={className} ref={innerRef}>
            <Link
                className={linkClasses}
                {...routerLinkProps}
                {...rest}
                tabIndex={isOpen === false ? -1 : 0}
            >
                {icon && <Icon icon={icon} className="h-5 w-10" />}
                <span className="font-medium text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
            </Link>
        </li>
    )
}

export default NavItem;
