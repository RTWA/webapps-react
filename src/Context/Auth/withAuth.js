/* istanbul ignore file */
import React from 'react';
import invariant from 'tiny-invariant';

import AuthContext from './AuthContext';

const withAuth = (Component) => {
    const displayName = `withAuth(${Component.displayName || Component.name})`;

    const C = (props) => {
        return (
            <AuthContext.Consumer>
                {(context) => {
                    invariant(
                        context,
                        `You should not use <${displayName} /> outside a <Auth>`
                    );
                    return <Component {...props} {...context} />;
                }}
            </AuthContext.Consumer>
        );
    };

    C.displayName = displayName;

    return C;
}

export default withAuth;
