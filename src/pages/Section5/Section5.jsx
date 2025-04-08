import "./Section5.css";
import { useState, useEffect, useRef } from "react";

import Variant1 from "./Text_Variant1/Variant1";
import Variant2 from "./Text_Variant2/Variant2";
import Variant3 from "./Text_Variant3/Variant3";
import Variant4 from "./Text_Variant4/Variant4";
import Variant5 from "./Text_Variant5/Variant5";
import Variant6 from "./Text_Variant6/Variant6";
import Variant7 from "./Text_Variant7/Variant7";

const Section5 = () => {
    const [currentVariant, setCurrentVariant] = useState(1);
    const durationsRef = useRef([2500, 3800, 5500, 4000, 2900, 2900, 2800, 5000, 4300]);

    const variants = [
        <Variant1 key={1} />,
        <Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Good&nbsp;People"
            value={2}
            staggerValue={0.05}
        />,
        <Variant2
            key={3}
            delaying={[0.5, 0.9, 1.3, 1.7, 2.1]}
            fadingOut={2500}
            restart={5500}
            text="Memories"
            value={3}
            staggerValue={0.04}
        />,
        <Variant3 key={4} />,
        <Variant4 key={5} text="Stoicism" />,
        <Variant4 key={6} text="Believe" />,
        <Variant5 key={7} />,
        <Variant6 key={8} />,
        <Variant7 key={9} />,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVariant((prev) =>
                prev < durationsRef.current.length ? prev + 1 : 1
            );
        }, durationsRef.current[currentVariant - 1]);

        return () => clearInterval(interval);
    }, [currentVariant]);

    return (
        <section id="section5">
            <div className="sec5Wrapper">
                <div className="mainTextVariant1">
                    {variants[currentVariant - 1] || null}
                </div>
            </div>
        </section>
    );
};

export default Section5;