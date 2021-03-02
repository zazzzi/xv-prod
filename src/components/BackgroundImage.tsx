import { CSSProperties } from "react";
import background from "../assets/landing-page.png";
import logo from "../assets/xvproduction-logo.png";
import "animate.css/animate.css";

export default function BackgroundImage() {
  return (
    // tomma taggar är fragments skapar div
    <>
      <img
        src={logo}
        draggable="false"
        className="animate__animated animate__fadeInUp animate__delay-1s animate__slow 2s"
        style={logoStyle}
        alt=""
      />
      <img src={background} draggable="false" style={backgroundStyle} alt="" />
    </>
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

const logoStyle: CSSProperties = {
  position: "fixed",
  left: "25%",
  width: "50%",
  zIndex: 11,
};
