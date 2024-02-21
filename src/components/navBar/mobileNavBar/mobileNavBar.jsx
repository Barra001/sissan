import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import theme from './mobileNavBar.theme.module.scss';

function MobileNavBar() {
  const [isOpen, setIsOpened] = useState(false);

  return (
    <>
      { isOpen ? (
        <div
          className={theme.background}
          onKeyDown={() => {
            setIsOpened(false);
          }}
          aria-label="Close menu"
          role="button"
          tabIndex="0"
          onClick={() => {
            setIsOpened(false);
          }}
        />
      ) : null}
      <div
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            if (isOpen) {
              setIsOpened(false);
              return;
            }
            setIsOpened(true);
          }
        }}
        role="button"
        tabIndex="0"
        className={`${theme.mainContainer}  ${isOpen ? theme.mainContainerOpened : ''}`}
        onClick={() => {
          if (isOpen) {
            setIsOpened(false);
            return;
          }
          setIsOpened(true);
        }}
      >
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Nosotros
        </MobileNavBarButton>
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Soluciones
        </MobileNavBarButton>
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Impacto
        </MobileNavBarButton>
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Países
        </MobileNavBarButton>
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Clientes
        </MobileNavBarButton>
        <MobileNavBarButton onClick={() => {}} isMenuOpened={isOpen}>
          Contacto
        </MobileNavBarButton>
        <span className={`material-symbols-outlined ${theme.menuIcon} ${isOpen ? theme.menuIconOpened : ''}`}>
          menu
        </span>

      </div>

    </>
  );
}

export default MobileNavBar;

function MobileNavBarButton({ children, onClick, isMenuOpened }) {
  return <button type="submit" onClick={onClick} className={`${theme.mobileNavBarButton}  ${isMenuOpened ? `${theme.mobileNavBarButtonShown} ${theme.mobileNavBarButtonOpened}` : ''}`}>{children}</button>;
}

MobileNavBarButton.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
  isMenuOpened: bool.isRequired,
};
