import {  NavLink } from 'react-router-dom';
import '../footer/footer.scss';
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-navar">
          <h2>audiophile</h2>

          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/earphones">Earphones</NavLink>
            <NavLink to="/headphones">Headphones</NavLink>
            <NavLink to="/speakers">Speakers</NavLink>
          </div>
        </div>
        <div className="footer-contain">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="icons-footer">
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-facebook.svg`}
                alt=""
              />
            </div>
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-twitter.svg`}
                alt=""
              />
            </div>
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-instagram.svg`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>Copyright 2021. All Rights Reserved</p>
          <div className="icons-footer-responsive">
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-facebook.svg`}
                alt=""
              />
            </div>
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-twitter.svg`}
                alt=""
              />
            </div>
            <div className="icons">
              <img
                src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-instagram.svg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
