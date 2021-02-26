import React, { CSSProperties } from "react";
import background from "../assets/bg.png";

export default function BackgroundImage() {
  return <img src={background} style={backgroundStyle} alt="" />;
}

const backgroundStyle: CSSProperties = {
  position: "fixed",
  width: "100%",
  zIndex: -10,
  top: 0,
};
