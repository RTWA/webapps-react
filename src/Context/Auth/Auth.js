import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { client, controller } from '../../API';
import Loader from '../../Components/Loader';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            authenticated: null,
            preferences: {},
        };
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.setUser = this.setUser.bind(this);
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.setPreference = this.setPreference.bind(this);
    }

    componentWillUnmount() {
        controller.abort();
    }

    signIn(username, password) {
        return new Promise(async (resolve, reject) => {
            try {
                // Get CSRF Cookie
                await client('/sanctum/csrf_cookie', undefined, { accept: 'text/html' });
                // Perform sign in
                await client('/login', { username, password });
                // When correct, get the user object
                const { data } = await client('/api/user');
                const preferences = data.preferences ? data.preferences : {};
                delete data.preferences;

                this.setState({ user: data, authenticated: true, preferences: preferences });
                return resolve(data);
            } catch (error) {
                return reject(error);
            }
        });
    }

    signOut() {
        new Promise(async (resolve, reject) => {
            try {
                await client('/api/logout', {});
                this.setState({ user: null, authenticated: false });

                window.location.replace("//" + window.location.hostname + '/login?logout');
                resolve(true);
            } catch (error) {
                return reject(error);
            }
        });
    }

    setUser(user, authenticated) {
        this.setState({ user, authenticated });
    }

    checkAuthentication() {
        return new Promise(async (resolve, reject) => {
            if (this.state.authenticated === null) {
                // The status is null if it hasn't been checked
                try {
                    const { data } = await client('/api/user');
                    const preferences = data.preferences ? data.preferences : {};
                    delete data.preferences;

                    this.setState({ user: data, authenticated: true, preferences: preferences });
                    return resolve(true);
                } catch (error) {
                    if (error.response && error.response.status === 401) {
                        // If 401 returns, the user is not logged in
                        this.setState({ user: null, authenticated: false, preferences: {} });
                        return resolve(false);
                    } else {
                        // Any other code, something went wrong
                        return reject(error);
                    }
                }
            } else {
                // We've already check authenticated, just return state
                return resolve(this.state.authenticated);
            }
        });
    }

    checkPermission = async permission => {
        return new Promise(async (resolve, reject) => {
            // let formData = new FormData();
            // formData.append('permission', permission);

            await client('/api/permission/check', { 'permission': permission })
                .then(data => {
                    return resolve(data.has_permission);
                })
                .catch(error => {
                    return reject(error);
                })
        });
    }

    checkGroup = async group => {
        return new Promise(async (resolve, reject) => {
            // let formData = new FormData();
            // formData.append('group', group);

            await client('/api/group/check', { 'group': group })
                .then(data => {
                    return resolve(data.in_group);
                })
                .catch(error => {
                    return reject(error);
                })
        });
    }

    setPreference = async (preference, value) => {
        let { preferences } = this.state;
        preferences[preference] = value;
        this.setState({ preferences });

        // let formData = new FormData();
        // formData.append('_method', 'PUT');
        // formData.append('preference', preference);
        // formData.append('value', value);

        await client('/api/user/preference', { 'preference': preference, 'value': value }, { method: 'PUT' })
            .catch(error => {
                // TODO: Handle errors
                console.log(error);
            })
    }

    componentDidMount() {
        if (this.props.checkOnInit)
            this.checkAuthentication();
    }

    render() {
        if (this.state.authenticated !== null)
            return (
                <AuthContext.Provider
                    children={this.props.children || null}
                    value={{
                        user: this.state.user,
                        authenticated: this.state.authenticated,
                        signIn: this.signIn,
                        signOut: this.signOut,
                        setUser: this.setUser,
                        checkAuthentication: this.checkAuthentication,
                        checkPermission: this.checkPermission,
                        checkGroup: this.checkGroup,
                        preferences: this.state.preferences,
                        setPreference: this.setPreference
                    }}
                />
            )
        else
            return <Loader />
    }
}



Auth.propTypes = {
    config: PropTypes.object,
    checkOnInit: PropTypes.bool
};

Auth.defaultProps = {
    checkOnInit: true
}

export default Auth;
