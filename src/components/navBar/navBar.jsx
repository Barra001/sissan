/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import theme from './navBar.theme.module.scss';
import sissanImg from './sissan.webp';
import NavBarButton from './navBarButton/navBarButton';
import MobileNavBar from './mobileNavBar/mobileNavBar';

function NavBar({
  aboutUsRef,
  ourSolutionsRef,
  impactRef,
  countriesRef,
  clientsRef,
  contactRef,
}) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (show && window.scrollY >= lastScrollY && window.scrollY > 500) {
      setShow(false);
    } else if (!show && (lastScrollY - window.scrollY > 5 || window.scrollY < 500)
    ) {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <MobileNavBar
        aboutUsRef={aboutUsRef}
        ourSolutionsRef={ourSolutionsRef}
        impactRef={impactRef}
        countriesRef={countriesRef}
        clientsRef={clientsRef}
        contactRef={contactRef}
      />
      <nav className={theme.navBar} style={{ top: show ? '20px' : '-90px' }}>
        <NavBarButton goTo={aboutUsRef}>Nosotros</NavBarButton>
        <NavBarButton goTo={ourSolutionsRef}>Soluciones</NavBarButton>
        <NavBarButton goTo={impactRef}>Impacto</NavBarButton>
        <img src={sissanImg} alt="Sissan logo" className={theme.sissanLogo} />
        <div className={theme.spacer} />
        <NavBarButton goTo={countriesRef}>Países</NavBarButton>
        <NavBarButton goTo={clientsRef}>Clientes</NavBarButton>
        <NavBarButton goTo={contactRef}>Contacto</NavBarButton>
      </nav>
    </>
  );
}

export default NavBar;

NavBar.propTypes = {
  aboutUsRef: object.isRequired,
  ourSolutionsRef: object.isRequired,
  impactRef: object.isRequired,
  countriesRef: object.isRequired,
  clientsRef: object.isRequired,
  contactRef: object.isRequired,
};
