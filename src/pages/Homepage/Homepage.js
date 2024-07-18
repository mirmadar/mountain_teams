import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <main class="homepage">
    <section class="hero">
    <div class="hero__content">
    <nav class="homepage__nav">
        <ul class="homepage__nav__list">
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">Главная</a></li>
            <li class="homepage__nav__item"><span class="slash">/</span></li>
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">О нас</a></li>
            <li class="homepage__nav__item"><span class="slash">/</span></li>
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">Фотоальбом</a></li>
        </ul>
    </nav>
    <h1 class="hero__title">Mountain teams </h1> 
    <nav class="homepage__nav">
        <ul class="homepage__nav__list">
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">Туры</a></li>
            <li class="homepage__nav__item"><span class="slash">/</span></li>
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">Отзывы</a></li>
            <li class="homepage__nav__item"><span class="slash">/</span></li>
            <li class="homepage__nav__item"><a href="#" class="homepage__nav__link">Контакты</a></li>
        </ul>
    </nav>
</div>
</section>
<div className="semi-transparent-block">
  <div className="text-content"> 
    <div className="main-text">
      <h2>Текст про Mountain teams.</h2>
      <h3>Чем мы занимаемся и чего от нас ждать.</h3>
      <h3>Еще немного инфы совсем немного</h3>
    </div>
    <p className="why-us">Почему именно мы?</p> 
  </div>
</div>
    </main>
  );
};

export default Homepage;
