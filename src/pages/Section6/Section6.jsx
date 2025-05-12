import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section6.css";
import designA1 from "../../assets/designA1.png"

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [shadowPos, setShadowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, cardId) => {
    const cardElement = e.currentTarget;
    const { left, top, width, height } = cardElement.getBoundingClientRect();

    // Get cursor position relative to the center of the card
    const centerX = width / 2;
    const centerY = height / 2;
    const x = e.clientX - left - centerX;
    const y = e.clientY - top - centerY;

    // Calculate tilt
    const tiltX = (y / centerY) * 30;
    const tiltY = (x / centerX) * -30;

    cardElement.style.transform = `perspective(1000px) rotateY(${tiltY}deg) rotateX(${tiltX}deg)`

    // Calculate cursor position relative to the card's center
    const posX = e.clientX - left;
    const posY = e.clientY - top;

    setShadowPos({ x: posX, y: posY });
    setHoveredCardId(cardId);

  };

  const handleMouseLeave = (e) => {
    const cardElement = e.currentTarget;
    cardElement.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
    setHoveredCardId(null);
  };



  const cardData = [
    {
      id: 1,
      skill: "Interactive Landing Pages",
      desc: "I design and develop visually stunning, scroll-driven landing pages with smooth animations and creative effects using React, GSAP, and Lenis.",
    },
    {
      id: 2,
      skill: "Figma to React",
      desc: "I transform Figma designs into fully functional, responsive React applications while maintaining design fidelity.",
    },
    {
      id: 3,
      skill: "Creative Portfolio Websites",
      desc: "I build unique, interactive portfolio websites with dynamic animations and seamless transitions to showcase your work in the best light.",
    },
    {
      id: 4,
      skill: "Complex Animations",
      desc: "I create complex animations in React using GSAP and Framer Motion to deliver smooth, engaging, and highly interactive user experiences.",
    },
    {
      id: 5,
      skill: "Responsive Web Design",
      desc: "I design responsive websites that adapt flawlessly to any device, ensuring a smooth and consistent user experience.",
    },
    {
      id: 6,
      skill: "VIEW SOME WORKS TO ENSURE",
    },
  ];

  // For small screen size
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 983);

  // Update state on screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 983);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const secRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end center"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [isSmallScreen ? -100 : -200, isSmallScreen ? 1000 : 200])


  return (
    <section ref={secRef} id="section6">
      <motion.div style={{ y }} className="bgImgParent">
        <img
          src={designA1} className="bgOne" alt="Background" />
      </motion.div>
      <div className="cardContainer">
        {cardData.map((card) => (

          <div
            key={card.id}
            className="creative-tilt-card"
            onMouseMove={(e) => handleMouseMove(e, card.id)}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: "transform 0.5s ease-out",
            }}
          >
            {/* Shadow attached to the cursor */}
            {hoveredCardId === card.id && (
              <span
                style={{
                  left: `${shadowPos.x}px`,
                  top: `${shadowPos.y}px`,
                }}
                className="shadow"
              />
            )}
            <div className="card-content">
              <h2>{card.skill}</h2>
              {card.desc && <p>{card.desc}</p>}
            </div>
          </div>

        ))}

      </div>
    </section>
  );
};

export default Section6;
