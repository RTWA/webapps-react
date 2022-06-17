import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Components/Button';

export const ComponentErrorTrigger = ({ error }) => {
    const Trigger = () => {
        throw new Error(error);
    }

    return (error) ? <Trigger /> : null;
}

class ComponentError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: '',
            error: '',
        };
        this.reset.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.path !== this.props.path && this.state.hasError) {
            this.setState({
                hasError: false,
            });
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, info, error });
    }

    reset() {
        this.setState({ hasError: false, info: '', error: '' });
        this.props.retry();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-full w-full flex flex-wrap justify-center content-center items-center">
                    <div className="p-6 text-gray-900 dark:text-gray-300">
                        <div className="flex flex-row gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="pt-1 h-12 w-12 text-red-500 dark:text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold">{this.props.title || 'This failed to load!'}</h2>
                                <p className="text-sm">{this.state.error.toString().replace('Error: ', '')}</p>
                                {
                                    (this.props.retry)
                                        ? (
                                            <Button onClick={() => this.reset()} size="small" type="link" padding={false} className="text-left mt-1">
                                                Try Again
                                            </Button>
                                        ) : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

ComponentError.propTypes = {
    theme: PropTypes.string,
    key: PropTypes.string,
}

ComponentError.defaultProps = {
    theme: 'gray'
}

export default ComponentError;