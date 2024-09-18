import { useRef, useCallback } from "react";

const useThrottle = (func, delay = 200) => {
  const throttleSeed = useRef(null);

  const throttledFunction = useCallback((...args) => {
    if (!throttleSeed.current) {
      func(...args); // Call the function with provided arguments
      throttleSeed.current = setTimeout(() => {
        throttleSeed.current = null; // Reset after delay
      }, delay);
    }
  }, [func, delay]);

  return throttledFunction;
};

export default useThrottle;
