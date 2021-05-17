import React, { Component } from 'react';

class NavigationError extends Component {
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
                <ul className="px-4 my-auto">
                    <li className="w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400">
                        Failed to load navigation.
                        </li>
                    <li className="w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-gray-600 dark:text-gray-400">
                        {this.state.error.toString()}
                    </li>
                    <li>
                        <button className="w-full text-center p-2 rounded-lg transition-colors duration-200 focus:outline-none text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-100 hover:bg-red-100 dark:hover:bg-red-600"
                            onClick={this.props.retry}>Click here to try again.</button>
                    </li>
                </ul>
            );
        }
        return this.props.children;
    }
}

export default NavigationError;