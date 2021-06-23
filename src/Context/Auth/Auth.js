import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import Loader from '../../Components/Loader';

axios.defaults.withCredentials = true;

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

    signIn(username, password) {
        return new Promise(async (resolve, reject) => {
            try {
                // Get CSRF Cookie
                await axios.get('/sanctum/csrf_cookie');
                // Perform sign in
                await axios.post('/login', { username, password });
                // When correct, get the user object
                const { data } = await axios.get('/api/user');
                const { preferences } = data;
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
                await axios.post('/api/logout');
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
                    const { data } = await axios.get('/api/user');
                    this.setState({ user: data, authenticated: true });
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

    setPreference = (preference, value) => {
        let { preferences } = this.state;
        preferences[preference] = value;
        this.setState({ preferences });

        let formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append('preference', preference);
        formData.append('value', value);

        axios.post('/api/user/preference', formData)
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
