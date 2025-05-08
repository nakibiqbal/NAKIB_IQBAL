import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useScramble } from "use-scramble";
import edit2 from "../assets/edit2.jpg";
import "./Navbar.css";
import Items from "./Items";

const Navbar = () => {

    const [isClick, setIsClick] = useState(false);


    // For small screen size
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1538);

    // Update state on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1538);
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
                        // onClick={() => setIsClick(false)} // Close the menu when clicking outside
                        className="parentNavItem"
                        style={{
                            background: isClick ? "rgb(0 0 0 / 70%)" : "transparent",
                            pointerEvents: isClick ? "all" : "none"
                        }}
                    >
                        {
                            isClick && <div
                                onClick={() => setIsClick(false)} // Close the menu when clicking outside
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        }
                        <motion.nav
                            animate={{
                                width: isClick ? (isSmallScreen ? "90%" : "48rem") : (isSmallScreen ? "6rem" : "7rem"),
                                height: isClick ? (isSmallScreen ? "92%" : "95%") : (isSmallScreen ? "3.1rem" : "3.5rem"),
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
                                            <Items setIsClick={setIsClick} />

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
