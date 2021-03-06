import { Component, CSSProperties } from "react";
import "animate.css/animate.css";

interface IProps {
  smallTitle: string;
  title: string;
}

class TitleComponent extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const title: string = this.props.title;
    const smallTitle: string = this.props.smallTitle;
    return (
      <div style={titleWrapper}>
        <h4 style={smallTitleStyle}>{smallTitle}</h4>
        <h2 style={titleStyle}>{title}</h2>
      </div>
    );
  }
}

const smallTitleStyle: CSSProperties = {
  display: "flex",
  height: "100%",
  width: "50rem",
  paddingBottom: ".5rem",

  fontSize: "1rem",
  borderBottom: ".1rem solid",
};

const titleStyle: CSSProperties = {
  fontSize: "7rem",
  width: "50rem",
  marginTop: "0",
  // marginBottom: "5rem",
  borderBottom: ".1rem solid",
};

const titleWrapper: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "0 20rem",
};

export default TitleComponent;
