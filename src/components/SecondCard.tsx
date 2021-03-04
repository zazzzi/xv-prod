import { Component, CSSProperties } from "react";
import shirtsOnHanger from "../assets/pictures/samples6.jpg";
import tShirts from "../assets/pictures/samples5.jpg";
import clothingOnHanger from "../assets/pictures/samples3.jpg";
import "animate.css/animate.css";
import ContactCard from "./ContactCard";
import TitleComponent from "./TitleComponent";

interface IProps {
  activePageSection: number;
  activePageSlide: number;
}

class SecondCard extends Component<IProps> {
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
              idea, to the design and the finished products.
              <br></br> <br></br> Our strength lies in our ability to meet our
              customers wherever they might be their process.
            </p>
          </div>
          <div style={imgFilter}></div>
          <div style={imgWrapper}></div>
          <div style={colorBox}></div>
        </div>

        <div className="slide">
          <div style={{ ...flexCenter, ...flextColumn }}>
            {this.props.activePageSection === 1 &&
            this.props.activePageSlide === 1 ? (
              <div className="animate__animated animate__fadeIn">
                <TitleComponent smallTitle="us at XV" title="contact" />
              </div>
            ) : null}

            {this.props.activePageSection === 1 &&
            this.props.activePageSlide === 1 ? (
              <div style={flexRow}>
                <div>
                  <div className="animate__animated animate__fadeIn">
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
                </div>
                <div className="animate__animated animate__fadeIn">
                  <ContactCard
                    name="Linnéa Magnusdotter"
                    role="Design & Styling"
                    email="linnea@xv-production.com"
                  />
                  <ContactCard
                    name="Lovisa Nolander"
                    role="Pattern making"
                    email="lovisa@xv-production.com"
                  />
                </div>
              </div>
            ) : null}
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
const flextColumn: CSSProperties = {
  flexDirection: "column",
};
const flexRow: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

const imgWrapper: CSSProperties = {
  position: 'absolute',
  top: '30%',
  left: '10%',
  height: '30rem',
  width: '20rem',
  zIndex: -2,
  backgroundImage: `url(${clothingOnHanger})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const imgFilter: CSSProperties = {
  position: 'absolute',
  top: '30%',
  left: '10%',
  height: '30rem',
  width: '20rem',
  backgroundColor: '#ADACA2',
  zIndex: -1,
  opacity: '30%',
};

const colorBox: CSSProperties = {
  position: 'absolute',
  top: '40%',
  left: '15%',
  height: '25rem',
  width: '23rem',
  backgroundColor: '#494C50',
  zIndex: -3,
};

const infoText: CSSProperties = {
  maxWidth: '40rem',
  marginLeft: '30rem',
  marginBottom: '30rem',
  color: 'white',
