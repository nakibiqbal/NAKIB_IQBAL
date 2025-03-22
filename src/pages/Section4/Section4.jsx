import "./section4.css";
import "./images.css";
import "./text.css";
import { useRef } from "react";
import Images from "./Images";
import Text from "./Text";

const Section4 = () => {
  const ref4 = useRef(null);

  return (
    <section ref={ref4} id="section4">
      <div className="sec4Wrapper">
        <Images ref4={ref4} />

        <Text ref4={ref4.current} />
      </div>
    </section>
  );
};

export default Section4;

