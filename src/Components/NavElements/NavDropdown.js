import React, {
    useState,
    useEffect,
    createRef,
} from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import Badge from '../Badge';
import Icon from '../Icon';
import { withWebApps } from '../../Context';

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
        'relative',
        'flex',
        'items-center',
        'justify-start',
        'px-4',
        'py-2.5',
        'text-sm',
        'font-medium',
        'leading-5',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        color
            ? (UI.navigation.color_mode === 'dark')
                ? `text-${color}-600 hover:text-${color}-800 hover:bg-white/10`
                : `text-${color}-600 hover:text-${color}-800 dark:text-${color}-400 dark:hover:text-${color}-100 hover:bg-${color}-100 dark:hover:bg-${color}-600`
            : (UI.navigation.color_mode === 'dark')
                ? 'text-white/60 hover:text-white/100 hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600',
        isOpen
            ? color
                ? (UI.navigation.color_mode === 'dark')
                    ? `text-${color}-800 bg-white/10 rounded-t-md`
                    : `text-${color}-800 bg-gray-100 dark:text-${color}-100 dark:bg-gray-600 rounded-t-md`
                : (UI.navigation.color_mode === 'dark')
                    ? 'text-white/100 bg-white/10 rounded-t-md'
                    : 'text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-600 rounded-t-md'
            : 'rounded-md'
    )

    const childWrapper = classNames(
        isOpen
            ? (UI.navigation.color_mode === 'dark')
                ? `block py-1 bg-white/10 rounded-b-md`
                : `block py-1 bg-gray-100 dark:bg-gray-600 rounded-b-md`
            : 'hidden'
    )

    const dropIcon = (isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>')

    return (
        <div className={classNames(className, 'mb-1')} ref={ref}>
            <a
                href="#"
                className={linkClasses}
                tabIndex="0"
                onClick={toggle}
                aria-label="menu dropdown"
            >
                {icon && <Icon icon={icon} className="h-6 w-6 mr-4" />}
                <span className="font-medium text-sm">{name}</span>
                {badge && <Badge {...{ ...badge, text: null }}>{badge.text}</Badge>}
                <Icon icon={dropIcon} className="ml-auto h-6 w-6" />
            </a>
            <div className={childWrapper}>
                <DropdownContext.Provider value={{ isOpen }}>
                    {children}
                </DropdownContext.Provider>
            </div>
        </div>
    )
}

export default withWebApps(NavDropdown);
