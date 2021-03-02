import { Component, CSSProperties } from "react";
import cross from "../assets/cross.png";

interface IState {
  isShown: boolean;
}
interface IProps {
  content: string;
  title: string;
}

class PresentationDiv extends Component<
  { content: string; title: string },
  IState,
  IProps
> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  render() {
    const content: string = this.props.content;
    const title: string = this.props.title;
    return (
      <div style={contentWrapper}>
      <div style={serviceWrapper}>
        <div
          onClick={() => {
            if (this.state.isShown === false) {
              this.setState({ isShown: true });
            } else {
                this.setState({ isShown: false});
            }
          }}
        >
          <h2>{title}</h2>

          {this.state.isShown && <p>{content}</p>}
        </div>
        <img src={cross} draggable="false" alt="" style={crossStyle}/>
      </div>
      </div>
    );
  }
}


const serviceWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "50rem"
}

const contentWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

const crossStyle: CSSProperties = {
  width: "3rem",
  height: "3rem"
}


export default PresentationDiv;
