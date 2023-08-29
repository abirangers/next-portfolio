"use client";
import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    // console.log(media);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches]);

  return matches;
};

export default useMediaQuery;
