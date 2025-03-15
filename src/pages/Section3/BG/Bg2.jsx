import { motion } from "framer-motion";
import "./Bg.css";

const Bg2 = () => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          ease: "linear",
        }}
        className="bg2"
      ></motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 20,
          ease: "linear",
        }}
        className="bg2 three"
      ></motion.div>
    </>
  );
};

export default Bg2;
