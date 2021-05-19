import React, { useEffect, useState } from 'react';
import PropsTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

const DropDownButton = props => {
    const {
        show,
        text,
        buttonClassNames,
        dropClassNames,
        ...attributes
    } = props;

    const [open, setOpen] = useState(show);
    useEffect((show) => {
        setOpen(show)
    }, [show]);

    const toggle = () => {
        setOpen(!open);
    }

    const close = () => {
        setOpen(false);
    }

    const dropClass = classNames(
        'origin-top-right',
        'absolute',
        'right-0',
        'mt-2',
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
            return React.cloneElement(child, { onClick: close });
        }
        return child;
    });

    const id = `options-menu-${Math.floor(Math.random() * 1000)}`;

    return (
        <div className="ml-auto relative" {...attributes}>
            <Button className={buttonClassNames}
                id={id} aria-haspopup="true" aria-expanded="false" onClick={toggle}>
                {text}
            </Button>
            <div className={dropClass}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby={id}>
                    {childrenWithClose}
                </div>
            </div>
        </div>
    )
}

DropDownButton.propTypes = {
    text: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.object])
}

export default DropDownButton;
