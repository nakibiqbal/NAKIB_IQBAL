/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";

export default function Text({ ref4 }) {
    const aboutMe = `I'm a self-taught passionate Frontend Developer and I'm a positive dreamer. I cherish a long dream in my heart for doing something better/creative in this sector. InshaAllah (if Allah wills). I'll be able to make better by having codial supports of all well-wishers. I love both programming and designing. I'm also interested in open source, and creative coding projects.`;

    return (
        <div className="aboutMe">
            <div className="mainTxt">
                {
                    aboutMe.split(" ").map((word, index) => {
                        return <ScrollingText key={index} word={word} index={index} ref4={ref4} />
                    })
                }
            </div>
        </div>
    )
}
const ScrollingText = ({ word, index, ref4 }) => {
    const { scrollYProgress } = useScroll({ target: ref4, offset: [`start end`, "end end"], });
    console.log(scrollYProgress);
    const wordOpacity = useTransform(scrollYProgress, [index * 0.05, (index + 1) * 0.05], [0, 1])
    return (
        <motion.h1
            style={{ opacity: wordOpacity }}
            key={index}>
            {word}
        </motion.h1>
    );
}

