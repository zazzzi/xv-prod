import React, { CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import BackgroundImage from "./BackgroundImage";
import { flex } from "../css";



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