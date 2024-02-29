import React, { useRef } from 'react';
import '@fontsource/inter';
import '@fontsource/inter/100.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
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
import OurCountries from './components/ourCountries/ourCountries';
import Contact from './components/contact/contact';
import OutImpact from './components/ourImpact/ourImpact';

function App() {
  const aboutUsRef = useRef(null);
  const ourSolutionsRef = useRef(null);
  const impactRef = useRef(null);
  const countriesRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>

      <NavBar
        aboutUsRef={aboutUsRef}
        ourSolutionsRef={ourSolutionsRef}
        impactRef={impactRef}
        countriesRef={countriesRef}
        clientsRef={clientsRef}
        contactRef={contactRef}
      />
      <FrontPage />
      <AboutUs mainRef={aboutUsRef} />
      <OurSolutions mainRef={ourSolutionsRef} />
      <OutImpact mainRef={impactRef} />
      <OurCountries mainRef={countriesRef} />
      <Contact mainRef={contactRef} />
    </div>
  );
}

export default App;
