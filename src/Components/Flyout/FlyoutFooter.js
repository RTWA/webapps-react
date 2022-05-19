import React, { useContext } from 'react';
import { WebAppsUXContext } from '../../Context';

const FlyoutFooter = props => {
    const {
        children,
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    return (
        <div className={`flex items-center py-2 px-4 bg-gray-100 dark:bg-gray-800 border-t-2 border-${theme}-600`}>
            {children}
        </div>
    )
}

export default FlyoutFooter;