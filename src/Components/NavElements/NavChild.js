import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Badge from '../Badge';
import Link from '../Link';

import { DropdownContext } from './NavDropdown';

const NavChild = props => {
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

    const { isOpen } = useContext(DropdownContext)

    const linkClasses = classNames(
        'flex',
        'items-center',
        'p-2',
        'px-4',
        'mb-1',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'hover:font-medium',
        color
            ? `text-${color}-600 hover:text-${color}-900 dark:text-${color}-400 dark:hover:text-${color}-100`
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
    )

    const routerLinkProps = rest.to && {
        exact: true,
        activeClassName: classNames(
            color
                ? `font-medium text-${color}-900 dark:text-${color}-100`
                : 'font-medium text-gray-900 dark:text-white',
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
                {icon && <FontAwesomeIcon className="h-5 w-5 mr-4" icon={icon} />}
                <span className="text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
            </Link>
        </li>
    )
}

export default NavChild;
