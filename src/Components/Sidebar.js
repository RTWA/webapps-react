import React, { useEffect } from 'react';
import { NavChild, NavDropdown, NavItem, NavTitle } from './NavElements/index';
import CreateElement from '../Helpers/CreateElement';
import SidebarWrapper from './SidebarWrapper';
import { withWebApps } from '../Context/index';

const Sidebar = ({ navigation }) => {

    useEffect(() => {
        if (navigation.menu !== null && navigation.menu !== undefined) {
            if (navigation.menu.error) {
                throw new Error(navigation.menu.message);
            }
        }
    }, [navigation])

    return (
        <SidebarWrapper>
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

export default withWebApps(Sidebar);
