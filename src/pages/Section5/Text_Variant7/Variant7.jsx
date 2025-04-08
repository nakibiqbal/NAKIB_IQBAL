/* eslint-disable react/prop-types */
import { useScramble } from "use-scramble";
import { useEffect } from "react";
import "./Variant7.css"
const Variant7 = () => {
    const text = [
        { text: "!false", second: 0 },
        { text: "!false", second: 200 },
        { text: "!false", second: 400 },
        { text: "!false", second: 600 },
        { text: "!false", second: 800 },
    ];

    return (
        <div className="variant7">
            {text.map(({ text, second }, index) => (
                <Text key={index} text={text} second={second} />
            ))}
        </div>
    );
};

export default Variant7;
const Text = ({ text, index, second }) => {
    const { ref, replay } = useScramble({
        text: text,
        speed: 0.2,
        range: [165, 175],
        seed: 20,
        tick: 2,
        playOnMount: false,
        overdrive: false
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const timeout = setTimeout(() => {
                replay();
            }, second);
            return () => clearTimeout(timeout);
        }, 2000);
        return () => clearInterval(interval);
    }, [replay, second]);

    return (
        <p key={index} ref={ref}></p>
    );
};