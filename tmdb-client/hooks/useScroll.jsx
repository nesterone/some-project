import React, { useState, useEffect, useRef } from "react";

export function useScroll(height) {
  const [isShown, setIsShown] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isLastScrollUp, setIsLastScrollUp] = useState(false);

  const scrollYRef = useRef(0);
  scrollYRef.current = scrollY;

  useEffect(() => {
    const callback = () => {
      window.scrollY < scrollYRef.current
        ? setIsLastScrollUp(true)
        : setIsLastScrollUp(false);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  useEffect(() => {
    if (isShown && scrollY > height && !isLastScrollUp) {
      setIsShown(false);
    }
    if (!isShown && isLastScrollUp) {
      setIsShown(true);
    }
  }, [scrollY]);

  return isShown;
}
