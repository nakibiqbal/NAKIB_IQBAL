/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Variant3.css";

const TextAnim3 = ({ text, delay }) => {
  const letters = text.split("");

  return (
    <motion.div className='forText txt3'>
      {letters.map((letter, index) => (
        <motion.p
          initial={{ opacity: [0, 0, 0, 1] }}
          animate={{ opacity: [1, 1, 1, 0] }}
          transition={{
            duration: 0.3,
            delay: delay + (index * 0.04),
            repeat: Infinity,
            repeatType: "reverse",
          }}
          key={index}
        >
          {letter}
        </motion.p>
      ))}
    </motion.div>
  );
};

const Variant3 = () => {

  return (
    <div className='variant3'>

      <div className="variant3_child">
        <TextAnim3 text="Be&nbsp;the&nbsp; best" delay={0.5} />
        <TextAnim3 text="Be&nbsp;the&nbsp; best" delay={1} />
        <TextAnim3 text="Be&nbsp;the&nbsp; best" delay={1.5} />
        <TextAnim3 text="Be&nbsp;the&nbsp; best" delay={2} />
        <TextAnim3 text="Be&nbsp;the&nbsp; best" delay={2.5} />
      </div>

    </div>
  );
};

export default Variant3;
