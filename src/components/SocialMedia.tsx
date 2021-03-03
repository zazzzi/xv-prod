import { Component, CSSProperties } from "react";

interface IProps {
  linkTo: string;
  logoFor: string;
  alt: string;
  style: undefined | CSSProperties;
}

class SocialMedia extends Component<IProps> {
  render() {
    return (
      <div>
        <a href={this.props.linkTo} target="_blank" >
          <img src={this.props.logoFor} alt={this.props.alt} style={this.props.style} />
        </a>
      </div>
    );
  }
}
export default SocialMedia;