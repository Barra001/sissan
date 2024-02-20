import React from 'react';
import '@fontsource/inter';
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import FrontPage from './components/frontPage/frontPage';
import AboutUs from './components/aboutUs/aboutUs';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div>
      <NavBar />
      <FrontPage />
      <AboutUs />
    </div>
  );
}

export default App;
