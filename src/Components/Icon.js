import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, className, ...props }) => {
    const addClasses = string => {
        if (typeof (string) === 'string') {
            return string.replace(/<svg/g, `<svg class="${className}"`)
        }
    }

    return <div dangerouslySetInnerHTML={{ __html: addClasses(icon) }} className={className} {...props} />
}

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Icon;