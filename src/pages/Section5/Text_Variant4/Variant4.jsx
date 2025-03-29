/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Variant4.css";

const TextAnim4 = ({ text, delay, repeatDelay, staggerDelay }) => {
    return (
        <motion.div className='forText txt4'>
            {
                text.split("").map((word, wordIndex) => (
                    <motion.p
                        initial={{ opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], }}
                        animate={{ opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], }}
                        transition={{
                            duration: 0.5,
                            delay: delay + (wordIndex * staggerDelay),
                            repeat:
                                Infinity,
                            repeatType: "loop",
                            repeatDelay: repeatDelay,
                        }}
                        key={wordIndex} >
                        {word}
                    </motion.p>
                ))
            }
        </motion.div>
    );
};

const Variant4 = () => {

    return (
        <div className='variant4'>

            <div className="variant4_child">
                <TextAnim4 text="Be&nbsp;the&nbsp;best" repeatDelay={1} delay={0.2} staggerDelay={0.02} />
                <TextAnim4 text="Be&nbsp;the&nbsp;best" repeatDelay={1} delay={0.3} staggerDelay={0.02} />
                <TextAnim4 text="Be&nbsp;the&nbsp;best" repeatDelay={1} delay={0.4} staggerDelay={0.02} />
                <TextAnim4 text="Be&nbsp;the&nbsp;best" repeatDelay={1} delay={0.5} staggerDelay={0.02} />
                <TextAnim4 text="Be&nbsp;the&nbsp;best" repeatDelay={1} delay={0.6} staggerDelay={0.02} />
            </div>

        </div>
    );
};

export default Variant4;
