import "./section4.css";
import "./images.css";
import "./text.css";
import { useRef } from "react";
import Images from "./Images";
import { motion, useScroll, useTransform } from "framer-motion";

const Section4 = () => {
  const ref4 = useRef(null);
  const aboutMe = `I'm a self-taught passionate Frontend Developer and I'm a positive dreamer. I cherish a long dream in my heart for doing something better/creative in this sector. InshaAllah (if Allah wills). I'll be able to make better by having codial supports of all well-wishers. I love both programming and designing. I'm also interested in open source, and creative coding projects.`;
  const { scrollYProgress } = useScroll({ target: ref4, offset: [`start 0%`, "end 100%"], });

  return (
    <section ref={ref4} id="section4">
      <div className="sec4Wrapper">
        <Images ref4={ref4} />

        <div className="aboutMe">
          <div className="mainTxt">
            {
              aboutMe.split(" ").map((word, index) => {
                const WordOpacity = () => useTransform(scrollYProgress, [index * 0.016, (index + 1) * 0.016], [0, 1])
                return <motion.h1
                  style={{ opacity: WordOpacity() }}
                  key={index}>
                  {word}
                </motion.h1>

              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
