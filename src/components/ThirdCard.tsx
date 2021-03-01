import React, { CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import BackgroundImage from "./BackgroundImage";
import { flex } from "../css";

export default function FirstCard() {
  return (
    <div className="section">
      <div style={flexCenter}>
        <p style={infoText}>
          TURD CARD <br />
          From our studio in Kamgarn, Borås we work with everything from idé to
          production. Our industrial machines are suitable for a wide range of
          fabrics from silks and jersey to light-weight leather and velvet.
        </p>
      </div>
    </div>
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
