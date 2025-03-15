/* eslint-disable react/prop-types */
import gsap from "gsap";
import { createContext, useEffect, useRef } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circles = useRef([]);
  const size = 20;
  const blurr = 3;
  const colors = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"];

  const lerp = (start, end, factor) => (1 - factor) * start + factor * end;

  const manageMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animate = () => {
    delayedMouse.current.x = lerp(delayedMouse.current.x, mouse.current.x, 0.2);
    delayedMouse.current.y = lerp(delayedMouse.current.y, mouse.current.y, 0.2);

    moveCircles(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    circles.current.forEach((circle, i) => {
      gsap.to(circle, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out",
        duration: 0.2 + i * 0.08,
      });
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ size, blurr, colors, circles }}>
      {children}
    </CursorContext.Provider>
  );
};
export default CursorProvider;
