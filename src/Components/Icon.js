import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => {
    const {
        icon,
        ...attributes
    } = props;

    const matchCase = (text, pattern) => {
        var result = '';
    
        for(var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);
    
            if(p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }
    
        return result;
    }

    const addClasses = string => {
        if (typeof (string) === 'string') {
            return string.replace(r, function(match) {
                return matchCase(/<svg/g, `<svg className="${attributes.className}"`);
            })
        }
    }

    return <div dangerouslySetInnerHTML={{ __html: addClasses(icon) }} {...attributes} />
}

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Icon;