import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import ProjectGallery from "./Project_Gallery/ProjectGallery";
import ProjectContent from "./Project_Content/ProjectContent";
import "./section3.css";
import { ListData } from "./ListData";
import designA3 from "../../assets/designA3.png"
import designA4 from "../../assets/designA4.png"

function Section3() {
  const [list] = useState(ListData);


  // For small screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 982);

  // Update state on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 982);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const secRef = useRef(null);
  const hoverEl = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-200, isSmallScreen ? 3000 : 600])
  const yReverse = useTransform(scrollYProgress, [0, 1], [isSmallScreen ? 3000 : 600, isSmallScreen ? -1000 : -1000])
  const hue = useTransform(scrollYProgress, [0, 1], [isSmallScreen ? 200 : 150, isSmallScreen ? 50 : 80])
  const rotate = useTransform(scrollYProgress, [0, 1], [360, -360])

  // MotionTemplate used because hue will be gone to a string.
  const filter = useMotionTemplate`hue-rotate(${hue}deg) blur(20px)`;

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <section ref={secRef} id="image_reveal">

        <motion.div style={{ y }} className="imgBgThreeParent">
          <motion.img style={{ filter }} src={designA3} className="bgImgThree" alt="Background" />
        </motion.div>
        <motion.div style={{ y: yReverse }} className="imgBgFourParent">
          <motion.img style={{ rotate }} src={designA4} className="bgImgFour" alt="Background" />
        </motion.div>

        <div ref={hoverEl} className="section3Content">
          <ProjectContent setModal={setModal} list={list} hoverEl={hoverEl} />
        </div>

        <ProjectGallery list={list} modal={modal} hoverEl={hoverEl} />

      </section>
    </>
  );
}

export default Section3;
