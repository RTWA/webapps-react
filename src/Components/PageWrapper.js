import React, { useContext } from 'react';
import { WebAppsUXContext } from '../Context';
import Scrollbar from './Scrollbar';

const PageWrapper = props => {
    const {
        title,
        children,
        ...rest
    } = props;

    const { useDrawer } = useContext(WebAppsUXContext);
    const { drawer, toggleDrawer } = useDrawer;

    return (
        <Scrollbar className="flex flex-col flex-auto relative" {...rest}>
            <div className="flex-auto px-6 pt-9 pb-12 md:p-8 md:pb-12 lg:p-12">
                {
                    (drawer.active || title)
                        ? (
                            <div className="flex items-center mb-8">
                                {
                                    drawer.active
                                        ? (
                                            <button
                                                className="lg:hidden w-10 cursor-pointer text-gray-600 dark:text-white text-xl leading-none bg-transparent outline-none"
                                                type="button"
                                                onClick={toggleDrawer}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </button>
                                        ) : null
                                }
                                {
                                    (title)
                                        ? (
                                            <div className="dark:text-white text-2xl font-bold tracking-tight leading-none">
                                                {title}
                                            </div>
                                        ) : null
                                }
                            </div>
                        ) : null
                }
                <div className="w-full">
                    {children}
                </div>
            </div>
        </Scrollbar>
    )
}

export default PageWrapper;