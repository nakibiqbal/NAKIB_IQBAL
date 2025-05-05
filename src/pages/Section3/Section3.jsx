import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

import "./section3.css";
import { Magnet } from "./Magnet";
import useCustomHook from "../../hooks/CustomHook/useCustomHook";
import { ListData } from "./ListData";

function Section3() {
  const [list] = useState(ListData);
  const { handleMove, imagePos } = useCustomHook();
  const [img, setImg] = useState({
    src: "",
    opacity: 0,
  });

  // special
  const DURATION = 0.25;
  const variants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
    },
    hovered: {
      y: "-100%",
      transition: {
        type: "spring",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <section id="image_reveal">
        <div className="section3Content">
          {list.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial="initial"
                animate="animate"
                whileHover="hovered"
                onMouseMove={handleMove}
                className="sec3Wrapper"
                onMouseEnter={() => {
                  setImg({
                    src: item.img,
                    opacity: 1,
                  });
                }}
                onMouseLeave={() => {
                  setImg({
                    src: item.img,
                    opacity: 0,
                  });
                }}
              >
                <div className="flipTextParent">
                  <div className="items">
                    {item.label.split("  ").map((l, i) => {
                      return (
                        <motion.div
                          variants={variants}
                          transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                          }}
                          className="FlipTextChild"
                          key={i}
                        >
                          <h2 style={{ color: "#ffffff94" }}>{l}</h2>
                          <h2 style={{
                            color: "white",
                            fontFamily: "Pixel Sans Serif",
                            fontSize: "18px",
                          }}>{l}</h2>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <Magnet>
                  <GoArrowUpRight />
                </Magnet>
              </motion.div>
            );
          })}
        </div>
      </section>
      <motion.img
        src={img.src}
        className="hovered_img"
        style={{
          y: imagePos.y,
          x: imagePos.x,
          opacity: img.opacity,
          zIndex: 99999999,
        }}
      />
    </>
  );
}

export default Section3;
