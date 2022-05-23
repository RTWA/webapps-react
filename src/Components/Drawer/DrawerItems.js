import React from 'react';

const DrawerItems = props => {
    return (
        <div className="flex flex-col divide-y border-t border-b dark:border-gray-800 dark:divide-gray-800">
            {props.children || null}
        </div>
    );
}

export default DrawerItems;