import { CSSProperties } from "react";

export default function FirstCard() {
  return (
    //   what we do
    <div className="section">
      <div className="slide">
        <div style={{ ...flexCenter, ...infoText }}>
          <p>
            <b>XV Production</b> is a creative studio that collaborates with
            fashion- and textile brands in a variety of projects.<br></br>
            <br></br> As a creative studio, we work with all phases of the
            production process - everything from the inception and initial idea,
            to the design and the finished products. Our strength lies in our
            ability to meet our customers wherever they might be their process.
          </p>
        </div>

        <div style={imgWrapper}></div>
      </div>

      <div className="slide">Slide 2{/* need some shit here  */}</div>
    </div>
  );
}

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

const infoText: CSSProperties = {
  maxWidth: "40%",
  margin: "auto",
  fontSize: "1.3rem",
};
