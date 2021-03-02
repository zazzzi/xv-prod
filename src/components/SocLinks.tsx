import { CSSProperties } from 'react';
import fbLogo from '../assets/facebook.png';
import instaLogo from '../assets/instagram.png';
import '../index.css'

export default function SocLinks() {
  return (
    <div style={socLinksStyle}  >
      <a href="https://www.instagram.com/xv.production/">
        <img src={fbLogo} alt="facebook" className='bigOnHover'/>
      </a>
      <a href="https://www.facebook.com/xv.productioninhouse">
          <img src={instaLogo} alt="instagram" className='bigOnHover'/>
      </a>
    </div>
  );
}

const socLinksStyle: CSSProperties = {
    position: 'fixed',
    zIndex: 10,
    top: 32,
    left: '1rem',
    display: 'flex'

}
