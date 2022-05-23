import React from 'react';

const AppPage = props => {
    return (
        <div className="flex md:flex-row flex-col h-full" id={props.id}>
            {props.children}
        </div>
    );
}

export default AppPage;