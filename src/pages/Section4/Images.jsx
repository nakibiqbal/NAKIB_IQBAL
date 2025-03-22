/* eslint-disable react/prop-types */
import "./images.css";
import { Data } from "./data";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Images({ ref4 }) {
    const [data] = useState(Data);
    return (
        <div className="parentImgDiv">
            <>
                {data.map(({ src, susu }, index) => {
                    return <ScrollFunction key={index} index={index} ref4={ref4} src={src} susu={susu} />;
                })}
            </>
        </div>
    )
}
const ScrollFunction = ({ index, ref4, src, susu }) => {
    const { scrollYProgress } = useScroll({ target: ref4, offset: [`${(index + 10) * 1.25}% -120%`, "300% -30%"] });
    const z = useTransform(scrollYProgress, [0, 1], [100, 2000]);
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-360, 360]);
    return <motion.div
        className="test"
        style={{
            z,
            scale,
            rotate,
        }}
    >
        <div className={`stick4 ${susu}`}>
            <img src={src} loading="lazy" />
        </div>
    </motion.div>

}