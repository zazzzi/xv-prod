import { Component, CSSProperties } from 'react';
import shirtsOnHanger from '../assets/pictures/samples6.jpg';
import tShirts from '../assets/pictures/samples5.jpg';
import clothingOnHanger from '../assets/pictures/samples3.jpg';
import 'animate.css/animate.css';
import ContactCard from './ContactCard';
import TitleComponent from './TitleComponent';

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
              idea, to the design and the finished products. Our strength lies
              in our ability to meet our customers wherever they might be their
              process.
            </p>
          </div>
          <div style={imgWrapper}></div>
        </div>

        <div className="slide">
          <div style={{ ...flexCenter, ...flextColumn }}>

            {this.props.activePageSection === 1 &&
            this.props.activePageSlide === 1 ? (
              <div className='animate__animated animate__fadeInDown animate__faster 500ms'>
                <TitleComponent smallTitle="us at XV" title="contact" />
              </div>
            ) : null}

            {this.props.activePageSection === 1 &&
            this.props.activePageSlide === 1 ? (
              <div style={flexRow}>
                {}

                <div>
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
                </div>

                <div>
                  <div className='animate__animated animate__fadeInLeft animate__faster 500ms'>
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
                <div className='animate__animated animate__fadeInRight animate__faster 500ms'>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const flextColumn: CSSProperties = {
  flexDirection: 'column',
};
const flexRow: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};
const imgWrapper: CSSProperties = {
  position: 'absolute',
  top: '14%',
  left: '2%',
  height: '30%',
  width: '15%',
  backgroundColor: 'transparent',
  zIndex: -1,
  backgroundImage: `url(${clothingOnHanger}), url(${shirtsOnHanger}), url(${tShirts})`,
  backgroundSize: '30%, 30%, cover',
  backgroundPosition: '5% 90%, 95% 10%, right',
  backgroundRepeat: 'no-repeat',
};

const infoText: CSSProperties = {
  maxWidth: '40%',
  margin: 'auto',
  fontSize: '1.3rem',
};
