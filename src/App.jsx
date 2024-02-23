import React from 'react';
import '@fontsource/inter';
import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';
import '@fontsource/roboto';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import 'animate.css/animate.min.css';
import FrontPage from './components/frontPage/frontPage';
import AboutUs from './components/aboutUs/aboutUs';
import NavBar from './components/navBar/navBar';
import OurSolutions from './components/ourSolutions/ourSolutions';

function App() {
  return (
    <div>

      <NavBar />
      <FrontPage />
      <AboutUs />
      <OurSolutions />
    </div>
  );
}

export default App;
