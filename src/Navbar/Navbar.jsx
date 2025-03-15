import { motion } from "framer-motion";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const navData = [
        { navSec: "Skills", section: "#section5", key: 1 },
        { navSec: "Services", section: "#section6", key: 2 },
        { navSec: "Projects", section: "#image_reveal", key: 3 },
        { navSec: "My Self", section: "#section4", key: 4 },
        { navSec: "Contact", section: "#ContactSection", key: 5 },
    ];

    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (e, section) => {
        e.preventDefault(); // Prevent the default jump behavior
        const target = document.querySelector(section);
        target?.scrollIntoView({
            behavior: "smooth", // Smooth scroll
            block: "start",     // Scroll to the top of the section
        });
    };

    const variants = {
        initial: {
            rotate: 0,
            x: 0,
        },
        hover1: {
            rotate: 40,
            x: 4,
        },
        hover2: {
            rotate: -40,
            x: -4,
        },
        hover3: {
            rotate: -40,
            x: 4,
        },
        hover4: {
            rotate: 40,
            x: -4,
        },
    };
    const bars = [
        ["hover1", "hover2"],
        ["hover3", "hover4"],
    ];
    const opacity = isHovered ? 1 : 0;
    const zIndex = isHovered ? 9999999 : 0;

    return (
        <>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bar"
            >
                {bars.map((row, rowIndex) => (
                    <div className="bar1" key={`bar-row-${rowIndex}`}>
                        {row.map((hoverState, colIndex) => (
                            <motion.span
                                key={`bar-item-${rowIndex}-${colIndex}`}
                                variants={variants}
                                animate={isHovered ? hoverState : "initial"}
                                transition={{ duration: 0.6, }}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <section
                style={{
                    opacity: opacity,
                    zIndex: zIndex,
                    transition: "all 1s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                id="navSectionMob"
            >
                <div className="navItems">
                    {navData.map((data) => {
                        const { navSec, section, key } = data;
                        return (
                            <a
                                key={key}
                                href={section}
                                onClick={(e) => handleClick(e, section)} // Add smooth scroll
                            >
                                {navSec}
                            </a>
                        );
                    })}
                </div>
            </section>
            <section id="navSection">
                <div className="navItems">
                    {navData.map((data) => {
                        const { navSec, section, key } = data;
                        return (
                            <a
                                key={key}
                                href={section}
                                onClick={(e) => handleClick(e, section)} // Add smooth scroll
                            >
                                {navSec}
                            </a>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Navbar;
