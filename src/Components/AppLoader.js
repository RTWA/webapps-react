import React from 'react';
import classNames from 'classnames';

const AppLoader = props => {
    const {
        theme,
        className,
    } = props;

    const grayClasses = classNames(
        `text-gray-300`,
        `dark:text-gray-500`,
    );

    const themeClasses = classNames(
        'absolute',
        'bottom-0',
        `text-${theme}-600`,
    );

    const boundClasses = classNames(
        'absolute',
        'bottom-0',
        'overflow-hidden',
        'transition-[height]',
        'duration-[1s]',
        'w-24',
        (theme) ? 'h-24' : 'h-0',
    )

    // const svgClasses = classNames(
    //     `h-${height}`,
    //     `w-${width}`,
    //     `-translate-y-${height / 2}`,
    //     'mx-auto',
    // );

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="relative h-24 w-24">
                <div className="absolute inset-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className={grayClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                </div>
                <div className={boundClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={themeClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                </div>
            </div>
            <div className="sr-only">Loading</div>
        </div>
    );
}

export default AppLoader;