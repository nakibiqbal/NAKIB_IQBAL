import "./App.css";
import Navbar from "./Navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import PixelSection from "./pages/PixelSection/PixelSection";
import Section1 from "./pages/Section1/Section1";
import Section2 from "./pages/Section2/Section2";
import Section3 from "./pages/Section3/Section3";
import Section4 from "./pages/Section4/Section4";
import Section5 from "./pages/Section5/Section5";
import Section6 from "./pages/Section6/Section6";
import useLenis from "./useLenis";
import { motion } from "framer-motion";

function App() {
  useLenis();

  return (
    <>
      <main>
        <div className="openToWork">
          <motion.span
            initial={{ boxShadow: "0 0 0 0px rgba(255, 255, 0, 0.330)" }}
            animate={{ boxShadow: "0 0 0 8px rgba(255, 255, 0, 0.330)" }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          ></motion.span>
          <p>OPEN TO WORK</p>
        </div>
        <Navbar />
        <PixelSection />
        <Section5 />
        <Section6 />
        <Section3 />
        <Section2 />
        <Section4 />
        <Section1 />
        <Contact />
      </main>
    </>
  );
}
export default App;