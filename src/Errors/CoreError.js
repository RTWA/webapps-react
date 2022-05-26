import React, { Component } from 'react';

class CoreError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: '',
            error: '',
        };
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
                            <h2 className="text-xl lg:text-3xl font-bold">A serious error has occurred!</h2>
                            <p className="my-4 text-sm lg:text-base text-gray-900 dark:text-gray-300">{this.state.error.toString()}</p>
                            <p>You could try reloading the page, or contact your system administrator.</p>
                            <div className="flex flex-auto mt-6 gap-6 justify-center">
                                <button onClick={() => window.location.reload()} className="px-4 py-2 border border-indigo-600 dark:border-indigo-500 dark:hover:border-indigo-600 text-indigo-600 dark:text-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white">
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

export default CoreError;