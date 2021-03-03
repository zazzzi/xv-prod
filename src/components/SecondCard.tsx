import React, { Component, CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import shirtsOnHanger from "../assets/pictures/samples-6.jpg";
import tShirts from "../assets/pictures/samples-5.jpg";
import clothingOnHanger from "../assets/pictures/samples-3.jpg";
import "animate.css/animate.css";
import FullpageWrapper from "./App";
import ContactCard from "./ContactCard";

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
          </div>

          <div
            style={imgWrapper}
            className={"animate__animated animate__fadeInTopLeft"}
          ></div>
        </div>

        <div className="slide">
          <h2 style={flexCenter}>Who we are</h2>
          <div style={{ ...flexCenter }}>
            <div>
              <ContactCard
                name="Evelina Ingvarsson"
                role="Art Director"
                email="evelina@xv-production.com"
              />
              <ContactCard
                name="Felicia Lundberg"
                role="Projectmanager"
                email="felicia@xv-production.com"
              />
            </div>
            <div>
              <ContactCard
                name="Linnéa Magnusdotter"
                role="Design och Styling"
                email="linnea@xv-production.com"
              />
              <ContactCard
                name="Lovisa Nolander"
                role="Pattern making"
                email="lovisa@xv-production.com"
              />
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

const infoText: CSSProperties = {
  maxWidth: "40%",
  margin: "auto",
  fontSize: "1.3rem",
};
