import { Component } from "react";
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
      <div className="presentationDiv">
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
        <img src={cross} draggable="false" alt="" />
      </div>
    );
  }
}
export default PresentationDiv;
