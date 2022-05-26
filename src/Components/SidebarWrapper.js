import React, { useContext, useEffect } from 'react';
import { WebAppsUXContext } from '../Context';
import Scrollbar from './Scrollbar';

const SidebarWrapper = props => {
    const {
        children,
    } = props;

    const { useNavigation } = useContext(WebAppsUXContext);
    const { navigation } = useNavigation;

    useEffect(() => {
        if (navigation.menu && navigation.menu.error) {
            throw new Error(navigation.menu.message);
        }
    }, [navigation]);

    const isRtl = getComputedStyle(document.querySelector('html')).direction === 'rtl';

    return (
        <Scrollbar
            settings={{ suppressScrollX: !isRtl }}
            tag="div"
            className={`flex flex-col flex-grow h-full px-3 mt-6 mb-4`}
        >
            {children}
        </Scrollbar>
    )
}

export default SidebarWrapper;