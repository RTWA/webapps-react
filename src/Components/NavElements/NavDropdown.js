import React, {
    useState,
    // useContext,
    useEffect,
    createRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

import Badge from '../Badge';
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
        if(!dropdownMode && UI.navigation !== undefined) {
            UI.navigation.openDropdown = isOpen ? ref.current.parentNode.closest('.nav-dropdown') : ref.current;
            setUI({...UI});
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

    const dropIcon = (isOpen ? ['fas', 'angle-down'] : ['fas', 'angle-right'])

    return (
        <li className={classNames(className, 'mb-2')} ref={ref}>
            <a
                href="#"
                className={linkClasses}
                tabIndex="0"
                onClick={toggle}
                aria-label="menu dropdown"
            >
                {icon && <FontAwesomeIcon className="h-5 w-5 mr-4" icon={(isJSON(icon) ? JSON.parse(icon) : icon)} />}
                <span className="font-medium text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
                <FontAwesomeIcon className="h-5 w-5 ml-auto" icon={dropIcon} />
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
