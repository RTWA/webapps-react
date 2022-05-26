import React from 'react';

const AppPage = ({ id, children, ...rest }) => {
    return (
        <div className="flex md:flex-row flex-col h-full" id={id} {...rest}>
            {children}
        </div>
    );
}

export default AppPage;