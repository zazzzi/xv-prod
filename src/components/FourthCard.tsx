import { CSSProperties } from 'react';
import fabricSample from '../assets/pictures/samples-4.jpg';
import studioViewSofa from '../assets/pictures/studioViewSofa.jpeg';

export default function FirstCard() {
  return (
    <div className="section">
      <div style={flexCenter}>
        <p style={infoText}>
          XV Production was born out of XV Atelier in 2018.
          <br></br>
          The goal was to offer local design- and production services for other
          fashion- and textile brands.
          <br></br>
          <br></br>
          XV Production is a creative studio that wants to act freely and meet
          the customer exactly where they are in the production process. We
          believe in a circular textile industry that acts closely to the
          consumer. It is no secret that the fashion industry is polished on the
          surface, and that other much less glamorous sides exist.
          <br></br>
          <br></br>
          Through being a local actor that work exclusively with in-house
          production, we offer our customers a close and transparent
          relationship. Our customers are more than welcome to work
          collaboratively together with us in our 425 square meter studio in
          Borås.
          <br></br>
          <br></br>
          As a result, both the communication and work can be done in a rapid
          phase, and we are able to jointly develop ideas and/or prototypes.
        </p>
      </div>
      <div style={imgFilter}></div>
      <div style={imgSmall}></div>
      <div style={imgBig}></div>
    </div>
  );
}

const flexCenter: CSSProperties = {
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
};

const infoText: CSSProperties = {
  maxWidth: '50rem',
  zIndex: 4,
  color: 'white',
  margin: '0 10rem',
};

const imgBig: CSSProperties = {
  position: 'absolute',
  top: '17%',
  right: '10%',
  height: '35rem',
  width: '25rem',
  backgroundColor: '#51534B',
};

const imgSmall: CSSProperties = {
  position: 'absolute',
  top: '45%',
  right: '25%',
  height: '25rem',
  width: '20rem',
  backgroundColor: 'white',
  zIndex: 2,
  backgroundImage: `url(${fabricSample})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const imgFilter: CSSProperties = {
  position: 'absolute',
  top: '45%',
  right: '25%',
  height: '25rem',
  width: '20rem',
  backgroundColor: '#E5E5E5',
  opacity: '20%',
  zIndex: 3,
};
