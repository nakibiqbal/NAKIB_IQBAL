import "./Section5.css";
import Variant1 from "./Text_Variant1/Variant1";
import Variant2 from "./Text_Variant2/Variant2";

const Section5 = () => {
    return (
        <section id="section5">
            <div className="sec5Wrapper">
                <Variant1 />
                <Variant2 />
            </div>
        </section>
    );
};

export default Section5;