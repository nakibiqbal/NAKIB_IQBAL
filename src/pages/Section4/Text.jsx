/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import "./text.css"
const Text = ({ ref4 }) => {
    const aboutMe = `I'm a self-taught passionate Frontend Developer and I'm a positive dreamer. I cherish a long dream in my heart for doing something better/creative in this sector. InshaAllah (if Allah wills). I'll be able to make better by having codial supports of all well-wishers. I love both programming and designing. I'm also interested in open source, and creative coding projects.`;

    return (
        <div className="aboutMe">
            <div className="mainTxt">
                {
                    aboutMe.split(" ").map((word, index) => {
                        const { scrollYProgress } = useScroll({ target: ref4, offset: ["0% 0%", "100% 100%"] });
                        const wordOpacity = useTransform(scrollYProgress, [index * 0.016, (index + 1) * 0.016], [0, 1])
                        return (
                            <motion.h1
                                style={{ opacity: wordOpacity }}
                                key={index}>
                                {word}
                            </motion.h1>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Text
