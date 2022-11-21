import {useState,useCallback,useEffect } from "react";
// Needs this library to copy . Remember to install it before using this hook
import copy from "copy-to-clipboard";

const useCopy = (resetInterval = null) => {
    // useState for mantaining a state that tell us the text is copied to clipboard. 
  const [isCopied, setCopied] = useState(false);

// changed to modern JS with arrow function
  const handleCopy = useCallback((text) => {
      // We need to wrap handleCopy in the useCallback hook in order to ensure that it will not be recreated every time there is a rerender.
    if (typeof text === "string" || typeof text == "number") {
      copy(text.toString());
      setCopied(true);
    } else {
      setCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  }, []);

  useEffect(() => {
      //We add useEffect to say that if the text is copied and we have a reset interval,
      // we will set isCopied back to false after that interval using a setTimeout.
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}

export default useCopy;