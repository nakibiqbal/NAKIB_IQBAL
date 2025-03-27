/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Variant2.css";

const TextAnim2 = ({ text, delay, fadingOut, className2, value, staggerValue }) => {
    const [fadeOut, setFadeOut] = useState(false);
    const letters = text.split("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeOut(true);
        }, fadingOut); // Start fade-out after all letters are visible
        return () => clearTimeout(timeout);
    }, [fadingOut]);

    return (
        <motion.div className={className2 ? `forText txt2 ${className2}` : "forText txt2"}>
            {letters.map((letter, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: fadeOut ? 0 : 1 }}
                    transition={{
                        duration: 0.001,
                        delay: fadeOut ? (Math.random() * value) : (delay + index * staggerValue),
                    }}
                >
                    {letter}
                </motion.p>
            ))}
        </motion.div>
    );
};

const Variant2 = ({ delaying, className, className2, fadingOut, restart, text, value, staggerValue }) => {
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
        const restartTimeout = setTimeout(() => {
            setResetKey((prev) => prev + 1);
        }, restart); // Restart after fade-out completes
        return () => clearTimeout(restartTimeout);
    }, [resetKey, restart]);

    return (
        <div className={className ? `variant2 ${className}` : "variant2"}>

            <div className="variant2_child" key={resetKey}>
                {delaying.map((delay, index) => (
                    <TextAnim2 key={index} text={text} delay={delay} fadingOut={fadingOut} className2={className2} value={value} staggerValue={staggerValue} />
                ))}
            </div>

        </div>
    );
};

export default Variant2;
