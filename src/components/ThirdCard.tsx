import React, { CSSProperties } from "react";
import PresentationDiv from "./PresentationDiv";
import "animate.css/animate.css";
import productionImage from "../assets/production.png";
import TitleComponent from "./TitleComponent";

import samples from "../assets/pictures/samples.jpg";
import samples2 from "../assets/pictures/samples2.jpg";
import samples3 from "../assets/pictures/samples3.jpg";
import samples4 from "../assets/pictures/samples4.jpg";
import samples5 from "../assets/pictures/samples5.jpg";
import samples6 from "../assets/pictures/samples6.jpg";

interface IProp {
  activePageSection: number;
  activePageSlide: number;
}

class ThirdCard extends React.Component<IProp> {
  render() {
    const { activePageSection, activePageSlide } = this.props;
    const animation = "animate__animated animate__fadeInUp";

    const animation2 =
      activePageSection === 2 && activePageSlide === 1 ? animation : "";

    const sampleMakingContent: string =
      "We gladly work close together with our customers to jointly develop products and samples. As a creative studio, we see solutions rather than limitations and problems. We have experience in product development in terms of function, design and remake development.";
    const stylingContent: string =
      "If you need advice with how to express your personality through clothing, we are happy to help. We have experience of styling for music videos, performances and wardrobe makeovers.";
    const mendingContent: string =
      "XV Production works with up:cycling and mending of clothes, both in terms of already worn textiles and modifications from a production where something went wrong.";
    const packagingContent: string =
      "We consult in graphic design and can help you put together your profile to present your product in the best possible way. Through our partners in Borås we locally make personal labels and hangtags in your desired design.";
    const prodDevContent: string =
      "We gladly work close together with our customers to jointly develop products and samples. As a creative studio, we see solutions rather than limitations and problems. We have experience in product development in terms of function, design and remake development.";
    const patternMaking: string =
      "From our studio we work with pattern making for the desired design based on a sketch, garment or measurement list. We also offer grading service.";

    return (
      //   projects
      <div className="section">
        <div className="slide">
          <div style={flexCenter}>
            <div style={wrapper}>
              <div style={imgFilter}></div>
              <div style={imgWrapper}></div>
              <div style={colorBox}></div>
              <p style={infoText}>
                From our studio in Kamgarn, Borås we work with everything from
                idea to production.
                <br></br>
                <br></br>
                Our industrial machines are suitable for a wide range of fabrics
                from silks and jersey to light-weight leather and velvet. Our
                studio is equipped with the following:
              </p>
            </div>
          </div>
          <div style={flexColumn}></div>
        </div>
        {/* second slide  */}
        <div className="slide">
          {/* services what we offer */}

          <div style={listWrapper} className={animation2}>
            {activePageSection === 2 && activePageSlide === 1 ? (
              <div>
                <TitleComponent smallTitle="services" title="we offer" />
                <PresentationDiv
                  content={sampleMakingContent}
                  title="Sample Making"
                  img={samples}
                />
                <PresentationDiv
                  content={stylingContent}
                  title="Styling"
                  img={samples6}
                />
                <PresentationDiv
                  content={mendingContent}
                  title="Mending"
                  img={samples2}
                />
                <PresentationDiv
                  content={packagingContent}
                  title="Packaging"
                  img={samples3}
                />
                <PresentationDiv
                  content={prodDevContent}
                  title="Production Development"
                  img={samples4}
                />
                <PresentationDiv
                  content={patternMaking}
                  title="Pattern making and grading"
                  img={samples5}
                />{" "}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdCard;

const wrapper: CSSProperties = {
  width: "60%",
  position: "absolute",
  top: "5vh",
  left: "5vw",
};

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const flexColumn: CSSProperties = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  display: "flex",
};

const infoText: CSSProperties = {
  position: "absolute",
  maxWidth: "20%",
  zIndex: 2,
  color: "white",
  marginLeft: "60rem",
  marginTop: "30rem",
};

const imgWrapper: CSSProperties = {
  position: "absolute",
  top: "6rem",
  left: "31rem",
  height: "40rem",
  width: "30rem",
  backgroundColor: "white",
  zIndex: -1,
  backgroundImage: `url(${samples})`,
  backgroundSize: "cover",
  backgroundPosition: "80% 30%",
};

const listWrapper: CSSProperties = {
  width: "50rem",
  margin: "auto",
};

const colorBox: CSSProperties = {
  position: "absolute",
  top: "28rem",
  left: "25rem",
  height: "20rem",
  width: "20rem",
  backgroundColor: "#757C79",
  zIndex: -2,
};

const imgFilter: CSSProperties = {
  position: "absolute",
  top: "6rem",
  left: "31rem",
  height: "40rem",
  width: "30rem",
  backgroundColor: "#E5E5E5",
  opacity: "20%",
  zIndex: 3,
};
