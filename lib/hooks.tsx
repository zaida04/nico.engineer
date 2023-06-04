import { useEffect, useState } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState<number>(1_000);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return width <= 768;
}