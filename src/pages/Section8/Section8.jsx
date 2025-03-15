/* eslint-disable react-hooks/rules-of-hooks */
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react'
import "./Section8.css"

const Section8 = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const textParallax1 = "Parallax";
    const bottom = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const top = useTransform(scrollYProgress, [0, 1], [0, -100]);


    const images = [
        {
            src: "src/assets/flower.jpg",
            y: md
        },
        {
            src: "src/assets/nature.jpg",
            y: sm
        },
        {
            src: "src/assets/l4.jpg",
            y: lg
        },
    ];
    const twoImg = [

        {
            src: "src/assets/NAKIB8.jpg",
            y: top
        },
        {
            src: "src/assets/NAKIB5.jpg",
            y: bottom

        },
    ];

    return (
        <section ref={container} className='section8'>
            <div className="container">
                <div className="imgWrapper me">
                    {twoImg.map(({ src, y }, i) => {
                        return <motion.img key={i} className="bc" src={src} style={{ y }} />
                    })}
                </div>
                <div className="textParallax">
                    <span>Scroll</span>
                    <br />
                    {textParallax1.split("").map((char, i) => {
                        const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * +120) + 25]);
                        return (
                            <motion.span key={`char_${i}`} style={{ top: y }}>
                                {char}
                            </motion.span>
                        );
                    })}
                </div>
                <div className="imgWrapper ran">
                    {images.map(({ src, y }, i) => {
                        return <motion.img key={i} className="ab" src={src} style={{ y }} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Section8
