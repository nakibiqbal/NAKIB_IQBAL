import { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Section6.css";
import HeadingText from "../../HeadingText_DY/HeadingText";

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const [tilt, setTilt] = useState({});
  const [shadowPos, setShadowPos] = useState({});
  const [isHovered, setIsHovered] = useState({});

  const handleMouseMove = (e, cardId) => {
    const cardElement = e.currentTarget;
    const { left, top, width, height } = cardElement.getBoundingClientRect();

    // Get cursor position relative to the center of the card
    const centerX = width / 2;
    const centerY = height / 2;
    const x = e.clientX - left - centerX;
    const y = e.clientY - top - centerY;

    // Calculate tilt based on distance from the center
    const tiltX = (y / centerY) * 30;
    const tiltY = (x / centerX) * -30;

    setTilt((prevTilt) => ({
      ...prevTilt,
      [cardId]: { x: tiltX, y: tiltY },
    }));

    const shadowX = ((e.clientX - left) / width) * 100;
    const shadowY = ((e.clientY - top) / height) * 100;

    setShadowPos((prevShadowPos) => ({
      ...prevShadowPos,
      [cardId]: {
        x: `${Math.min(Math.max(shadowX, 5), 95)}%`,
        y: `${Math.min(Math.max(shadowY, 5), 95)}%`,
      },
    }));
  };

  const handleMouseEnter = (cardId) => {
    setIsHovered((prevHovered) => ({ ...prevHovered, [cardId]: true }));
  };

  const handleMouseLeave = (cardId) => {
    setTilt((prevTilt) => ({
      ...prevTilt,
      [cardId]: { x: 0, y: 0 },
    }));
    setShadowPos((prevShadowPos) => ({
      ...prevShadowPos,
      [cardId]: { x: "50%", y: "50%" },
    }));
    setIsHovered((prevHovered) => ({ ...prevHovered, [cardId]: false }));
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



  return (
    <section id="section6">
      {/* heading starts */}
      <HeadingText heading1="What" heading2="I Serve" />
      {/* heading ends */}
      <div className="cardContainer">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="creative-tilt-card"
            onMouseMove={(e) => handleMouseMove(e, card.id)}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={() => handleMouseLeave(card.id)}
            style={{
              transform: `perspective(1000px) rotateY(${tilt[card.id]?.y || 0
                }deg) rotateX(${tilt[card.id]?.x || 0}deg)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <div
              className="dynamic-shadow"
              style={{
                left: shadowPos[card.id]?.x || "50%",
                top: shadowPos[card.id]?.y || "50%",
                opacity: isHovered[card.id] ? 1 : 0,
                position: "fixed",
                pointerEvents: "none",
              }}
            />
            <div className="card-content">
              <div className="icon">{card.svg}</div>
              <h2>{card.skill}</h2>
              <p>{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
