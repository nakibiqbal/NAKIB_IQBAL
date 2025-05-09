import { motion } from "framer-motion"
import "./ProjectGallery.css"
import gsap from "gsap";
import { useEffect, useRef } from "react";

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.6, ease: [0.87, 0, 0.13, 1] } }
}
const ProjectGallery = ({ list, modal, hoverEl }) => {
    const { active, index } = modal;
    const galleryContainer = useRef(null)

    useEffect(() => {
        //Move Container
        let xMoveContainer = gsap.quickTo(galleryContainer.current, "left", { duration: 0.8, ease: "power3" })
        let yMoveContainer = gsap.quickTo(galleryContainer.current, "top", { duration: 0.8, ease: "power3" })

        const hoverArea = hoverEl.current;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            xMoveContainer(clientX);
            yMoveContainer(clientY);
        };


        hoverArea.addEventListener('mousemove', handleMouseMove)

        return () => { hoverArea.removeEventListener('mousemove', handleMouseMove) }
    }, [])

    return (
        <motion.div ref={galleryContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="galleryContainer" >

            <div style={{ top: index * -100 + "%" }} className="gallerySlider">

                {
                    list.map(({ img }, index) => {
                        return <div key={index} className="galleryImages" >
                            <img src={img} alt="PROJECT GALLERY" />
                        </div>
                    })
                }

            </div>

        </motion.div>
    )
}

export default ProjectGallery
