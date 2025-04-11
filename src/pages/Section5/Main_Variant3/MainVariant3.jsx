/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant3 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant5 key={7} text="BE&nbsp;YOU" />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Nothing&nbsp;stays"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant6 key={8} text1="Check" text2="!Check" text3="Check" text4="!Check" text5="Check" rangeOFscramble={[35, 50]} />,
        <Variants.Variant4 key={5} text="The&nbsp;Parallax" duration={0.45} />,
        <Variants.Variant7 key={9} mainText="Into&nbsp;the&nbsp;Void" rangeOFscramble={[33, 47]} animReset={1200} />,
        <Variants.Variant1 key={1} text="Alternatives..." />,
        <Variants.Variant4 key={6} text="See&nbsp;the&nbsp;unseen" duration={0.3} />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9]}
            fadingOut={2000}
            restart={5600}
            text="Don't&nbsp;fall&nbsp;into&nbsp;the&nbsp;loop"
            value={3}
            staggerValue={0.01}
        />,
        <Variants.Variant3 key={4} text="Shadow&nbsp;of&nbsp;Fade" />,
    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant3
