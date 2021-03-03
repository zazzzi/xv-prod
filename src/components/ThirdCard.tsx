import React, { CSSProperties } from 'react';
import PresentationDiv from './PresentationDiv';
import 'animate.css/animate.css';
import productionImage from '../assets/production.png';
import lovisaSewing from '../assets/pictures/lovisaSewing-2.jpg';
import TitleComponent from './TitleComponent';

import tShirts from '../assets/pictures/samples-5.jpg';

interface IProp {
  activePageSection: number;
  activePageSlide: number;
}

class ThirdCard extends React.Component<IProp> {
  render() {
    const { activePageSection, activePageSlide } = this.props;
    const animation = 'animate__animated animate__slideInLeft';
    const animation2 =
      activePageSection === 2 && activePageSlide === 1 ? animation : '';

    const sampleMakingContent: string =
      'We gladly work close together with our customers to jointly develop products and samples. As a creative studio, we see solutions rather than limitations and problems. We have experience in product development in terms of function, design and remake development.';
    const stylingContent: string =
      'If you need advice with how to express your personality through clothing, we are happy to help. We have experience of styling for music videos, performances and wardrobe makeovers.';
    const mendingContent: string =
      'XV Production works with up:cycling and mending of clothes, both in terms of already worn textiles and modifications from a production where something went wrong.';
    const packagingContent: string =
      'We consult in graphic design and can help you put together your profile to present your product in the best possible way. Through our partners in Borås we locally make personal labels and hangtags in your desired design.';
    const prodDevContent: string =
      'We gladly work close together with our customers to jointly develop products and samples. As a creative studio, we see solutions rather than limitations and problems. We have experience in product development in terms of function, design and remake development.';
    const patternMaking: string =
      'From our studio we work with pattern making for the desired design based on a sketch, garment or measurement list. We also offer grading service.';

    return (
      //   projects
      <div className="section">
        <div className="slide">
          <div style={flexCenter}>
            <div style={imgWrapper}></div>
            <p style={infoText}>
              TURD CARD <br />
              From our studio in Kamgarn, Borås we work with everything from
              idea to production. Our industrial machines are suitable for a
              wide range of fabrics from silks and jersey to light-weight
              leather and velvet. Our studio is equipped with the following:
            </p>
          </div>
          <div style={flexColumn}>
            <img src={productionImage} alt="" style={productionImg} />
          </div>
        </div>
        {/* second slide  */}
        <div className="slide">
          {/* services what we offer */}

          <div style={listWrapper} className={animation2}>
            {activePageSection === 2 && activePageSlide === 1 ? (
              <div>
                <TitleComponent smallTitle="services" title="What we do" />
                <PresentationDiv
                  content={sampleMakingContent}
                  title="Sample Making"
                  img={tShirts}
                />
                <PresentationDiv
                  content={stylingContent}
                  title="Styling"
                  img={lovisaSewing}
                />
                <PresentationDiv
                  content={mendingContent}
                  title="Mending"
                  img={tShirts}
                />
                <PresentationDiv
                  content={packagingContent}
                  title="Packaging"
                  img={tShirts}
                />
                <PresentationDiv
                  content={prodDevContent}
                  title="Production Development"
                  img={tShirts}
                />
                <PresentationDiv
                  content={patternMaking}
                  title="Pattern making and grading"
                  img={tShirts}
                />{' '}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdCard;

const flexCenter: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const flexColumn: CSSProperties = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  display: 'flex',
};

const infoText: CSSProperties = {
  maxWidth: '30%',
  zIndex: 2,
};

const imgWrapper: CSSProperties = {
  position: 'absolute',
  top: '10%',
  right: '55%',
  height: '70%',
  width: '10%',
  backgroundColor: 'white',
  zIndex: 1,
  backgroundImage: `url(${lovisaSewing})`,
  backgroundSize: 'cover',
  backgroundPosition: '80% 30%',
};

const listWrapper: CSSProperties = {
  width: '50rem',
  margin: 'auto',
};

const productionImg: CSSProperties = {
  marginTop: '2rem',
};
