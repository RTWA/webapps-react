import React, { useContext, useEffect } from 'react';
import { NavChild, NavDropdown, NavItem, NavTitle } from './NavElements/index';
import CreateElement from '../Helpers/CreateElement';
import SidebarWrapper from './SidebarWrapper';
import { WebAppsUXContext } from '../Context';

const Sidebar = props => {
    const { useNavigation } = useContext(WebAppsUXContext);
    const { navigation } = useNavigation;

    useEffect(() => {
        if (navigation.menu !== null && navigation.menu !== undefined) {
            if (navigation.menu.error) {
                throw new Error(navigation.menu.message);
            }
        }
    }, [navigation]);

    return (
        <SidebarWrapper {...props}>
            {
                (navigation.menu !== null && navigation.menu !== undefined && !navigation.menu.error) ? (
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
    )
}

export default Sidebar;
