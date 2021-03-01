import React, { CSSProperties } from "react";
import logoSmall from "../assets/logo_small.png";


export default function LogoSmall() {
    return (
        <a href="">
            <img src={logoSmall} alt="XV-Logo" style={logoStyle}/>
        </a>
    )
}

const logoStyle: CSSProperties = {
    position: "absolute",
    right: 25,
    top: 40, 
    zIndex: 20,
}