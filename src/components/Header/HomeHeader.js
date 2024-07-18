import React from 'react';
import './HomeHeader.css';
import telega from '../../assets/telega.png'; 
import vk from '../../assets/vk.png';
import insta from '../../assets/insta.png';
import logo from '../../assets/logo_renderr.png'

const Header = () => {
    return (
      <header className="homeheader">
        <div className="homeheader__container">
          <a href="/" className="homeheader__logo">
            <img src={logo}/>
          </a>

          <div className="homeheader__icons"> 
            <a href="https://vk.com/mirmad" className="homeheader__icon">
              <img src={telega} alt="telega" />
            </a>
            <a href="https://vk.com/mirmad" className="homeheader__icon">
              <img src={vk} alt="vk" />
            </a>
            <a href="https://vk.com/mirmad" className="homeheader__icon">
              <img src={insta} alt="insta" />
            </a>
          </div>
        </div>
      </header>
    );
  };
  


export default Header;