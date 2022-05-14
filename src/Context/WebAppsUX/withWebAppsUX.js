import React from 'react';
import invariant from 'tiny-invariant';

import { WebAppsUXContext } from './WebAppsUX';

const withWebAppsUX = (Component) => {
    const displayName = `withWebAppsUX(${Component.displayName || Component.name})`;

    const C = (props) => {
        return (
            <WebAppsUXContext.Consumer>
                {(context) => {
                    invariant(
                        context,
                        `You should not use <${displayName} /> outside a <WebAppsUX>`
                    );
                    return <Component {...props} {...context} />;
                }}
            </WebAppsUXContext.Consumer>
        );
    };

    C.displayName = displayName;

    return C;
}

export default withWebAppsUX;
