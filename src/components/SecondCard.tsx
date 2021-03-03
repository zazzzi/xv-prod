import { Component, CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

interface IState {
  isOnScreen: boolean;
}

class SecondCard extends Component<{fullpageApi?: any}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOnScreen: false,
    };
  }
  
  render() {
    console.log(this.props.fullpageApi);
    
    // function checkIfOnScreen() {

    // }
    return (
      //   what we do
      <div className="section" id="sectionTwo">
        <div className="slide">
          <div style={{ ...flexCenter, ...infoText }}>
            <p>
              <b>XV Production</b> is a creative studio that collaborates with
              fashion- and textile brands in a variety of projects.<br></br>
              <br></br> As a creative studio, we work with all phases of the
              production process - everything from the inception and initial
              idea, to the design and the finished products. Our strength lies
              in our ability to meet our customers wherever they might be their
              process.
            </p>
          </div>

          <div style={imgWrapper}></div>
        </div>

        <div className="slide">
          <h2 style={flexCenter}>Who we are</h2>
          <div style={{ ...flexCenter }}>
            <div style={{ ...flexCenter, ...flexColumn }}>
              <div
                style={cardStyling}
                className="animate__animated animate__bounce"
              >
                <h4>Evelina Ingvarsson</h4>
                <p>
                  <i>Art Director</i>
                </p>
                <a href="mailto:evelina@xv-production.com">
                  evelina@xv-production.com
                </a>
              </div>
              <div style={cardStyling}>
                <h4>Felicia Lundberg </h4>
                <p>
                  <i>Projectmanager</i>
                </p>
                <a href="mailto:felicia@xv-production.com">
                  felicia@xv-production.com
                </a>
              </div>
            </div>
            <div style={{ ...flexCenter, ...flexColumn }}>
              <div style={cardStyling}>
                <h4>Linnéa Magnusdotter</h4>
                <p>
                  <i>Design och Styling</i>
                </p>
                <a href="mailto: linnea@xv-production.com">
                  linnea@xv-production.com
                </a>
              </div>
              <div style={cardStyling}>
                <h4>Lovisa Nolander</h4>
                <p>
                  <i>Pattern making</i>
                </p>
                <a href="mailto:lovisa@xv-production.com ">
                  lovisa@xv-production.com{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondCard;

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const flexColumn: CSSProperties = {
  flexDirection: "column",
};

const imgWrapper: CSSProperties = {
  position: "absolute",
  top: "25%",
  left: "7%",
  height: "30rem",
  width: "20rem",
  backgroundColor: "white",
  zIndex: -1,
};

const cardStyling: CSSProperties = {
  margin: "1rem",
  border: "2px solid",
  borderRadius: "15px",
  borderColor: "grey",
  padding: "1rem",
};
const infoText: CSSProperties = {
  maxWidth: "40%",
  margin: "auto",
  fontSize: "1.3rem",
};
