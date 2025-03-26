/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Variant2.css";

const TextAnim2 = ({ text, delay }) => {
    const [fadeOut, setFadeOut] = useState(false);
    const letters = text.split("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeOut(true);
        }, 1700); // Start fade-out after all letters are visible
        return () => clearTimeout(timeout);
    }, []);

    return (
        <motion.div className="forText2">
            {letters.map((letter, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: fadeOut ? 0 : 1 }}
                    transition={{
                        duration: 0.001,
                        delay: fadeOut ? (Math.random() * 2) : (delay + index * 0.05),

                    }}
                >
                    {letter}
                </motion.p>
            ))}
        </motion.div>
    );
};

const Variant2 = () => {
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        const restartTimeout = setTimeout(() => {
            setResetKey((prev) => prev + 1);
        }, 3700); // Restart after fade-out completes
        return () => clearTimeout(restartTimeout);
    }, [resetKey]);

    return (
        <div className="variant2">

            <div className="variant2_child" key={resetKey}>
                {[0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2].map((delay, index) => (
                    <TextAnim2 key={index} text="Good People" delay={delay} />
                ))}
            </div>

        </div>
    );
};

export default Variant2;
