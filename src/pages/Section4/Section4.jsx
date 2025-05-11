import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Images from "./Images";
import "./section4.css";
import "./images.css"
import { Data } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const parentRef = useRef(null);
  const [data] = useState(Data);

  const { scrollYProgress } = useScroll({ target: parentRef, offset: ["start 20%", "end 110%"] });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section ref={parentRef} id="section4">

      <div className="imageWrapper">


        {/* Images start */}

        <div className="parentImgDiv">
          {data.map(({ src, className }, index) => (
            <ScrollFunction key={index} index={index} parentRef={parentRef.current} src={src} className={className} />
          ))}
        </div>

        {/* <Images parentRef={parentRef.current} /> */}
        {/* Images end */}

        <motion.div style={{ y }} className="texts">

          <p>
            Creating meaningful and interactive web experiences is at the heart of what I do. As a frontend developer, I enjoy building visually engaging interfaces with smooth user experiences using modern technologies like React and animation libraries. I care deeply about clean design, performance, and making every interaction feel intuitive and enjoyable.
            <br />
            <br />
            I truly believe that to build something awesome, the environment plays a key role. A positive and inspiring atmosphere can elevate our mindset — and that’s when the real magic happens.
            <br />
            <br />
            Outside of coding, I enjoy traveling, exploring new ideas, watching food and travel vlogs, sleeping, and taking time to relax. These moments recharge my creativity and keep me inspired.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Section4;


const ScrollFunction = ({ index, src, className, parentRef }) => {
  const childRef = useRef(null);

  // For small screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  // Update state on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useGSAP(
    () => {
      gsap.fromTo(
        childRef.current,
        {
          z: -1000,
          opacity: 0,
        },
        {
          z: 300,
          opacity: 1,
          scrollTrigger: {
            trigger: childRef.current,
            start: `${index * (isSmallScreen ? 80 : 70)}% 50%`,
            end: `${index * (isSmallScreen ? 80 : 70)}% -110%`,
            scrub: true,
            markers: true
          },
        }
      );
    },
    { scope: parentRef }
  );

  return (
    <div ref={childRef} className="childImgDiv">
      <div className={`imagesSize ${className}`}>
        <img src={src} loading="lazy" />
      </div>
    </div>
  );
};