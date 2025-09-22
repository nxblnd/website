export function throttle(fn: (...args: Array<unknown>) => unknown, wait: number) {
    let canTrigger = true;
    return (...args: Array<unknown>) => {
        if (canTrigger) {
            fn(...args);
            canTrigger = false;
            window.setTimeout(() => (canTrigger = true), wait);
        }
    };
}
