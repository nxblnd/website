export function debounce(fn: (...args: Array<unknown>) => unknown, wait: number) {
    let timeoutId: number | undefined;
    return (...args: Array<unknown>) => {
        if (!timeoutId) {
            fn(...args);
        }

        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
            timeoutId = undefined;
        }, wait);
    };
}
