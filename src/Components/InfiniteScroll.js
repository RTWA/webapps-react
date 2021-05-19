import React, { useEffect, useState, useRef } from 'react';

const InfiniteScroll = props => {
    const [page, setPage] = useState(1);
    const marker = useRef(null);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (marker.current) {
            observer.observe(marker.current)
        }
    }, []);


    useEffect(() => {
        if (props.hasMore) {
            props.loadMore();
        }
    }, [page])

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }

    return (
        <>
            {props.children}
            <span ref={marker} />
        </>
    )
}

export default InfiniteScroll;