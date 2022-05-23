import classNames from 'classnames';
import React, { useContext } from 'react';
import { WebAppsUXContext } from '../../Context';
import Badge from '../Badge';
import Icon from '../Icon';
import Link from '../Link';

const DrawerItem = ({ badge, color, icon, children, ...props }) => {

    const { theme } = useContext(WebAppsUXContext);

    const linkClasses = classNames(
        'flex',
        'items-center',
        'justify-start',
        'px-8',
        'py-5',
        'cursor-pointer',
        color
            ? `hover:bg-${color}-50 dark:hover:bg-${color}-900`
            : 'hover:bg-gray-100 dark:hover:bg-gray-800',
    )

    const routerLinkProps = props.to && {
        exact: true,
        activeClassName: classNames(
            color
                ? `bg-${color}-50 hover:bg-${color}-100 dark:bg-${color}-900 font-semibold`
                : `bg-${theme}-50 hover:bg-${theme}-100 dark:bg-${theme}-900 font-semibold`
        )
    }

    return (
        <Link
            className={linkClasses}
            {...routerLinkProps}
            {...props}
        >
            {icon && <Icon icon={icon} className="h-5 w-5 mr-3" />}
            <div>{children}</div>
            {badge && <Badge color={color || theme} pill className="ml-auto" {...{ ...badge, text: null }}>{badge.text}</Badge>}
        </Link>
    )
}

export default DrawerItem;