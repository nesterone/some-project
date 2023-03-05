import { useEffect, useRef, useState } from "react";

export function useInfinityScroll(getContent) {
  const [page, setPage] = useState(1);
  const ref = useRef(null);
  const pageRef = useRef(page);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0 || pageRef.current === 1) return;
      setPage(pageRef.current + 1);
    });
    intersectionObserver.observe(ref.current);
    return () => intersectionObserver.unobserve(ref.current);
  }, []);

  useEffect(() => {
    pageRef.current = page;
    if (page === 1) return;
    getContent(page);
  }, [page]);

  return { page, setPage, ref };
}
