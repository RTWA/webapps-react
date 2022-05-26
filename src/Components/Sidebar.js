import React, { useContext, useEffect } from 'react';
import { NavChild, NavDropdown, NavItem, NavTitle } from './NavElements/index';
import CreateElement from '../Helpers/CreateElement';
import SidebarWrapper from './SidebarWrapper';
import { WebAppsUXContext } from '../Context';
import NavigationError from '../Errors/NavigationError';
import classNames from 'classnames';
import SidebarHeader from './SidebarHeader';

const Sidebar = props => {
    const { dropDownMode, ...rest } = props;
    const { breakpoint, isBreakpoint, useNavigation } = useContext(WebAppsUXContext);
    const { loadNavigation, navigation, setNavigation, toggleNavigation } = useNavigation;

    useEffect(() => {
        /* istanbul ignore else */
        if (!navigation.dropDownMode) {
            navigation.dropDownMode = dropDownMode;
        }
        /* istanbul ignore else */
        if (!navigation.openDropdown) {
            navigation.openDropdown = '';
        }
        setNavigation({ ...navigation });
    }, []);

    useEffect(() => {
        if (isBreakpoint('md')) {
            navigation.display_mode = 'side';
            navigation.opened = true;
        } else {
            navigation.display_mode = 'overlay';
            navigation.opened = false;
        }
        setNavigation({ ...navigation });
    }, [breakpoint]);

    const navClasses = classNames(
        'webapps-sidebar',
        'border-r',
        'dark:border-gray-800',
        (navigation?.color_mode === 'dark') ? 'dark bg-gray-900' : 'bg-white dark:bg-gray-900',
        (navigation?.display_mode === 'side') ? '' : 'webapps-sidebar-overlay',
        (navigation?.display_mode === 'side')
            ? (navigation?.opened)
                ? 'ml-0' : '-ml-72'
            : (navigation?.opened)
                ? 'translate-x-0' : '-translate-x-full'
    )

    return (
        <>
            <nav className={navClasses} {...rest}>
                <div className="absolute left-0 top-0 bottom-0 flex flex-auto flex-col w-full h-full overflow-hidden z-[1000]">
                    <SidebarHeader />
                    <NavigationError retry={loadNavigation}>
                        <SidebarWrapper {...rest}>
                            {
                                (navigation.menu && !navigation.menu.error) ? (
                                    <CreateElement
                                        items={navigation.menu}
                                        components={{
                                            NavChild,
                                            NavDropdown,
                                            NavItem,
                                            NavTitle
                                        }}>
                                    </CreateElement>
                                ) : null
                            }
                        </SidebarWrapper>
                    </NavigationError>
                </div>
            </nav>
            {
                (navigation.display_mode === 'overlay' && navigation.opened)
                    ? <div className="absolute top-0 bottom-0 left-0 right-0 z-[199] opacity-60 bg-gray-600" onClick={toggleNavigation}></div>
                    : null
            }
        </>
    )
}

export default Sidebar;
