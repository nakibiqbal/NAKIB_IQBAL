/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./Variant6.css";

const letters = "$\u00A0$\u00A0~\u00A0`\u00A0!\u00A0@\u00A0#\u00A0%\u00A0^\u00A0&\u00A0*\u00A0(\u00A0)\u00A0_\u00A0+\u00A0=\u00A0-\u00A0[\u00A0]\u00A0{\u00A0}\u00A0:\u00A0;\u00A0'\u00A0,\u00A0.\u00A0/\u00A0<\u00A0>\u00A0?\u00A0$\u00A0$";

const TextScramble = ({ text, startDelay, scrambleDelay }) => {
    const [displayText, setDisplayText] = useState(text.split("")); // Use the actual text as the placeholder
    const [opacity, setOpacity] = useState(text.split("").map(() => 0)); // Start with invisible letters

    useEffect(() => {
        const animate = async () => {
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            // Reset state for a fresh start
            setDisplayText(text.split(""));
            setOpacity(text.split("").map(() => 0));

            await sleep(startDelay);

            // Appear Phase
            for (let i = 0; i < text.length; i++) {
                setOpacity((prev) =>
                    prev.map((value, index) => (index <= i ? 1 : value))
                );
                await sleep(50); // Slower delay for smoother appearance
            }

            await sleep(scrambleDelay);

            // Scramble Phase (after appearing)
            for (let i = 0; i < text.length * 1.5; i++) {
                const randomIndex = Math.floor(Math.random() * text.length);
                setDisplayText((prev) =>
                    prev.map((letter, index) =>
                        index === randomIndex
                            ? letters[Math.floor(Math.random() * letters.length)]
                            : letter
                    )
                );
                await sleep(100); // Slower delay for smoother scrambling
            }

            // Disappear Phase
            const disappearOrder = [...Array(text.length).keys()].sort(
                () => Math.random() - 0.5
            ); // Random order
            for (let i = 0; i < disappearOrder.length; i++) {
                const index = disappearOrder[i];
                setDisplayText((prev) =>
                    prev.map((letter, idx) =>
                        idx === index
                            ? letters[Math.floor(Math.random() * letters.length)]
                            : letter
                    )
                );
                setOpacity((prev) =>
                    prev.map((value, idx) => (idx === index ? 0 : value))
                );
                await sleep(100); // Slower delay for smoother disappearing
            }

            // Restart the animation from the beginning
            animate();
        };

        animate(); // Start the animation
    }, [text, scrambleDelay, startDelay]);

    return (
        <div className="forText txt6">
            {displayText.map((letter, index) => (
                <span
                    key={index}
                    style={{
                        opacity: opacity[index], // Control visibility with opacity
                        display: "inline-block", // Prevent layout shifting
                        transform: "none", // Ensure no movement on the x-axis
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};

const Variant6 = () => {
    return (
        <div className="variant6">
            <div className="variant6_child">
                <TextScramble text="Less,&nbsp;but&nbsp;deeper" startDelay={1000} scrambleDelay={2500} />
                <TextScramble text="Less,&nbsp;but&nbsp;deeper" startDelay={1500} scrambleDelay={2000} />
                <TextScramble text="Less,&nbsp;but&nbsp;deeper" startDelay={2000} scrambleDelay={1500} />
                <TextScramble text="Less,&nbsp;but&nbsp;deeper" startDelay={2500} scrambleDelay={1000} />
                <TextScramble text="Less,&nbsp;but&nbsp;deeper" startDelay={3000} scrambleDelay={500} />
            </div>
        </div>
    );
};

export default Variant6;