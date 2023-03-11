import React, { useEffect } from "react";

export function useOutsideClick(ref, callback) {
  function handleClick(event) {
    console.log(event.target);
    if (ref.current != null && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
