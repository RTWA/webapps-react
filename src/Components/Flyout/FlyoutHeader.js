import React, { useContext } from 'react';
import { WebAppsUXContext } from '../../Context';

const FlyoutHeader = props => {
    const {
        closeAction,
        children,
    } = props;

    const { theme } = useContext(WebAppsUXContext);

    return (
        <div className={`flex items-center justify-between p-6 pr-4 bg-gray-100 dark:bg-gray-800 border-b-2 border-${theme}-600`}>
            <div className="text-3xl font-bold tracking-light leading-none">
                {children}
            </div>
            {
                (closeAction)
                    ? (
                        <button className="rounded-md dark:text-gray-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={closeAction}>
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    ) : null
            }
        </div>
    )
}

export default FlyoutHeader;