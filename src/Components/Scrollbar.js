import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const Scrollbar = props => {
    const {
        tag: Tag,
        className,
        settings,
        ...attributes
    } = props

    const [instance, setInstance] = useState();
    const ref = createRef();

    useEffect(() => {
        init();
        return () => {
            uninit();
        }
    }, []);

    const init = () => {
        /* istanbul ignore else */
        if (!instance) {
            createPerfectScrollbar()
        }
    }

    const createPerfectScrollbar = () => {
        setInstance(new PerfectScrollbar(ref.current))
    }

    const uninit = () => {
        /* istanbul ignore next */
        if (instance) {
            instance.destroy()
            setInstance(null)
        }
    }

    return (
        <Tag
            className={classNames(className)}
            style={{ position: 'relative' }}
            {...attributes}
            ref={ref}
        />
    )
}

Scrollbar.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    settings: PropTypes.object,
    switcher: PropTypes.bool,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

Scrollbar.defaultProps = {
    tag: 'div'
};

export default Scrollbar;
