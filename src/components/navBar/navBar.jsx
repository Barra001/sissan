import React, { useState, useEffect } from 'react';
import theme from './navBar.theme.module.scss';
import sissanImg from './sissan.webp';
import NavBarButton from './navBarButton/navBarButton';
import MobileNavBar from './mobileNavBar/mobileNavBar';

function NavBar() {
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
      <MobileNavBar />
      <nav className={theme.navBar} style={{ top: show ? '20px' : '-90px' }}>
        <NavBarButton>Nosotros</NavBarButton>
        <NavBarButton>Soluciones</NavBarButton>
        <NavBarButton>Impacto</NavBarButton>
        <img src={sissanImg} alt="Sissan logo" className={theme.sissanLogo} />
        <div className={theme.spacer} />
        <NavBarButton>Países</NavBarButton>
        <NavBarButton>Clientes</NavBarButton>
        <NavBarButton>Contacto</NavBarButton>
      </nav>
    </>
  );
}

export default NavBar;
