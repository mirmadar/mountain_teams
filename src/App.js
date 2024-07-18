import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomeHeader from './components/Header/HomeHeader';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage/Homepage';

const App = () => {
  // useLocation() нельзя вызывать здесь

  return (
    <BrowserRouter>
      <div>
        <AppContent />
        <Footer /> 
      </div>
    </BrowserRouter>
  );
};

// Создаем отдельный компонент, который будет использовать useLocation()
const AppContent = () => {
  const location = useLocation();

  return (
    <>
   {location.pathname === '/' ? <HomeHeader /> : <Header />} 
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
