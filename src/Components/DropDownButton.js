import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

const DropDownButton = props => {
    const {
        show,
        text,
        origin,
        buttonClassNames,
        dropClassNames,
        ...rest
    } = props;

    const [open, setOpen] = useState(show);
    useEffect((show) => {
        setOpen(show)
    }, [show]);

    const toggle = () => {
        setOpen(!open);
    }

    const close = action => {
        action();
        setOpen(false);
    }

    const dropClass = classNames(
        `origin-top-${origin}`,
        'absolute',
        `${origin}-0`,
        'w-56',
        'bg-white',
        'dark:bg-gray-700',
        'shadow-lg',
        'ring-1',
        'ring-black',
        'ring-opacity-5',
        'z-20',
        dropClassNames,
        (open) ? '' : 'hidden'
    );

    const childrenWithClose = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClick: () => close(child.props.onClick) });
        }
        return child;
    });

    const id = `options-menu-${Math.floor(Math.random() * 1000)}`;

    return (
        <div className="relative">
            <Button className={buttonClassNames} {...rest}
                id={id} aria-haspopup="true" aria-expanded="false" onClick={toggle}>
                {text}
            </Button>
            <div className={dropClass}>
                <div className="py-1 flex flex-col" role="menu" aria-orientation="vertical" aria-labelledby={id}>
                    {childrenWithClose}
                </div>
            </div>
        </div>
    )
}

DropDownButton.propTypes = {
    text: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object]),
    origin: PropsTypes.oneOf(['right', 'left']),
}

DropDownButton.defaultProps = {
    origin: 'right',
}

export default DropDownButton;
