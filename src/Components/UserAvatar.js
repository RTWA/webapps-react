import React from 'react';
import PropTypes from 'prop-types';
import initials from 'initials';
import addPx from 'add-px';
import contrast from 'contrast';

// Based on: https://github.com/wbinnssmith/react-user-avatar

const defaultColors = [
    '#22c55e', // green-500
    '#06b6d4', // cyan-500
    '#a855f7', // purple-500
    '#f97316', // orange-500
    '#ef4444', // red-500
    '#14b8a6', // teal-500
    '#64748b', // slate-500
];

const sumChars = str => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}

const UserAvatar = props => {
    const {
        borderRadius,
        src,
        srcset,
        name,
        color,
        colors,
        size,
        style,
        className,
        ...rest
    } = props;

    /* istanbul ignore next */
    if (!name) {
        throw new Error('UserAvatar requires a name');
    }

    const abbr = initials(name);
    let _size = addPx(size);

    const imageStyle = {
        display: 'block',
        borderRadius
    };

    const innerStyle = {
        lineHeight: _size,
        textAlign: 'center',
        borderRadius,
    };

    if (_size) {
        imageStyle.width = innerStyle.width = innerStyle.maxWidth = _size;
        imageStyle.height = innerStyle.height = innerStyle.maxHeight = _size;
    }

    let inner, classes = [className, 'UserAvatar'];

    if (src || srcset) {
        inner = <img className="UserAvatar--img" style={imageStyle} src={src} srcSet={srcset} alt={name} />
    } else {
        let i = sumChars(name) % colors.length;
        let background = (color) ? color : colors[i];

        innerStyle.backgroundColor = background;
        inner = abbr;
    }

    if (innerStyle.backgroundColor) {
        classes.push(`UserAvatar--${contrast(innerStyle.backgroundColor)}`);
    }

    return (
        <div aria-label={name} className={classes.join(' ')} style={style}>
            <div className="UserAvatar--inner" style={innerStyle} {...rest}>
                {inner}
            </div>
        </div>
    )
}

UserAvatar.propTypes = {
    borderRadius: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    srcset: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    name: PropTypes.string,
    color: PropTypes.string,
    colors: PropTypes.array,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
};

UserAvatar.defaultProps = {
    borderRadius: '100%',
    colors: defaultColors,
}

export default UserAvatar;