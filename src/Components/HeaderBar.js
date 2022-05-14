import React from 'react';

const Headerbar = props => {
    return (
        <div className="relative flex flex-0 items-center w-full h-16 min-h-[4rem] px-4 md:px-6 shadow dark:shadow-none dark:border-b bg-white dark:bg-transparent">
            {props.children || null}
        </div>
    );
}

export default Headerbar;