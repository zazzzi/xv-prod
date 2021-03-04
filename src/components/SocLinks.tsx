import { Component, CSSProperties } from "react";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import "../index.css";
import SocialMedia from "./SocialMedia";

interface IStates {
  fbIsHovered: boolean;
  instaIsHovered: boolean;
}
class SocLinks extends Component<{}, IStates> {
  constructor(state: IStates) {
    super(state);
    this.state = {
      fbIsHovered: false,
      instaIsHovered: false,
    };
  }

  isMouseOver() {}

  render() {
    return (
      <div style={socLinksStyle}>
        <div
          onMouseOver={() => {
            this.setState({ fbIsHovered: true });
          }}
          onMouseOut={() => {
            this.setState({ fbIsHovered: false });
          }}
        >
          <SocialMedia
            linkTo="https://www.facebook.com/xv.productioninhouse"
            logoFor={fbLogo}
            alt="facebook"
            style={this.state.fbIsHovered ? bigOnHover : undefined}
          />
        </div>
        <div
          onMouseOver={() => {
            this.setState({ instaIsHovered: true });
          }}
          onMouseOut={() => {
            this.setState({ instaIsHovered: false });
          }}
        >
          <SocialMedia
            linkTo="https://www.instagram.com/xv.production/"
            logoFor={instaLogo}
            alt="instagram"
            style={this.state.instaIsHovered ? bigOnHover : undefined}
          />
        </div>
      </div>
    );
  }
}

export default SocLinks;

const socLinksStyle: CSSProperties = {
  position: "fixed",
  zIndex: 10,
  top: 32,
  left: "1rem",
  display: "flex",
};

const bigOnHover: CSSProperties = {
  transform: "scale(1.1)",
};
