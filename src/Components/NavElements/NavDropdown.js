import React, {
    useState,
    // useContext,
    useEffect,
    createRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import Badge from '../Badge';
import Icon from '../Icon';
import { withWebApps } from '../../Context/index';

// import { Context } from './Sidebar';
export const DropdownContext = React.createContext({});

const NavDropdown = ({ UI, setUI, ...props }) => {
    const {
        children,
        className,
        innerRef,
        color,
        icon,
        name,
        badge,
        show,
        route,
        ...attributes
    } = props;

    const ref = createRef()
    innerRef && innerRef(ref)

    if (UI.navigation === undefined) {
        return null;
    }

    const { dropdownMode, openDropdown } = UI.navigation;

    const [isOpen, setIsOpen] = useState(show)
    useEffect(() => {
        setIsOpen(show)
    }, [show]);

    useEffect(() => {
        !dropdownMode && (!openDropdown || !ref.current.contains(openDropdown)) && setIsOpen(false)
    }, [openDropdown]);

    const isJSON = string => {
        try {
            JSON.parse(string);
        } catch {
            return false;
        }
        return true;
    }

    const toggle = (e) => {
        e.preventDefault();
        if (!dropdownMode && UI.navigation !== undefined) {
            UI.navigation.openDropdown = isOpen ? ref.current.parentNode.closest('.nav-dropdown') : ref.current;
            setUI({ ...UI });
        }
        setIsOpen(!isOpen)
    }

    let path = ''
    try {
        path = useLocation().pathname
    } catch (e) {
        console.warn(e)
    }

    useEffect(() => {
        if (dropdownMode === 'close')
            setIsOpen(false)
        else if (dropdownMode === 'closeInactive' && route)
            setIsOpen(path.includes(route))
        else if ((!dropdownMode || dropdownMode !== 'noAction') && !isOpen && route)
            setIsOpen(path.includes(route))
    }, [path])

    const linkClasses = classNames(
        'flex',
        'items-center',
        'p-2',
        'mb-1',
        'rounded-lg',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'hover:bg-gray-100',
        'dark:hover:bg-gray-600',
        color
            ? `text-${color}-600 hover:text-${color}-800 dark:text-${color}-400 dark:hover:text-${color}-100`
            : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white',
        isOpen
            ? color
                ? `text-${color}-800 bg-gray-100 dark:text-${color}-100 dark:bg-gray-600`
                : 'text-gray-800 bg-gray-100 dark:text-white dark:bg-gray-600'
            : null
    )

    const dropIcon = (isOpen
        ? (<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>)
        : (<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>))

    return (
        <li className={classNames(className, 'mb-2')} ref={ref}>
            <a
                href="#"
                className={linkClasses}
                tabIndex="0"
                onClick={toggle}
                aria-label="menu dropdown"
            >
                {icon && <Icon icon={icon} class="h-6 w-12" />}
                <span className="font-medium text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
                <Icon icon={dropIcon} />
            </a>
            <ul className={classNames(isOpen ? 'block' : 'hidden')}>
                <DropdownContext.Provider value={{ isOpen }}>
                    {children}
                </DropdownContext.Provider>
            </ul>
        </li>
    )
}

export default withWebApps(NavDropdown);
