import React, { CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import BackgroundImage from "./BackgroundImage";
import { flex } from "../css";

export default function FirstCard() {
  return (
    //   what we do
    <div className="section">

      <div className="slide">
        <div style={{ ...flexCenter, ...infoText }}>
          <p>
            <b>XV Production</b> is a creative studio that collaborates with
            fashion- and textile brands in a variety of projects.<br></br>
            <br></br> As a creative studio, we work with all phases of the
            production process - everything from the inception and initial idea,
            to the design and the finished products. Our strength lies in our
            ability to meet our customers wherever they might be their process.
          </p>
        </div>
      </div>

      <div className="slide">Slide 2{/* need some shit here  */}</div>
    </div>
  );
}

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const infoText: CSSProperties = {
  maxWidth: "40%",
  margin: "auto",
  fontSize: "1.3rem",
};
