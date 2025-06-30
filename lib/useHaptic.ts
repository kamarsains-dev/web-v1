export const UseHaptic = (duration = 50) => {
    return() => {
        if(typeof window  !== "undefined" && "vibrate" in navigator) {
            navigator.vibrate(duration);
        }
    };
};