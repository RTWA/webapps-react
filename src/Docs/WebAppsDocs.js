import React from 'react';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import invariant from 'tiny-invariant';

export const WebAppsDocsContext = React.createContext({});

const colors = [
    {
        class: 'indigo',
        name: 'Indigo',
    },
    {
        class: 'fuchsia',
        name: 'Fuchsia',
    },
    {
        class: 'light-blue',
        name: 'Blue',
    },
    {
        class: 'red',
        name: 'Red',
    },
    {
        class: 'orange',
        name: 'Orange',
    },
    {
        class: 'yellow',
        name: 'Yellow',
    },
    {
        class: 'lime',
        name: 'Green',
    },
    {
        class: 'gray',
        name: 'Gray',
    }
];

const useUI = createLocalStorageStateHook('UI', { theme: 'indigo', dark_mode: 'light', colors: colors });

export const WebAppsDocs = props => {
    const [UI, setUI] = useUI();

    return (
        <WebAppsDocsContext.Provider value={{ UI, setUI }}>
            {props.children || null}
        </WebAppsDocsContext.Provider>
    )
}

export const withWebAppsDocs = (Component) => {
    const displayName = `withWebAppsDocs(${Component.displayName || Component.name})`;

    const C = (props) => {
        return (
            <WebAppsDocsContext.Consumer>
                {(context) => {
                    invariant(
                        context,
                        `You should not use <${displayName} /> outside a <WebAppsDocs>`
                    );
                    return <Component {...props} {...context} />;
                }}
            </WebAppsDocsContext.Consumer>
        )
    }

    C.displayName = displayName;

    return C;
}