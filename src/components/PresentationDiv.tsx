import { Component, CSSProperties } from "react";
import cross from "../assets/cross.png";
import "animate.css/animate.css";

interface IState {
  isShown: boolean;
  isHover?: boolean;
}
interface IProps {
  content: string;
  title: string;
  img?: string;
}

class PresentationDiv extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isShown: false,
      isHover: false,
    };
  }

  render() {
    const content: string = this.props.content;
    const title: string = this.props.title;
    return (
      <div
        onClick={() => {
          if (this.state.isShown === false) {
            this.setState({ isShown: true });
          } else {
            this.setState({ isShown: false });
          }
        }}
        onMouseOver={() => {
          this.setState({ isHover: true });
        }}
        onMouseOut={() => {
          this.setState({ isHover: false });
        }}
      >
        <div style={contentWrapper}>
          {this.state.isHover && !this.state.isShown ? (
            <img src={this.props.img} style={hoverImg} alt="" />
          ) : null}

          <div style={serviceWrapper}>
            <div style={titleWrapper}>
              <h2>{title}</h2>

              {this.state.isShown && (
                <p
                  style={textStyle}
                  className="animate__animated animate__fadeIn "
                >
                  {content}
                </p>
              )}
            </div>
            <img src={cross} draggable="false" alt="" style={crossStyle} />
          </div>
        </div>
      </div>
    );
  }
}

const hoverImg: CSSProperties = {
  position: "absolute",
  width: "7rem",
  right: "7rem",
};

const titleWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const serviceWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",

  borderBottom: "solid .1rem ",
};

const contentWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const crossStyle: CSSProperties = {
  width: "2rem",
  height: "2rem",
  marginTop: "1rem",
};

const textStyle: CSSProperties = {
  marginTop: "-1rem",
  overflow: "hidden",
};

export default PresentationDiv;
