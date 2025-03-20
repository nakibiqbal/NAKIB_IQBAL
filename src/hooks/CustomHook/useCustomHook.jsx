/* eslint-disable react-hooks/exhaustive-deps */
import { useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useState } from "react";

const useCustomHook = () => {
  const [boxCount, setBoxCount] = useState(0);
  const [opacityS, setOpacityS] = useState("opacityS");

  useEffect(() => {
    setOpacityS(
      gsap.utils.toArray(`#${opacityS}`).forEach((opacity) => {
        gsap.to(opacity, {
          opacity: 0,
          scrollTrigger: {
            trigger: opacity,
            start: "top 0",
            end: "bottom 0",
            scrub: true,
          },
        });
      })
    );
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
    opacityS,
    handleMove,
    imagePos,
  };
};

export default useCustomHook;
