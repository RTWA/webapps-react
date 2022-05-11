import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from '../Badge';
import Icon from '../Icon';
import Link from '../Link';

import { DropdownContext } from './NavDropdown';
import { withWebApps } from '../../Context';

const NavChild = ({ UI, ...props }) => {
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

    const { navigation } = UI;

    const { isOpen } = useContext(DropdownContext)

    const linkClasses = classNames(
        'relative',
        'flex',
        'items-center',
        'justify-start',
        'mb-1',
        'px-4',
        'py-2.5',
        'text-sm',
        'font-medium',
        'leading-5',
        'rounded-md',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        color
            ? (navigation.color_mode === 'dark')
                ? `text-${color}-600 hover:text-${color}-800 hover:bg-white/10`
                : `text-${color}-600 hover:text-${color}-800 dark:text-${color}-400 dark:hover:text-${color}-100 hover:bg-gray-200 dark:hover:bg-gray-900`
            : (navigation.color_mode === 'dark')
                ? 'text-white/60 hover:text-white/100 hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-900'
    )

    const routerLinkProps = rest.to && {
        exact: true,
        activeClassName: classNames(
            color
                ? (navigation.color_mode === 'dark')
                    ? `text-${color}-800 bg-white/10`
                    : `text-${color}-800 dark:text-${color}-100 bg-gray-200 dark:bg-gray-900`
                : (navigation.color_mode === 'dark')
                    ? 'text-white/100 bg-white/10'
                    : 'text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-900'
        )
    }

    return (
        <div className={className} ref={innerRef}>
            <Link
                className={linkClasses}
                {...routerLinkProps}
                {...rest}
                tabIndex={isOpen === false ? -1 : 0}
            >
                {icon && <Icon className="h-5 w-5 mr-4" icon={icon} />}
                <span className="text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
            </Link>
        </div>
    )
}

export default withWebApps(NavChild);
