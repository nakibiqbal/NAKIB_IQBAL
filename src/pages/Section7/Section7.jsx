import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
import "./Section7.css"
import { useEffect } from "react";

const Section7 = () => {

    useEffect(() => {
        const imgBg = document.querySelectorAll(".img")
        gsap.fromTo(imgBg,
            { width: "20vh", height: "30vh", opacity: 1, filter: "brightness(1)", borderRadius: "2rem" },
            {
                width: "100%",
                height: "100%",
                filter: " brightness(0.5)",
                borderRadius: "0rem",
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imgBg,
                    start: "top 30%",
                    end: "bottom -200%",
                    scrub: true,
                },
            }
        )
    }, [])

    return (

        <>
            <section id="section7" >
                <div className="imgParallax">
                    <img
                        className="img"
                        src="src/assets/NAKIB6.jpg"
                    />
                </div>
            </section>
        </>

    )
}

export default Section7
