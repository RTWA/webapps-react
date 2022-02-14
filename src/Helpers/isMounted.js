import { useCallback, useEffect, useRef } from "react";

const isMounted = () => {
    const isMountedRef = useRef(true);
    const currentIsMounted = useCallback(() => isMountedRef.current, []);

    useEffect(() => {
        return () => void (isMountedRef.current = false);
    }, []);

    return currentIsMounted;
}

export default isMounted;