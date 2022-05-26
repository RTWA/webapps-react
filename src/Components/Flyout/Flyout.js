import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';

import { WebAppsUXContext } from '../../Context';

const Flyout = props => {
    const {
        children,
        ...rest
    } = props;

    const { breakpoint, isBreakpoint, useFlyouts } = useContext(WebAppsUXContext);
    const { flyout, setFlyout } = useFlyouts;

    useEffect(() => {
        flyout.active = true;
        setFlyout({ ...flyout });

        return () => {
            flyout.active = false;
            setFlyout({ ...flyout });
        }
    }, []);

    useEffect(() => {
        if (isBreakpoint('lg')) {
            flyout.display_mode = 'side';
            flyout.opened = false;
        } else {
            flyout.display_mode = 'overlay';
            flyout.opened = false;
        }
        setFlyout({ ...flyout });
    }, [breakpoint]);

    const classes = classNames(
        'webapps-flyout',
        'h-full', 'flex', 'flex-col',
        (flyout.display_mode === 'side') ? '' : 'webapps-flyout-overlay',
        (flyout.display_mode === 'side')
            ? (flyout.opened)
                ? 'w-1/2' : 'w-0'
            : (flyout.opened)
                ? 'w-full' : 'w-0'
    )

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}

export default Flyout;