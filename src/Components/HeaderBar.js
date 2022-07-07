import React from 'react';

const Headerbar = ({ children, ...rest }) => {
    return (
        <div className="relative flex flex-0 items-center w-full h-14 min-h-[3.5rem] px-4 md:px-6 shadow dark:shadow-none dark:border-b dark:border-gray-800 bg-white dark:bg-transparent z-[190]" {...rest}>
            {children}
        </div>
    );
}

export default Headerbar;