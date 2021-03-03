import { Component, CSSProperties } from "react";
import "animate.css/animate.css";

interface IProps {
  smallTitle: string;
  title: string;
}

class TitleComponent extends Component<
  { smallTitle: string; title: string },
  IProps
> {
  constructor(props: IProps) {
    super(props);
 
  }

  render() {
    const title: string = this.props.title;
    const smallTitle: string = this.props.smallTitle;
    return (
      <div style={titleWrapper}>
        <div style={smallTitleStyle}>
          <h4>{smallTitle}</h4>
        </div>

      <h1 style={titleStyle}>{title}</h1>
      </div>
      );
  }
}

const smallTitleStyle: CSSProperties = {
  display: "flex",
  height: "100%",
  width: "50rem",
  margin: "5rem 0 0 0",

  fontSize: "1rem",
  borderBottom: ".1rem solid"
}

const titleStyle: CSSProperties = {
  fontSize: "8rem",
  width: "50rem",
  marginTop: "0",
  borderBottom: ".1rem solid"
}

const titleWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 5rem"
}

export default TitleComponent;