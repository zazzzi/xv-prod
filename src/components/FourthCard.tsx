import { CSSProperties } from "react";
import ThirdCard from "./ThirdCard";
import fabricSample from "../assets/pictures/samples-4.jpg";

export default function FirstCard() {
  return (
    <div className="section">
      <div style={flexCenter}>
        <p style={infoText}>
          XV PRODUCTION XV Production was born out of XV Atelier in 2018. The
          goal was to offer local design- and production services for other
          fashion- and textile brands. XV Production is a creative studio that
          wants to act freely and meet the customer exactly where they are in
          the production process. We believe in a circular textile industry that
          acts closely to the consumer. It is no secret that the fashion
          industry is polished on the surface, and that other much less
          glamorous sides exist. Through being a local actor that work
          exclusively with in-house production, we offer our customers a close
          and transparent relationship. Our customers are more than welcome to
          work collaboratively together with us in our 425 square meter studio
          in Borås. As a result, both the communication and work can be done in
          a rapid phase, and we are able to jointly develop ideas and/or
          prototypes.
        </p>
      </div>
      <div style={imgWrapper}></div>
    </div>
  );
}

const flexCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const infoText: CSSProperties = {
  maxWidth: "50%",
  zIndex: 2,
};

const imgWrapper: CSSProperties = {
  position: "absolute",
  top: "8%",
  right: "70%",
  height: "30%",
  width: "25%",
  backgroundColor: "white",
  zIndex: 1,
  backgroundImage: `url(${fabricSample})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};
