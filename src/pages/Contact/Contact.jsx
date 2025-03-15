import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Import the custom CSS file
import HeadingText from "../../HeadingText_DY/HeadingText";

const SCALE = 1.7; // max scale factor of an icon
const DISTANCE = 120; // pixels before mouse affects an icon
const NUDGE = 30 // pixels icons are moved away from mouse
const SPRING = {
    mass: 0.1,
    stiffness: 170,
    damping: 12,
};

const APPS = [
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
];

const allSecDetail = [
    {
        id: 1,
        h3: "Skills",
        click: "#section5",
        p: `Check out the things I'm good at, from building websites , dashboards and more.`
    },
    {
        id: 2,
        h3: "Service",
        click: "#section6",
        p: "Check out my services that I provide with precision."
    },
    {
        id: 3,
        h3: "Projects",
        click: ".image_reveal",
        p: "See some of my works to understand what I specialize in."
    },
    {
        id: 4,
        h3: "My Self",
        click: "#section4",
        p: "Know a little bit about me."
    }
]

function Contact() {
    const mouseLeft = useMotionValue(-Infinity);
    const mouseRight = useMotionValue(-Infinity);

    const handleClick = (e, id) => {
        e.preventDefault();  // Prevent the default anchor behavior
        const section = document.querySelector(id);
        section?.scrollIntoView({
            behavior: "smooth",  // Enable smooth scroll
            block: "start",      // Align to the top of the section
        });
    };

    return (
        <section id="ContactSection">

            <div className="contactWrapper">

                <div className="CLinks">

                    <HeadingText heading1="Lets" heading2="Connect" />
                    <motion.div
                        onMouseMove={(e) => {
                            const { left, right } = e.currentTarget.getBoundingClientRect();
                            const offsetLeft = e.clientX - left;
                            const offsetRight = right - e.clientX;
                            mouseLeft.set(offsetLeft);
                            mouseRight.set(offsetRight);
                        }}
                        onMouseLeave={() => {
                            mouseLeft.set(-Infinity);
                            mouseRight.set(-Infinity);
                        }}
                        className="dock-container"
                    >
                        {APPS.map((AppIconComponent, index) => (
                            <AppIcon key={index} mouseLeft={mouseLeft}>
                                <AppIconComponent size={26} />
                            </AppIcon>
                        ))}
                    </motion.div>
                    <div className="mail">
                        <a href="mailto:nakibiqbal.2006@gmail.com">nakibiqbal.2006@gmail.com</a>
                    </div>
                </div>

                <div className="sections">

                    {allSecDetail.map((content) => {
                        const { h3, p, id, click } = content;
                        return (
                            <a
                                className="wrapperLink"
                                href={click}
                                key={id}
                                onClick={(e) => handleClick(e, click)} // Attach the smooth scroll function
                            >
                                <div className="allSecDetail">
                                    <h3 >
                                        {[1, 2].map((span, i) => {
                                            return <span key={i}>{h3}</span>
                                        })}
                                    </h3>
                                    <p>{p}</p>
                                </div>
                            </a>
                        );
                    })}

                </div>

            </div>
            <div className="islamicQuote">
                <p><b>&ldquo;And whoever fears Allah – He will make for him a way out and provide for him from where he does not expect.&rdquo;</b></p>
                <i>[Surah Al-Mu&apos;min, 40:60]</i>
            </div>

            <div className="background"></div>
            <div className="background x2"></div>
            <div className="background mobile"></div>
            <div className="background mobile"></div>
            <div className="background mobile"></div>

        </section>
    );
}

function AppIcon({ mouseLeft, children }) {
    const ref = useRef(null);

    const distance = useTransform(() => {
        const bounds = ref.current
            ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
            : { x: 0, width: 0 };
        return mouseLeft.get() - bounds.x - bounds.width / 2;
    });

    const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
    const x = useTransform(() => {
        const d = distance.get();
        if (d === -Infinity) {
            return 0;
        } else if (d < -DISTANCE || d > DISTANCE) {
            return Math.sign(d) * -1 * NUDGE;
        } else {
            return (-d / DISTANCE) * NUDGE * scale.get();
        }
    });

    const scaleSpring = useSpring(scale, SPRING);
    const xSpring = useSpring(x, SPRING);
    const y = useMotionValue(0);

    return (
        <motion.button
            ref={ref}
            style={{ x: xSpring, scale: scaleSpring, y }}
            className="app-icon"
            onClick={() => {
                animate(y, [0, -40, 0], {
                    repeat: 2,
                    ease: [
                        [0, 0, 0.2, 1],
                        [0.8, 0, 1, 1],
                    ],
                    duration: 0.7,
                });
            }}
        >
            {children}
        </motion.button>
    );
}

export default Contact;
