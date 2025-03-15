/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Magnet = ({ children }) => {
  const buttonRef = useRef(null);
  const [btnPosition, setBtnPosition] = useState({
    x: 0,
    y: 0,
  });
  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, top, left } =
      buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setBtnPosition({ x, y });
  };
  const mouseLeave = () => {
    setBtnPosition({ x: 0, y: 0 });
  };
  const { x, y } = btnPosition;
  return (
    <motion.button
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={buttonRef}
      animate={{ x, y }}
      whileHover={{ rotate: 45 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
};
