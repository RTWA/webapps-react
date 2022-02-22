import React from 'react';
import classNames from 'classnames';
import { withWebAppsDocs } from './WebAppsDocs';

const WebAppsDocComponent = ({ UI, setUI, children, withColors, noDarkSwitch }) => {

    const setDark = mode => {
        UI.dark_mode = mode;
        setUI({ ...UI });
    }

    const setTheme = color => {
        UI.theme = color;
        setUI({ ...UI });
    }

    const darkClass = mode => classNames(
        'w-6',
        'h-6',
        'p-1',
        'border',
        'border-gray-600',
        'rounded-full',
        'outline-none',
        'mr-1',
        'cursor-pointer',
        (UI.dark_mode === mode)
            ? (mode === 'light')
                ? 'bg-gray-200'
                : 'bg-gray-900'
            : 'bg-white',
    )

    const themeClass = color => classNames(
        'w-6',
        'h-6',
        'p-1',
        'border',
        'border-gray-600',
        `hover:border-${color.class}-600`,
        `dark:hover:border-${color.class}-500`,
        'rounded-full',
        'outline-none',
        'mr-1',
        'cursor-pointer',
        (UI.theme === color.class)
            ? `bg-${color.class}-600 dark:bg-${color.class}-500`
            : 'bg-white',
    )

    const themePillClass = color => classNames(
        'flex',
        'h-full',
        'w-full',
        'rounded-full',
        (UI.theme === color.class)
            ? `bg-${color.class}-800 dark:bg-${color.class}-300`
            : `bg-${color.class}-600 dark:bg-${color.class}-500`,
    )

    return (
        <div className={`p-4 border border-gray-600 rounded-md mb-8 mx-2 ${UI.dark_mode}`}>
            <div className="relative w-full p-4 rounded-md bg-gray-200 dark:bg-gray-900">
                {
                    (!noDarkSwitch)
                        ? (
                            <div className="absolute -top-7 w-full flex flex-row justify-center">
                                <button type="button" className={darkClass('light')} onClick={() => setDark('light')}>
                                    <span className="flex h-full w-full rounded-full bg-gray-200"></span>
                                </button>
                                <button type="button" className={darkClass('dark')} onClick={() => setDark('dark')}>
                                    <span className="flex h-full w-full rounded-full bg-gray-900"></span>
                                </button>
                            </div>
                        ) : null
                }
                {children || null}
                {
                    (withColors !== false)
                        ? (
                            <div className="absolute -bottom-7 w-full flex flex-row justify-center">
                                {
                                    Object(UI.colors).map(function (color) {
                                        return (
                                            <button key={color.class} type="button"
                                                className={themeClass(color)}
                                                onClick={() => setTheme(color.class)}>
                                                <span className={themePillClass(color)}></span>
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        )
                        : null
                }
            </div>
        </div>
    )
}

export default withWebAppsDocs(WebAppsDocComponent);