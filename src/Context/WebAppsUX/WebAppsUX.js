import React, { createContext, useEffect, useState } from 'react';
import { throttle } from 'lodash';

import { getDeviceConfig } from '../../Helpers/getDeviceConfig';
import { isWithinBreakpoint } from '../../Helpers/isWithinBreakpoint';

export const WebAppsUXContext = createContext({});

export const WebAppsUX = props => {
    const [breakpoint, setBreakpoint] = useState(() => getDeviceConfig(window.innerWidth));

    useEffect(() => {
        window.addEventListener('resize', calcInnerWidth);

        return () => {
            window.removeEventListener('resize', calcInnerWidth);
        }
    }, []);

    const calcInnerWidth = throttle(function () {
        setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);

    return (
        <WebAppsUXContext.Provider
            value={{
                breakpoint,
                isWithinBreakpoint,
            }}
        >
            {props.children || null}
        </WebAppsUXContext.Provider>
    )
}