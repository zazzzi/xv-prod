import { Component } from "react";

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
      <div>
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
      </div>
    );
  }
}
export default PresentationDiv;
