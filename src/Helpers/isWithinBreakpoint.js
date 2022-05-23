export const isWithinBreakpoint = (current, breakpoint) => {
    if (breakpoint === 'xs') {
        return ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(current);
    } else if (breakpoint === 'sm') {
        return ['sm', 'md', 'lg', 'xl', '2xl'].includes(current);
    } else if (breakpoint === 'md') {
        return ['md', 'lg', 'xl', '2xl'].includes(current);
    } else if (breakpoint === 'lg') {
        return ['lg', 'xl', '2xl'].includes(current);
    } else if (breakpoint === 'xl') {
        return ['xl', '2xl'].includes(current);
    } else if (breakpoint === '2xl') {
        return ['2xl'].includes(current);
    }
}