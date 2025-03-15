import "./section4.css";
import "./images.css";
import "./text.css";
import { useRef } from "react";
// import Images from "./Images";
// import Text from "./Text";
import { Data } from "./data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";


const Section4 = () => {
  const ref4 = useRef(null);
  const [data] = useState(Data);
  const aboutMe = `I'm a self-taught passionate Frontend Developer and I'm a positive dreamer. I cherish a long dream in my heart for doing something better/creative in this sector. InshaAllah (if Allah wills). I'll be able to make better by having codial supports of all well-wishers. I love both programming and designing. I'm also interested in open source, and creative coding projects.`;

  return (
    <section ref={ref4} id="section4">
      <div className="sec4Wrapper">
        {/* <Images ref4={ref4} />
        <Text ref4={ref4} /> */}
        {data.map(({ id, src, susu }) => {
          const { scrollYProgress } = useScroll({ target: ref4, offset: [`${id * 3}% ${id * 3}%`, "300% 300%"] });
          const Scale = (start, end) => useTransform(scrollYProgress, [0, 1], [start, end]);
          return (
            <motion.div key={id} className="test" style={{ scale: Scale(0, 20) }}>
              <div className={`stick4 ${susu}`}>
                <img src={src} />
              </div>
            </motion.div>
          );
        })}
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
