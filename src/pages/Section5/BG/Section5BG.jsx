import { motion } from "framer-motion";
import "./Section5BG.css";

const Section5BG = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 50 }}
        className="circle white"
      ></motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 50 }}
        className="circle blue"
      ></motion.div>
    </>
  );
};

export default Section5BG;
