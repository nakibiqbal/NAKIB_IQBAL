/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./HeadingText.css";

const HeadingText = ({ heading1, heading2 }) => {
  return (
    <div className="headingText">
      <motion.h1
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          duration: 0.2,
        }}
        style={{ color: "#ffffff94" }}
      >
        {heading1}
      </motion.h1>
      <motion.h1
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          duration: 0.2,
        }}
        style={{ color: "white", zIndex: 9999, position: "relative" }}
      >
        {heading2}
      </motion.h1>
    </div>
  );
};

export default HeadingText;
