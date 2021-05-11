import React from 'react';
import { Route } from 'react-router-dom';
import { withAuth } from './index';

const AuthenticatedRoute = ({ authenticated, component: Component, ...rest}) => {
    if (!authenticated)
        localStorage.setItem('WA_Login', window.location.href);

    return (
        <Route {...rest} render={(props) => (
            authenticated
                ? <Component {...props} />
                : window.location.replace("/login")
        )} />
    );
};

export default withAuth(AuthenticatedRoute);
