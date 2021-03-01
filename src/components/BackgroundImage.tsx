import React, { CSSProperties } from "react";
import background from "../assets/landing-page.png";
import logo from "../assets/xvproduction-logo.png";
import { flex } from "../css";
import { CSSTransition } from 'react-transition-group';

export default function BackgroundImage() {  
  return (
    // tomma taggar är fragments skapar div
    <>
    <div className="animate__animated animate__fadeInUp">
      <img src={logo} draggable="false" style={logoStyle} alt=""/>
    </div>
    
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
  position: "absolute",
  top: "25%",
  left: "25%",
  // right: 0,
  // bottom: 0,
  width: "50%",
  zIndex: 11

};