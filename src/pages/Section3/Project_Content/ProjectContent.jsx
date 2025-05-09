/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./ProjectContent.css"

const ProjectContent = ({ setModal, list }) => {
    return (
        <>
            {list.map((item, index) => {
                return (
                    <motion.div
                        key={item.id}
                        className="sec3Wrapper"
                        onMouseEnter={() => setModal({ active: true, index: index })}
                        onMouseLeave={() => setModal({ active: false, index: index })}
                    >

                        <motion.div
                            className="scaleX"
                            initial={{ scaleX: 0.001, }}
                            whileInView={{ scaleX: 1, }}
                            transition={{
                                duration: 1,
                                delay: item.id * 0.08,
                                ease: [0.87, 0, 0.13, 1],
                            }}
                        />

                        <div className="FlipTextChild">

                            <h2>{item.label}</h2>

                            <img src={item.img} />

                            <div className="viewCursorBG viewBtn">
                                <a href="#">View</a>
                            </div>

                        </div>


                    </motion.div>
                );
            })}
        </>
    )
}

export default ProjectContent
