import { useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import designA3 from "../../assets/designA3.png"

import "./section3.css";
import { ListData } from "./ListData";

function Section3() {
  const [list] = useState(ListData);

  const secRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-200, 600])
  const hue = useTransform(scrollYProgress, [0, 1], [150, 80])

  // MotionTemplate used because hue will be gone to a string.
  const filter = useMotionTemplate`hue-rotate(${hue}deg) blur(20px)`;

  return (
    <>
      <section ref={secRef} id="image_reveal">

        <motion.div style={{ y }} className="imgBgThreeParent">
          <motion.img style={{ filter }} src={designA3} className="bgImgThree" alt="Background" />
        </motion.div>

        <div className="section3Content">
          {list.map((item) => {
            return (
              <motion.div key={item.id} className="sec3Wrapper">
                <motion.div
                  className="scaleX"
                  initial={{ scaleX: 0.001, }}
                  whileInView={{ scaleX: 1, }}
                  transition={{
                    duration: 1,
                    delay: item.id * 0.08,
                    ease: [0.87, 0, 0.13, 1],
                  }}
                />

                <div className="FlipTextChild">
                  <h2>{item.label}</h2>
                </div>
              </motion.div>);
          })}
        </div>
      </section>
    </>
  );
}

export default Section3;
