import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} My Site. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
