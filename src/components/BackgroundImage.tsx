import React, { CSSProperties } from "react";
import background from "../assets/bg.png";

export default function BackgroundImage() {
  return (
    <img src={background} draggable="false" style={backgroundStyle} alt="" />
  );
}

const backgroundStyle: CSSProperties = {
  position: "fixed",
  width: "100%",
  height: "100vh",
  objectFit: "cover",
  zIndex: 10,
  top: 0,
};
