import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AOS from 'aos'; 

import { AOS_CONFIG } from './constants/animation';

import DebugPathProvider from './components/DebugPathProvider'; 
import MainNavigation from './components/MainNavigation';

import { ROUTES } from './constants/routes';

import 'aos/dist/aos.css'; 
import './App.css';

const basename = import.meta.env.VITE_APP_BASENAME || '/';

function App() {
  useEffect(() => {
    AOS.init(AOS_CONFIG);
    AOS.refresh();
  }, []);
  
  return (
    <BrowserRouter basename={basename}>
      <DebugPathProvider /> 
      
      <MainNavigation />
      
      <div className="content-wrapper">
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;