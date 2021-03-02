import React, { CSSProperties } from "react";
import PresentationDiv from "./PresentationDiv";
import "animate.css/animate.css";
import productionImage from "../assets/production.png";
import lovisaSewing from "../assets/pictures/lovisaSewing-2.jpg";

class ThirdCard extends React.Component<{}> {
  // const whatToShow = "";
  // const [isShown, setIsShown] = useState(false);

  render() {
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
          <div style={imgWrapper}>
            {/* <img src={lovisaSewing} alt="" /> */}
          </div>
          <div style={flexCenter}>
            <p style={infoText}>
              TURD CARD <br />
              From our studio in Kamgarn, Borås we work with everything from
              idea to production. Our industrial machines are suitable for a
              wide range of fabrics from silks and jersey to light-weight
              leather and velvet. Our studio is equipped with the following:
            </p>
          </div>
          <div style={flexColumn}>
            <ul style={listStyling}>
              <li>Cutting machine</li>
              <li>Straight stitch</li>
              <li>Multithread Overlock</li>
              <li>Leather machine</li>
              <li>Seam covering machine</li>
              <li>Button sewing machine keyhole (blazer)</li>
              <li>Button sewing machine (shirts, blouses) </li>
              <li>Heat transfer machine​</li>
              <li>Press and steam</li>
            </ul>
            <img src={productionImage} alt="" style={productionImg} />
          </div>
        </div>
        {/* second slide  */}
        <div className="slide">
          <div style={listWrapper}>
            <PresentationDiv
              content={sampleMakingContent}
              title="Sample Making"
            />
            <PresentationDiv content={stylingContent} title="Styling" />
            <PresentationDiv content={mendingContent} title="Mending" />
            <PresentationDiv content={packagingContent} title="Packaging" />
            <PresentationDiv
              content={prodDevContent}
              title="Production Development"
            />
            <PresentationDiv
              content={patternMaking}
              title="Pattern making and grading"
            />
          </div>
        </div>

        <div>
          <h2>PARTNERS </h2>
        </div>
      </div>
    );
  }
}

export default ThirdCard;

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
  maxWidth: "30%",
};

const imgWrapper: CSSProperties = {
  position: "absolute",
  top: "40%",
  right: "60%",
  height: "30rem",
  width: "20rem",
  backgroundColor: "white",
  zIndex: -1,
  backgroundImage: `url(${lovisaSewing})`,
  backgroundSize: "cover",
};

const listWrapper: CSSProperties = {
  width: "50rem",
  margin: "auto",
};

const productionImg: CSSProperties = {
  marginTop: "2rem",
};

const listStyling: CSSProperties = {
  lineHeight: "1.5rem",
};
