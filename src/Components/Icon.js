import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Font Awesome, load all
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const Icon = props => {
    const isJSON = string => {
        try {
            JSON.parse(string);
        } catch {
            return false;
        }
        return true;
    }

    return (
        (isJSON(props.icon))
            ? <FontAwesomeIcon icon={JSON.parse(props.icon)} className="m-auto fa-fw" />
            : <img src={`data:image/svg+xml;utf8,${props.icon}`} className="m-auto w-12"  {...props} />
    )
}

Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Icon;