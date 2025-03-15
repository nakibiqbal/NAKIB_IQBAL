import { useContext } from "react";
import { CursorContext } from "./CursorProvider";

import "./BlurryCursor.css";

export default function BlurryCursor() {
  const { colors, blurr, circles, size } = useContext(CursorContext);

  return (
    <>
      {colors.map((color, i) => (
        <div
          key={i}
          ref={(el) => (circles.current[i] = el)}
          className="cursorCircle"
          style={{
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
            filter: `blur(${blurr}px)`,
          }}
        />
      ))}
    </>
  );
}
