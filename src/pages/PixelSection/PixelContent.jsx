import { AiFillOpenAI } from "react-icons/ai";
import { motion, useScroll, useTransform } from "framer-motion";

const PixelContent = ({ mainRef }) => {
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["end end", "end center"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        pointerEvents: "none",
        overflow: "hidden",
        opacity
      }}
    >
      <iframe
        src="https://giphy.com/embed/npY8OaCJcdGvBw2GtM"
        style={{ border: "none", zIndex: 1 }}
        title="animation"
        className="iframe"
      ></iframe>
      <h1 className="name">$ NAKIB IQBAL JOARDER $</h1>
      <h1 className="name">FRONTEND REACT.JS</h1>
      <h1 className="developer">
        <AiFillOpenAI className="aiLeft" />
        DEVELOPER
        <AiFillOpenAI className="aiRight" />
      </h1>
      <h1 className="name">I LOVE WORKING ON</h1>
      <h1 className="name">COMPLEX ANIMATION&apos;S</h1>
      <h1 className="name">___OCTOBER, 2024___</h1>
    </motion.div>
  );
};

export default PixelContent;
