import "./section4.css";
import "./images.css";
import "./text.css";
import { useRef } from "react";
import Images from "./Images";
// import Text from "./Text";

const Section4 = () => {
  const ref4 = useRef(null);
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

        {/* <Text ref4={ref4} /> */}
      </div>
    </section>
  );
};

export default Section4;

