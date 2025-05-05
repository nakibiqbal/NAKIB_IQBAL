import { useEffect, useState } from "react";
// import { useScramble } from "use-scramble";
import { AnimatePresence, motion } from "framer-motion";
import edit2 from "../assets/edit2.jpg";
import "./Navbar.css";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const navData = [
        { item: "Skills", section: "#section5", id: 1 },
        { item: "Services", section: "#section6", id: 2 },
        { item: "Projects", section: "#image_reveal", id: 3 },
        { item: "About", section: "#section4", id: 4 },
        { item: "Contact", section: "#ContactSection", id: 5 },
    ]

    // For small screen size
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 812);

    // Update state on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div className="navbar">

                <AnimatePresence>
                    <motion.button
                        animate={{
                            border: isClick ? "1px dashed #00ff00bf" : "1px solid #00ff00bf",
                        }}
                        transition={{
                            duration: 1,
                            delay: isClick ? 0 : 1,
                            ease: [0.87, 0, 0.13, 1]
                        }}
                        onClick={() => setIsClick(!isClick)}>MENU</motion.button>

                    <div
                        style={{
                            zIndex: isClick ? 1 : -1,
                            background: isClick ? "#000000a6" : "transparent",
                        }}
                        className="parentNavItem"
                    >
                        <div
                            onClick={() => setIsClick(false)} // Close the menu when clicking outside
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        ></div>
                        <motion.nav
                            animate={{
                                width: isClick ? (isSmallScreen ? "90%" : "48rem") : "7rem",
                                height: isClick ? (isSmallScreen ? "90%" : "95%") : "3.5rem",
                                border: isClick ? "1px solid #00ff00bf" : "1px dashed #00ff00bf",
                            }}
                            transition={{
                                duration: 1,
                                delay: isClick ? 0 : 1,
                                ease: [0.87, 0, 0.13, 1]
                            }}
                            className="navItem">

                            <AnimatePresence>
                                {
                                    isClick &&
                                    <div className="navItems">

                                        <div className="navItemsChild">
                                            {navData.map((data, index) => {
                                                const { item, section, id } = data;
                                                return <Items key={index} item={item} section={section} id={id} />
                                            })}
                                        </div>
                                        <motion.div
                                            className="nakibIqbal"
                                            style={{ backgroundImage: `url(${edit2})` }}
                                            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", filter: "blur(20px) grayscale(1)" }} // Hidden at the bottom
                                            animate={{
                                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", filter: "blur(0px) grayscale(0)", transition: {
                                                    delay: 1, duration: 1,
                                                    ease: [0.87, 0, 0.13, 1],
                                                }
                                            }} // Appear from bottom to top
                                            exit={{
                                                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", filter: "blur(20px) grayscale(1)", transition: {
                                                    delay: 0, duration: 1,
                                                    ease: [0.87, 0, 0.13, 1],
                                                }
                                            }} // Hide from top to bottom
                                        />
                                    </div>
                                }
                            </AnimatePresence>

                        </motion.nav>
                    </div>
                </AnimatePresence >

            </div >
        </>
    )
}

export default Navbar


const Items = ({ item, section, id }) => {
    // hook returns a ref
    // const { scrambleRef, replay } = useScramble({
    //     text: item,
    //     onStart: () => console.log("start"), // Added onStart callback
    //     onAnimationFrame: (result) => console.log(result)
    // });
    return <motion.a
        key={id}
        // ref={scrambleRef}
        // onMouseOver={replay}
        // onFocus={replay}
        initial={{ opacity: 0, scale: 1.4, y: 100, filter: "blur(20px)", color: "green" }}
        whileHover={{ color: "#00ff00bf" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { delay: id * 0.1, ease: [0.87, 0, 0.13, 1], duration: 1 } }}
        exit={{ opacity: 0, y: 100, scale: 1, filter: "blur(20px)", transition: { ease: [0.87, 0, 0.13, 1], duration: 0.5 } }}
        transition={{
            duration: 0.5,
            ease: [0.87, 0, 0.13, 1]
        }}
        href={section}
        onClick={(e) => {
            e.preventDefault(); // Prevent the default jump behavior
            const target = document.querySelector(section);
            target?.scrollIntoView({
                behavior: "smooth", // Smooth scroll
                block: "start",     // Scroll to the top of the section
            });
        }}
    >
        {item}
    </motion.a>
}