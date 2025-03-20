/* eslint-disable react-hooks/rules-of-hooks */
import "./images.css";
import { Data } from "./data";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Images = ({ ref4 }) => {
    const [data] = useState(Data);

    return (
        <div className="parentImgDiv">
            {data.map(({ id, src, susu }, index) => {
                const { scrollYProgress } = useScroll({ target: ref4, offset: [`${index * 3}% 100%`, `180% 0%`] });
                const z = useTransform(scrollYProgress, [0, 1], [-200, 1700]);
                const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
                return (
                    <motion.div key={id}
                        className="test"
                        style={{
                            z,
                            scale
                        }}
                    >
                        <div className={`stick4 ${susu}`}>
                            <img src={src} loading="lazy" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    )
}

export default Images
