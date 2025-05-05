import { useSpring } from "framer-motion";
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


  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };
  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const handleMove = (e) => {
    const { clientX, clientY } = e;
    imagePos.x.set(clientX);
    imagePos.y.set(clientY);
  };
  return {
    boxCount,
    // opacityS,
    handleMove,
    imagePos,
  };
};

export default useCustomHook;
