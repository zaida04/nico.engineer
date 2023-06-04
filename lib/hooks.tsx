import { useEffect, useState } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState<number>(768);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowSizeChange();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return width <= 768;
}
