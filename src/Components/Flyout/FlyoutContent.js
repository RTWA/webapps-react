import React from 'react';
import Scrollbar from '../Scrollbar';

const FlyoutContent = props => {
    const {
        children
    } = props;

    return (
        <Scrollbar className="flex flex-col flex-auto relative">
            <div className="p-6 w-full">
                {children}
            </div>
        </Scrollbar>
    )
}

export default FlyoutContent;