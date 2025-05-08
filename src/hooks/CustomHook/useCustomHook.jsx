import { useEffect, useState } from "react";

const useCustomHook = () => {
  const [boxCount, setBoxCount] = useState(0);

  useEffect(() => {
    const updateBoxCount = () => {
      const boxesAcross = Math.ceil(window.innerWidth / 100);
      const boxesDown = Math.ceil(window.innerHeight / 100);
      setBoxCount(boxesAcross * boxesDown);
    };
    updateBoxCount();
    window.addEventListener("resize", updateBoxCount);
    return () => window.removeEventListener("resize", updateBoxCount);
  }, []);

  return {
    boxCount,
  };
};

export default useCustomHook;
