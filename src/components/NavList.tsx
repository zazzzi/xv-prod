import React, { CSSProperties } from "react";

interface NavState {
  sectionIndex: number

}

class NavList extends React.Component<{}, NavState> {
  constructor(props: any) {
    super(props);
    this.state = {
      sectionIndex: 0
    };
  }
  componentDidMount() {
    // this.setState({ xv: true});
  }
  render() {
    const index = this.state.sectionIndex;
    if (index === 0) {
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
    } else {
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
