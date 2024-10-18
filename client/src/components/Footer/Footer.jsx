import React from 'react';
import style from './Footer.module.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.footerSection}>
          <div className={style.footerSecA}>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/user'>Profile</Link>
            <Link to='/favourite'>Favourite</Link>
            <Link to='/user'>Reviews</Link>
            <Link to='/about'>Help</Link>
          </div>
          <div className={style.footerSecA}>
            <Link to='/category/All'>All books</Link>
            <Link to='/category/Novel'>Novel</Link>
            <Link to='/category/Story'>Story</Link>
          </div>
          <div className={style.footerSecA}>
          </div>
          <div className={style.footerSecB}>
            <p>
              If you have any book details that are not available
              on our platform. you can inform us
            </p>
            <Link to='/sendInfo' >Click Here</Link>
          </div>
        </div>
        <div className={style.footerCopyright}>
          <div className={style.copyright}>
            <a rel="noreferrer">Priyadarsan</a>
            <p>Copyright reserved </p>
          </div>
          <div className={style.SocialFooter}>
            <a href='https://github.com/PRIYADHARSHAN14' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/priyadharshan-j-a779a7315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://www.instagram.com/priyxdhxrsxn._/profilecard/?igsh=NzdpZzlpdmg5Z2Vw' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
