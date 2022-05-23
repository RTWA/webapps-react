import React, { useState } from 'react';
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

export const WebAppsDocs = props => {
    const [UI, setUI] = useState({ theme: 'indigo', dark_mode: 'light', colors: colors });

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