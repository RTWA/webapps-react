import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class AppError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            info: '',
            error: '',
        };
        // this.props.history.listen((location, action) => {
        //     if (this.state.hasError) {
        //         this.setState({
        //             hasError: false,
        //         });
        //     }
        // });
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, info, error });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-gray-700 bg-gray-200 dark:bg-gray-900 dark:text-white h-screen w-screen relative">
                    <div className="h-full w-full flex flex-wrap justify-center content-center items-center absolute z-0">
                        <svg className="w-full px-6 lg:px-64 fill-current text-gray-300 dark:text-gray-800" viewBox="0 0 445 202" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.804 144.71c1.527 8.356 4.447 14.803 8.76 19.34 4.312 4.537 10.601 6.805 18.867 6.805 9.523 0 16.778-3.346 21.764-10.04 4.987-6.693 7.48-15.116 7.48-25.268 0-9.973-2.336-18.396-7.008-25.269-4.672-6.873-11.95-10.31-21.832-10.31-4.672 0-8.715.585-12.129 1.753-6.02 2.156-10.557 6.154-13.611 11.994l-34.5-1.617L20.34 4.15h107.678v32.614H48.103l-7.008 42.72c5.93-3.863 10.556-6.423 13.88-7.681 5.57-2.067 12.354-3.1 20.35-3.1 16.172 0 30.277 5.436 42.317 16.307 12.039 10.87 18.058 26.683 18.058 47.437 0 18.059-5.795 34.186-17.385 48.381-11.59 14.196-28.93 21.293-52.02 21.293-18.597 0-33.87-4.986-45.82-14.959C8.527 177.19 1.879 163.04.53 144.711h38.274zm155.789-43.528c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM222.759.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C180.42 9.001 197.872.241 222.76.241zm125.332 100.94c0 22.46 1.842 39.643 5.525 51.547 3.684 11.905 11.23 17.857 22.64 17.857 11.411 0 18.89-5.952 22.44-17.857 3.548-11.904 5.323-29.086 5.323-51.547 0-23.54-1.775-40.97-5.324-52.29s-11.028-16.98-22.438-16.98c-11.41 0-18.957 5.66-22.64 16.98-3.684 11.32-5.526 28.75-5.526 52.29zM376.257.242c24.887 0 42.339 8.76 52.356 26.28 10.018 17.52 15.027 42.406 15.027 74.66s-5.01 57.095-15.027 74.525c-10.017 17.43-27.47 26.145-52.356 26.145-24.887 0-42.339-8.715-52.357-26.145-10.017-17.43-15.026-42.271-15.026-74.525 0-32.254 5.009-57.14 15.026-74.66C333.918 9.001 351.37.241 376.257.241z" fillRule="nonzero" />
                        </svg>
                    </div>
                    <div className="h-full w-full flex flex-wrap justify-center content-end md:content-center items-end md:items-center relative z-10">
                        <div className="p-6 text-center ">
                            <h2 className="uppercase text-xl lg:text-5xl font-black">Sorry, something went wrong.</h2>
                            <p className="mt-3 text-sm lg:text-base text-gray-900 dark:text-gray-300">{this.state.error.toString()}</p>
                            <Link to="/" className={`inline-block mr-3 mt-6 px-4 py-2 border border-${this.props.theme}-600 dark:border-${this.props.theme}-500 bg-${this.props.theme}-600 dark:bg-${this.props.theme}-500 text-white dark:text-white hover:bg-${this.props.theme}-400 dark:hover:bg-${this.props.theme}-700 hover:border-${this.props.theme}-400 dark:hover:border-${this.props.theme}-700`}>
                                Back To Homepage
                            </Link>
                            <button onClick={() => window.location.reload()} className={`ml-3 inline-block mt-6 px-4 py-2 border border-${this.props.theme}-600 dark:border-${this.props.theme}-500 text-${this.props.theme}-600 dark:text-${this.props.theme}-500 hover:bg-${this.props.theme}-600 dark:hover:bg-${this.props.theme}-600 hover:text-white dark:hover:text-white`}>
                                Reload Page
                            </button>
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

// export default withRouter(AppError);
export default AppError;