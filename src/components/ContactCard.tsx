import { Component, CSSProperties } from "react";

interface IState {
  beenClicked: boolean;
}

interface IProps {
  name: string;
  role: string;
  email: string;
}

class ContactCard extends Component<
  { name: string; role: string; email: string },
  IState,
  IProps
> {
  constructor(props: any) {
    super(props);
    this.state = {
      beenClicked: false,
    };
  }
  render() {
    return (
      <div>
        <div style={cardStyling} className="animate__animated animate__bounce">
          <h4>{this.props.name}</h4>
          <p>
            <i>{this.props.role}</i>
          </p>
          <a href="mailto:">{this.props.email}</a>
        </div>
      </div>
    );
  }
}
export default ContactCard;


const cardStyling: CSSProperties = {
    margin: "1rem",
    border: "2px solid",
    borderRadius: "15px",
    borderColor: "grey",
    padding: "1rem",
  };
