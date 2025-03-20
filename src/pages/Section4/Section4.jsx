/* eslint-disable react-hooks/rules-of-hooks */
import "./section4.css";
import "./images.css";
import "./text.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Images from "./Images";

const Section4 = () => {
  const ref4 = useRef(null);
  const aboutMe = `I'm a self-taught passionate Frontend Developer and I'm a positive dreamer. I cherish a long dream in my heart for doing something better/creative in this sector. InshaAllah (if Allah wills). I'll be able to make better by having codial supports of all well-wishers. I love both programming and designing. I'm also interested in open source, and creative coding projects.`;
  // const handleMouseMoveSection = (e) => {
  //   const { currentTarget } = e; // Current section
  //   const rect = currentTarget.getBoundingClientRect();
  //   const x = e.clientX - rect.left
  //   const y = e.clientY - rect.top

  //   // Elements within the current section
  //   const elements = currentTarget.querySelectorAll(".stick4");

  //   elements.forEach((el) => {
  //     const moveX = (x / rect.width - 0.5) * 500; // Cursor-relative movement
  //     const moveY = (y / rect.height - 0.5) * 200;

  //     el.style.transition = "transform 1s cubic-bezier(0.22, 1, 0.36, 1)";
  //     el.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //   });
  // };
  // const handleMouseLeaveSection = (e) => {
  //   const elements = e.currentTarget.querySelectorAll(".stick4");
  //   elements.forEach((el) => {
  //     el.style.transform = "translate(0, 0)";
  //   });
  // };
  return (
    // <section onMouseMove={handleMouseMoveSection} onMouseLeave={handleMouseLeaveSection} ref={ref4} id="section4">
    <section ref={ref4} id="section4">
      <div className="sec4Wrapper">

        <Images ref4={ref4} />

        <div className="aboutMe">
          <div className="mainTxt">
            {
              aboutMe.split(" ").map((word, index) => {
                const { scrollYProgress } = useScroll({ target: ref4, offset: ["0% 0%", "100% 100%"] });
                const WordOpacity = (index) => useTransform(scrollYProgress, [index * 0.016, (index + 1) * 0.016], [0, 1])
                return (
                  <motion.h1
                    style={{ opacity: WordOpacity(index) }}
                    key={index}>
                    {word}
                  </motion.h1>
                );
              })
            }
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section4;

