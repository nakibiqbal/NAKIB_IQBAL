/* eslint-disable react-hooks/exhaustive-deps */
import { useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useState } from "react";

const useCustomHook = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shadowPos, setShadowPos] = useState({ x: "50%", y: "50%" });
  const [boxCount, setBoxCount] = useState(0);
  const [opacityS, setOpacityS] = useState("opacityS");

  useEffect(() => {
    if (isHovered) {
      gsap.to(".inner-shadow", {
        left: shadowPos.x,
        top: shadowPos.y,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(".inner-shadow", {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });
    }
    opacityFunction();
    const updateBoxCount = () => {
      const boxesAcross = Math.ceil(window.innerWidth / 100);
      const boxesDown = Math.ceil(window.innerHeight / 100);
      setBoxCount(boxesAcross * boxesDown);
    };
    updateBoxCount();
    window.addEventListener("resize", updateBoxCount);
    return () => window.removeEventListener("resize", updateBoxCount);
  }, [isHovered, shadowPos]);

  const opacityFunction = () => {
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
  };
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setShadowPos({ x: `${x}%`, y: `${y}%` });
  };
  const hovered = () => {
    setIsHovered(true);
  };
  const notHovered = () => {
    setIsHovered(false);
  };

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
    handleMouseMove,
    hovered,
    notHovered,
    shadowPos,
    boxCount,
    opacityS,
    handleMove,
    imagePos,
  };
};

export default useCustomHook;
