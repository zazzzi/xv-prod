import { Component, CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import shirtsOnHanger from "../assets/pictures/samples-6.jpg";
import tShirts from "../assets/pictures/samples-5.jpg";
import clothingOnHanger from "../assets/pictures/samples-3.jpg";
import "animate.css/animate.css";
import FullpageWrapper from "./App";

interface IState {
  isOnScreen: boolean;
}

class SecondCard extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOnScreen: false,
    };
  }

  render() {
    return (
      //   what we do
      <div className="section">
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
            <div
              id="animationDiv"
              style={imgWrapper}
              className={"animate__animated animate__fadeInTopLeft"}
            ></div>
          </div>
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
                  <i>Design & Styling</i>
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
  top: "14%",
  left: "2%",
  height: "30%",
  width: "15%",
  backgroundColor: "transparent",
  zIndex: -1,
  backgroundImage: `url(${clothingOnHanger}), url(${shirtsOnHanger}), url(${tShirts})`,
  backgroundSize: "30%, 30%, cover",
  backgroundPosition: "5% 90%, 95% 10%, right",
  backgroundRepeat: "no-repeat",
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
