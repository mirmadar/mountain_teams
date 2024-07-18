import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          My Logo
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="/" className="header__link">Главная</a>
            </li>
            <li className="header__item">
              <a href="/about" className="header__link">О нас</a>
            </li>
            <li className="header__item">
              <a href="/contacts" className="header__link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;