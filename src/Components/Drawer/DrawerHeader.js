import React, { useContext } from 'react';
import { WebAppsUXContext } from '../../Context';

const DrawerHeader = props => {
    const { useNavigation } = useContext(WebAppsUXContext);
    const { toggleNavigation } = useNavigation;

    return (
        <div className="flex items-center justify-between m-8 mr-6">
            <div className="text-3xl font-bold tracking-light leading-none">
                {props.children}
            </div>
            <div className="lg:hidden">
                <button
                    className="cursor-pointer text-gray-600 dark:text-gray-400 text-xl leading-none bg-transparent outline-none"
                    type="button"
                    onClick={toggleNavigation}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default DrawerHeader;