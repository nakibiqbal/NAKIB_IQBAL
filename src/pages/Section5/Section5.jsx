import "./Section5.css";
import Variant1 from "./Text_Variant1/Variant1";
import Variant2 from "./Text_Variant2/Variant2";
import Variant3 from "./Text_Variant3/Variant3";

const Section5 = () => {
    return (
        <section id="section5">
            <div className="sec5Wrapper">
                <Variant1 />
                <Variant2
                    delaying={[0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2]}
                    fadingOut={1700}
                    restart={3700}
                    text="Good&nbsp;People"
                    value={2}
                    staggerValue={0.05}
                />
                <Variant2
                    delaying={[0.5, 0.9, 1.3, 1.7, 2.1]}
                    className={"variant2_v2"}
                    className2={"forText2_v2"}
                    fadingOut={2500}
                    restart={5500}
                    text="Memories"
                    value={3}
                    staggerValue={0.04}
                />
                <Variant3 />
            </div>
        </section>
    );
};

export default Section5;