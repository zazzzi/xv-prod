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
        <p>Hej, {props.name}</p>
      </div>
      <div className="section">
        <p>Section 2</p>
      </div>
    </ReactFullpage.Wrapper>
  );
}
