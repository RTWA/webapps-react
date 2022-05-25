import React, {
    useState,
    useEffect,
    createRef,
    useContext,
} from 'react';
import classNames from 'classnames';

import Badge from '../Badge';
import Icon from '../Icon';
import { WebAppsUXContext } from '../../Context';

export const DropdownContext = React.createContext({});

const NavDropdown = props => {
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
    } = props;

    const {
        useNavigation,
    } = useContext(WebAppsUXContext);

    const { navigation, setNavigation } = useNavigation;

    const ref = createRef();
    innerRef && innerRef(ref);

    if (navigation === undefined) {
        return null;
    }

    const { dropdownMode, openDropdown } = navigation;

    const [isOpen, setIsOpen] = useState(show)
    useEffect(() => {
        setIsOpen(show);
    }, [show]);

    const toggle = (e) => {
        e.preventDefault();
        if (!dropdownMode && navigation !== undefined) {
            navigation.openDropdown = isOpen ? ref.current.parentNode.closest('.nav-dropdown') : ref.current;
            setNavigation({ ...navigation });
        }
        setIsOpen(!isOpen);
    }

    let path = '';
    try {
        path = window.location.pathname;
    } catch (e) {
        console.warn(e);
    }

    useEffect(() => {
        if (dropdownMode === 'close') {
            setIsOpen(false);
        } else if (dropdownMode === 'closeInactive' && route) {
            setIsOpen(path.includes(route));
        } else if ((!dropdownMode || dropdownMode !== 'noAction') && route) {
            setIsOpen(path.includes(route));
        }
    }, [path]);

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
            ? `text-${color}-600 hover:bg-black/10 dark:hover:bg-white/10`
            : 'text-black/60 hover:text-black/100 dark:text-white/60 dark:hover:text-white/100 hover:bg-black/10 dark:hover:bg-white/10',
        isOpen
            ? color
                ? `rounded-t-md text-${color}-600 bg-black/10 dark:bg-white/10`
                : 'rounded-t-md text-black/100 dark:text-white/100 bg-black/10 dark:bg-white/10'
            : 'rounded-md'
    );

    const childWrapper = classNames(
        isOpen
            ? `block p-1 bg-black/10 dark:bg-white/10 rounded-b-md`
            : 'hidden'
    );

    const dropIcon = (
        isOpen
            ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>'
    );

    return (
        <div className={classNames(className, 'mb-1')} ref={ref}>
            <a
                href="#"
                className={linkClasses}
                tabIndex="0"
                onClick={toggle}
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

export default NavDropdown;
