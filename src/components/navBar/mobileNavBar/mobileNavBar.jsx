/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { bool, string, object } from 'prop-types';
import theme from './mobileNavBar.theme.module.scss';

function MobileNavBar({
  aboutUsRef,
  ourSolutionsRef,
  impactRef,
  countriesRef,
  clientsRef,
  contactRef,
}) {
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
        <MobileNavBarButton
          goTo={aboutUsRef}
          isMenuOpened={isOpen}
        >
          Nosotros
        </MobileNavBarButton>
        <MobileNavBarButton goTo={ourSolutionsRef} isMenuOpened={isOpen}>
          Soluciones
        </MobileNavBarButton>
        <MobileNavBarButton goTo={impactRef} isMenuOpened={isOpen}>
          Impacto
        </MobileNavBarButton>
        <MobileNavBarButton goTo={countriesRef} isMenuOpened={isOpen}>
          Países
        </MobileNavBarButton>
        <MobileNavBarButton goTo={clientsRef} isMenuOpened={isOpen}>
          Clientes
        </MobileNavBarButton>
        <MobileNavBarButton goTo={contactRef} isMenuOpened={isOpen}>
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

MobileNavBar.propTypes = {
  aboutUsRef: object.isRequired,
  ourSolutionsRef: object.isRequired,
  impactRef: object.isRequired,
  countriesRef: object.isRequired,
  clientsRef: object.isRequired,
  contactRef: object.isRequired,

};

function MobileNavBarButton({ children, isMenuOpened, goTo }) {
  return <button type="submit" onClick={() => { goTo.current?.scrollIntoView({ behavior: 'smooth' }); }} className={`${theme.mobileNavBarButton}  ${isMenuOpened ? `${theme.mobileNavBarButtonShown} ${theme.mobileNavBarButtonOpened}` : ''}`}>{children}</button>;
}

MobileNavBarButton.propTypes = {
  children: string.isRequired,

  isMenuOpened: bool.isRequired,
  goTo: object.isRequired,
};
