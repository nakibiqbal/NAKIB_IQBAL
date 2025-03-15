import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SkillIcons } from "../SkillIcons";
import "./SkillInfo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillInfo = () => {
  const [skillIcons] = useState(SkillIcons);
  const [hoverSkillInfo, setHoverSkillInfo] = useState(null);

  return (
    <>
      {skillIcons.map((data) => {
        return (
          <>
            <div
              onMouseEnter={() => {
                setHoverSkillInfo(data);
              }}
              onMouseLeave={() => {
                setHoverSkillInfo(null);
              }}
              style={{ position: "relative", display: "flex" }}
            >
              <motion.img
                whileHover={{ y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  mass: 0.1,
                }}
                className="skillImage"
                src={data.image}
              />
              <AnimatePresence>
                {hoverSkillInfo?.id === data.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      mass: 0.1,
                    }}
                    className="skillInfo"
                  >
                    <img src={data.image} />
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SkillInfo;
