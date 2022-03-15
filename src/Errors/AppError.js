import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class AppError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: '',
            error: '',
        };
        this.props.history.listen((location, action) => {
            if (this.state.hasError) {
                this.setState({
                    hasError: false,
                });
            }
        });
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, info, error });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-900 h-screen w-screen">
                    <div className="h-full w-full flex flex-wrap justify-center content-end md:content-center items-end md:items-center">
                        <div className="p-6 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48 mx-auto text-red-500 dark:text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h2 className="text-xl lg:text-3xl font-bold">Sorry, something went wrong on this page.</h2>
                            <p className="my-4 text-sm lg:text-base text-gray-900 dark:text-gray-300">{this.state.error.toString()}</p>
                            <p>You could try reloading the page, or continue to use WebApps.</p>
                            <div className="flex flex-auto mt-6 gap-6 justify-center">
                                <Link to="/" className={`px-4 py-2 border border-${this.props.theme}-600 dark:border-${this.props.theme}-500 bg-${this.props.theme}-600 dark:bg-${this.props.theme}-500 text-white dark:text-white hover:bg-${this.props.theme}-400 dark:hover:bg-${this.props.theme}-700 hover:border-${this.props.theme}-400 dark:hover:border-${this.props.theme}-700`}>
                                    Back To Dashboard
                                </Link>
                                <button onClick={() => window.location.reload()} className={`px-4 py-2 border border-${this.props.theme}-600 dark:border-${this.props.theme}-500 dark:hover:border-${this.props.theme}-600 text-${this.props.theme}-600 dark:text-${this.props.theme}-500 hover:bg-${this.props.theme}-600 dark:hover:bg-${this.props.theme}-600 hover:text-white dark:hover:text-white`}>
                                    Reload Page
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

AppError.propTypes = {
    theme: PropTypes.string
}

AppError.defaultProps = {
    theme: 'indigo'
}

export default withRouter(AppError);