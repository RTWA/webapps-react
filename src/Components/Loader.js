import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Loader = props => {
    const {
        className,
        style,
        ...attributes
    } = props;

    const classes = classNames(
        'loader',
        className,
    );

    const circleClasses = classNames(
        'animate-spin',
        className,
    );

    if (style === 'circle') {
        return (
            <svg className={circleClasses} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        );
    }

    return (
        <div className={classes} {...attributes}>
            <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                <g fill="none" fillRule="evenodd" transform="translate(1 1)" strokeWidth={2}>
                    <circle cx={22} cy={22} r={6} strokeOpacity={0}>
                        <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx={22} cy={22} r={6} strokeOpacity={0}>
                        <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite" />
                        <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                    <circle cx={22} cy={22} r={8}>
                        <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        </div>
    );
}

Loader.propsTypes = {
    style: PropTypes.oneOf(['', 'circle'])
}

Loader.defaultProps = {
    style: ''
}

export default Loader;