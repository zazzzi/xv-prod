import React, { CSSProperties } from "react";

interface NavState {
  xv: Boolean;
  whatWeOffer: Boolean;
  projects: Boolean;
  whoWeAre: Boolean;
}

class NavList extends React.Component<{}, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      xv: true,
      whatWeOffer: false,
      projects: false,
      whoWeAre: false,
    };
  }
  componentDidMount() {
    // this.setState({ xv: true});
  }
  render() {
    const xv = this.state.xv;
    const whatWeOffer = this.state.whatWeOffer;
    const projects = this.state.projects;
    const whoWeAre = this.state.whoWeAre;
    if (xv) {
      return (
        <div>
          <ul style={navListStyle}>
            <li style={navListItemStyle}>xv productions</li>
            <li style={navListItemStyle}>xv productions</li>
            <li style={navListItemStyle}>xv productions</li>
            <li style={navListItemStyle}>xv productions</li>

            {/* <li style={navListItemStyle}>what we offer</li>
              <li style={navListItemStyle}>projects</li>
              <li style={navListItemStyle}>who we are</li> */}
          </ul>
        </div>
      );
    } else if (whatWeOffer) {
      <div>
        <ul style={navListStyle}>
          <li style={navListItemStyle}>what we offer</li>
          <li style={navListItemStyle}>what we offer</li>
          <li style={navListItemStyle}>what we offer</li>
          <li style={navListItemStyle}>what we offer</li>
        </ul>
      </div>;
    }
  }
}
export default NavList;

const navListStyle: CSSProperties = {
  position: "absolute",
  top: 90,
  right: 60,
  zIndex: 30,
};

const navListItemStyle: CSSProperties = {
  marginTop: 10,
};
