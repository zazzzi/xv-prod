import { Component, CSSProperties } from "react";
import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import "../index.css";

interface IStates {
  isHovered: boolean;
}
class SocLinks extends Component<{}, IStates> {
  constructor(state: IStates) {
    super(state);
    this.state = {
      isHovered: false,
    };
  }

  render() {
    return (
      <div style={socLinksStyle} 
      onMouseOver={() => {
        this.setState({ isHovered: true });
      }}
      onMouseOut={() => {
        this.setState({ isHovered: false });
      }}
      >
        {this.state.isHovered ? (
          <div style={bigOnHover}>
            <a
              href="https://www.facebook.com/xv.productioninhouse"
              target="_blank"
            >
              <img src={fbLogo} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/xv.production/" target="_blank">
              <img src={instaLogo} alt="instagram" />
            </a>
          </div>
        ) : (
          <div>
            <a
              href="https://www.facebook.com/xv.productioninhouse"
              target="_blank"
            >
              <img src={fbLogo} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/xv.production/" target="_blank">
              <img src={instaLogo} alt="instagram" />
            </a>
          </div>
        )}
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
