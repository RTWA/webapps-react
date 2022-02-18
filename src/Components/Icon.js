import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
    const {
        icon,
        ...attributes
    } = props;

    const addClasses = string => {
        if (typeof (string) === 'string') {
            return string.replace(/<svg/g, `<svg class="${attributes.className}"`)
        }
    }

    return <div dangerouslySetInnerHTML={{ __html: addClasses(icon) }} {...attributes} />
}

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Icon;