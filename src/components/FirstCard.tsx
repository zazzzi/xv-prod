import React, { CSSProperties } from "react";
import BackgroundImage from "./BackgroundImage";



export default function FirstCard() {
  return (
    <div className="section">
      <BackgroundImage />
      <div style={flexCenter}></div>
    </div>
  );
}

const flexCenter: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };