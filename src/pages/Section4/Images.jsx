/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Data } from "./data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import "./images.css";
const Images = ({ ref4 }) => {
    const [data] = useState(Data);

    return (
        <>
            {data.map(({ id, src, susu }, index) => {
                const { scrollYProgress } = useScroll({ target: ref4, offset: [`${index * 3}% ${index * 3}%`, "300% 300%"] });
                const Scale = (start, end) => useTransform(scrollYProgress, [0, 1], [start, end]);
                return (
                    <motion.div key={id} className="test" style={{ scale: Scale(0, 20) }}>
                        <div className={`stick4 ${susu}`}>
                            <img src={src} />
                        </div>
                    </motion.div>
                );
            })}
        </>
    )
}

export default Images
