import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ComponentErrorTrigger = ({error}) => {
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
        this.props.history.listen((location, action) => {
            if (this.state.hasError) {
                this.setState({
                    hasError: false,
                });
            }
        });
        this.reset.bind(this);
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, info, error });
    }

    reset() {
        this.setState({ hasError: false, info: '', error: ''});
        this.props.retry();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-full w-full flex flex-wrap justify-center content-center items-center">
                    <div className="p-6 text-center">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 dark:text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <h2 className="text-xl font-bold">This failed to load!</h2>
                        </div>
                        <p className="my-3 text-sm text-gray-900 dark:text-gray-300">{this.state.error.toString().replace('Error: ', '')}</p>
                        {
                            (this.props.retry)
                                ? (
                                    <button onClick={() => this.reset()} className={`px-2 py-1 text-xs border border-${this.props.theme}-600 dark:border-${this.props.theme}-500 dark:hover:border-${this.props.theme}-600 text-${this.props.theme}-600 dark:text-${this.props.theme}-500 hover:bg-${this.props.theme}-600 dark:hover:bg-${this.props.theme}-600 hover:text-white dark:hover:text-white`}>
                                        Reload Section
                                    </button>
                                ) : null
                        }
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}

ComponentError.propTypes = {
    theme: PropTypes.string
}

ComponentError.defaultProps = {
    theme: 'indigo'
}

export default withRouter(ComponentError);