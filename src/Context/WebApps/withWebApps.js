import React from 'react';
import invariant from 'tiny-invariant';

import { WebAppsContext } from './WebApps';

const withWebApps = (Component) => {
    const displayName = `withWebApps(${Component.displayName || Component.name})`;

    const C = (props) => {
        return (
            <WebAppsContext.Consumer>
                {(context) => {
                    invariant(
                        context,
                        `You should not use <${displayName} /> outside a <WebApps>`
                    );
                    return <Component {...props} {...context} />;
                }}
            </WebAppsContext.Consumer>
        );
    };

    C.displayName = displayName;

    return C;
}

export default withWebApps;
