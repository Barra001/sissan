import React from 'react';
import theme from './navBar.theme.module.scss';
import sissanImg from './sissan.webp';
import NavBarButton from './navBarButton/navBarButton';

function NavBar() {
  return (
    <nav className={theme.navBar}>
      <NavBarButton>Nosotros</NavBarButton>
      <NavBarButton>Soluciones</NavBarButton>
      <NavBarButton>Impacto</NavBarButton>
      <img src={sissanImg} alt="Sissan logo" className={theme.sissanLogo} />
      <div className={theme.spacer} />
      <NavBarButton>Países</NavBarButton>
      <NavBarButton>Clientes</NavBarButton>
      <NavBarButton>Contacto</NavBarButton>
    </nav>
  );
}

export default NavBar;
