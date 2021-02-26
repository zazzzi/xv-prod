import React, { CSSProperties } from "react";
import { flex } from "../css";
import ReactFullpage from "@fullpage/react-fullpage";
import fullpageApi from "@fullpage/react-fullpage";
import BackgroundImage from "./BackgroundImage";

export default function PageElement(props: any, state: any) {
  return (
    <ReactFullpage.Wrapper>
      <div className="section">
        <BackgroundImage />
        <div style={flexCenter}></div>
      </div>
      <div className="section">
        <div style={flexCenter}>
          <p style={infoText}>
            <b>XV Production</b> is a creative studio that collaborates with
            fashion- and textile brands in a variety of projects.<br></br>
            <br></br> As a creative studio, we work with all phases of the
            production process - everything from the inception and initial idea,
            to the design and the finished products. Our strength lies in our
            ability to meet our customers wherever they might be their process.
          </p>
        </div>
      </div>
    </ReactFullpage.Wrapper>
  );
}

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const infoText: CSSProperties = {
  maxWidth: "50%",
};

const logoText: CSSProperties = {
  zIndex: 10,
};
