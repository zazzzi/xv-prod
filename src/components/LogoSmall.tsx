import { CSSProperties } from "react";
import logoSmall from "../assets/logo_small.png";
import '../index.css'


export default function LogoSmall() {
    return (
        <a href="#xv-production">
            <img src={logoSmall} alt="XV-Logo" style={logoStyle} className='bigOnHover'/>
        </a>
    )
}

const logoStyle: CSSProperties = {
    position: "absolute",
    right: 25,
    top: 40, 
    zIndex: 20,
    width: "5rem",
    height: "1.45rem"
}