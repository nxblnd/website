export function debounce(fn: (...args: Array<unknown>) => unknown, wait: number) {
    let timeoutId: number | undefined;
    return (...args: Parameters<typeof fn>) => {
        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
            fn(...args);
        }, wait);
    };
}
