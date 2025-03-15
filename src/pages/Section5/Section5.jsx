import { motion } from "framer-motion";
import "./section5.css";
import HeadingText from "../../HeadingText_DY/HeadingText";
import useCustomHook from "../../hooks/CustomHook/useCustomHook";
import Section5BG from "./BG/Section5BG";
import SkillInfo from "./SkillInfo/SkillInfo";

const Section5 = () => {
  const { handleMouseMove, hovered, notHovered, shadowPos } = useCustomHook();

  return (
    <section id="section5">
      {/* heading */}
      <HeadingText heading1="My" heading2="Skillset" />

      {/* BG */}
      <Section5BG />

      <motion.div className="skillContent" style={{ position: "relative" }}>
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={hovered}
          onMouseLeave={notHovered}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            overflow: "hidden",
            borderRadius: "40px",
          }}
        >
          {/* Moving shadow effect */}
          <div
            style={{
              left: shadowPos.x,
              top: shadowPos.y,
            }}
            className="inner-shadow"
            onMouseEnter={hovered}
            onMouseLeave={notHovered}
          ></div>
        </div>

        {/* Skill icons and other content  */}
        <SkillInfo />
      </motion.div>
    </section>
  );
};

export default Section5;
