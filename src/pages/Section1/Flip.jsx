/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Flip = ({ children }) => {
  const DURATION = 0.2;
  const STAGGER = 0.03;
  const variants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
    },
    hovered: {
      y: "-100%",
      background: "white",
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hovered"
        className="divForChild"
      >
        {children.split("").map((l, i) => {
          return (
            <motion.div
              variants={variants}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="bigSpan"
              key={i}
            >
              <span>{l}</span>
              <span>{l}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};
export default Flip;
