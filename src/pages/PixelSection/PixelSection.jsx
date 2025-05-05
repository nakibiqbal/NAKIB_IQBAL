import { useRef } from "react";
import { motion } from "framer-motion";
import "./PixelSection.css";
import PixelContent from "./PixelContent";
import useCustomHook from "../../hooks/CustomHook/useCustomHook";

const PixelSection = () => {
  const { boxCount } = useCustomHook();
  const mainRef = useRef(null);

  return (
    <section
      style={{
        height: "100vh",
        width: "100%,",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
      ref={mainRef}
    >
      {/* Hover grid */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          height: "100vh",
          position: "absolute",
        }}
      >
        {Array.from({ length: boxCount }).map((_, index) => (
          <motion.div
            key={index}
            onHoverStart={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              setTimeout(() => {
                e.target.style.backgroundColor = "transparent";
              }, 250);
            }}
            className="pixelDiv"
          />
        ))}
      </div>

      {/* Content overlay */}
      <PixelContent mainRef={mainRef} />
    </section>
  );
};

export default PixelSection;
