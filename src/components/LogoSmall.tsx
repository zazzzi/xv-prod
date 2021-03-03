import { Component, CSSProperties } from "react";
import logoSmall from "../assets/logo_small.png";
import "../index.css";

interface IState {
  isHovered: boolean;
}

class LogoSmall extends Component<{}, IState> {
  constructor(state: IState) {
    super(state);
    this.state = {
      isHovered: false,
    };
  }
  render() {
    return (
      <div style={logoStyle}>
        <a href="#xv-production">
          <img
            onMouseOver={() => {
              this.setState({ isHovered: true });
            }}
            onMouseOut={() => {
              this.setState({ isHovered: false });
            }}
            src={logoSmall}
            alt="XV-Logo"
            style={this.state.isHovered ? bigOnHover : normal}
          />
        </a>
      </div>
    );
  }
}

const logoStyle: CSSProperties = {
  position: "absolute",
  right: 25,
  top: 40,
  zIndex: 20,
 
};

const bigOnHover: CSSProperties = {
    width: "5.4rem",
    height: "1.4rem",
};
const normal: CSSProperties = {
   width: "5rem",
  height: "1.3rem",
};

export default LogoSmall;
