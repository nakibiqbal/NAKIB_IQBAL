import { AiFillOpenAI } from "react-icons/ai";
import useCustomHook from "../../hooks/CustomHook/useCustomHook";

const PixelContent = () => {
  const { opacityS } = useCustomHook();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        textAlign: "center",
        pointerEvents: "none",
        overflow: "hidden",
      }}
      id={opacityS}
    >
      <iframe
        src="https://giphy.com/embed/npY8OaCJcdGvBw2GtM"
        style={{ border: "none", zIndex: 1 }}
        title="animation"
        className="iframe"
      ></iframe>
      <h1 className="name">$ NAKIB IQBAL JOARDER $</h1>
      <h1 className="name">FRONTEND REACT.JS</h1>
      <h1 className="developer">
        <AiFillOpenAI className="aiLeft" />
        DEVELOPER
        <AiFillOpenAI className="aiRight" />
      </h1>
      <h1 className="name">I&apos;M SO MUCH INTERESTED TO LEARN</h1>
      <h1 className="name">CREATIVE THING&apos;S</h1>
      <h1 className="name">___OCTOBER, 2024___</h1>
    </div>
  );
};

export default PixelContent;
