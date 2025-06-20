import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';

import { AOS_CONFIG } from './constants/animation';

import DebugPath from './components/DebugPath';
import MainNavigation from './components/MainNavigation/MainNavigation';
import ScrollToTop from './components/ScrollToTop';
import { ROUTES } from './constants/routes';

// Импортируем LocalizationProvider
import { LocalizationProvider } from './contexts/LocalizationContext';

import 'aos/dist/aos.css';
import './App.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

function App() {
  useEffect(() => {
    AOS.init(AOS_CONFIG);
    AOS.refresh();
  }, []);

  return (
    // Оборачиваем BrowserRouter в LocalizationProvider
    <LocalizationProvider>
      <BrowserRouter basename={basename}>
        <DebugPath />

        <ScrollToTop />

        <MainNavigation />

        <div className="content-wrapper">
          <Routes>
            {ROUTES.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;