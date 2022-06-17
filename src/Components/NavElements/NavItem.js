import React, { useContext } from 'react';
import classNames from 'classnames';

import Badge from '../Badge';
import Icon from '../Icon';
import Link from '../Link';

import { DropdownContext } from './NavDropdown';
import { WebAppsUXContext } from '../../Context';

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
    const { useNavigation } = useContext(WebAppsUXContext);
    const { navigation, toggleNavigation } = useNavigation;

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
            ? `text-${color}-600 hover:bg-black/10 dark:hover:bg-white/10`
            : 'text-black/60 hover:text-black/100 dark:text-white/60 dark:hover:text-white/100 hover:bg-black/10 dark:hover:bg-white/10'
    )

    const activeClasses = classNames(
        color
            ? `text-${color}-600 bg-black/10 dark:bg-white/10`
            : 'text-black/100 dark:text-white/100 bg-black/10 dark:bg-white/10'
    )

    const click = () => {
        /* istanbul ignore next */
        if (navigation.display_mode === 'overlay' && navigation.opened) {
            toggleNavigation();
        }
    }

    return (
        <div className={className} ref={innerRef}>
            <Link
                className={linkClasses}
                activeClasses={activeClasses}
                onClick={click}
                {...rest}
                tabIndex={/* istanbul ignore next */ isOpen === false ? -1 : 0}
            >
                {icon && <Icon icon={icon} className="h-6 w-6 mr-4" />}
                <span>{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
            </Link>
        </div>
    )
}

export default NavItem;
