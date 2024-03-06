import React from 'react';
import { object } from 'prop-types';
import theme from './frontPage.theme.module.scss';
import ContactButton from './contactButton/contactButton';
import video from './video.mp4';
import Ball from '../ball/ball';
import safariImage from './safariFrontImage.webp';

function FrontPage({ contactRef, mainRef }) {
  const isBrowserSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <>
      <div className={theme.blackBackgound} />
      <svg width="0" height="0">
        <defs>
          <clipPath id="smoothCurve" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.85 Q 0.5,1 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>
      {isBrowserSafari ? <img src={safariImage} alt="hero" className={theme.videoBackground} />
        : (
          <video autoPlay muted loop className={theme.videoBackground} preload="auto" playsInline>
            <source src={video} type="video/mp4" />
          </video>
        )}

      <Ball right="80px" bottom="-10px" />
      <section className={theme.column} ref={mainRef}>
        <h1 className={theme.title}>Soluciones en gestión de sangre</h1>
        <h4 className={theme.subTitle}>
          Software de gestión de bancos de sangre y medicina transfusional.
        </h4>
        <ContactButton goTo={contactRef}>Contacto</ContactButton>
      </section>
    </>

  );
}

FrontPage.propTypes = {
  contactRef: object.isRequired,
  mainRef: object.isRequired,
};

export default FrontPage;
