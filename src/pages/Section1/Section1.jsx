import { motion } from "framer-motion";

import Flip from "./Flip";
import "./section1.css";

const Section1 = () => {
  return (
    <>
      <section className="sectionMy">
        <div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 30,
            }}
            className="p"
          >
            <p>___as</p>
          </motion.div>
          <div className="arebetaEmni">
            <Flip>a &nbsp; creative</Flip>
            <Flip>frontend</Flip>
            <Flip>developer</Flip>
            <Flip>i &nbsp; like &nbsp; to &nbsp; think</Flip>
            <Flip>beyond___</Flip>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section1;
