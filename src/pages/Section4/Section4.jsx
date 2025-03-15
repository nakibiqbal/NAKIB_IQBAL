import "./section4.css";
import { useRef } from "react";
import Images from "./Images";
import Text from "./Text";
const Section4 = () => {
  const ref4 = useRef(null);

  return (
    <section id="section4">

      <div ref={ref4} className="sec4Parent">
        <div className="sec4Wrapper">
          <Images ref4={ref4} />
          <Text ref4={ref4} />
        </div>

      </div>

    </section>
  );
};

export default Section4;
