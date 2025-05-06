import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";
import Footer from '@/Components/Footer';
import SplashScreen from '@/Pages/ErrorHomeSplash/SplashScreen';

import '@/SCSS/SharedStyles/Page.scss';
import '@/SCSS/SharedStyles/Header.scss';

// Navigation Styles Start
import '@/SCSS/NavigationStyles/Navigation.scss';
import '@/SCSS/NavigationStyles/SearchModal.scss';
// Navigation Styles End
import '@/SCSS/SharedStyles/Footer.scss';
import '@/SCSS/SharedStyles/Error.scss';
import '@/SCSS/SharedStyles/BackToTop.scss';
import '@/SCSS/SharedStyles/Notes.scss';
import '@/SCSS/PageStyles/SplashScreen.scss';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appContainer">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <div className="contentWrapper">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
