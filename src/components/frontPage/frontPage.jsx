import React from 'react';
import theme from './frontPage.theme.module.scss';
import ContactButton from './contactButton/contactButton';
import video from './video.mp4';

function FrontPage() {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="smoothCurve" clipPathUnits="objectBoundingBox">

            <path d="M 0,0 L 1,0 L 1,0.85 Q 0.5,1 0,0.85 Z" />
          </clipPath>
        </defs>
      </svg>
      <video muted autoPlay loop className={theme.videoBackground}>
        <source src={video} type="video/mp4" />
      </video>
      <section className={theme.column}>
        <h1 className={theme.title}>Soluciones en gestión de sangre</h1>
        <h4 className={theme.subTitle}>
          Software de gestión de bancos de sangre y medicina transfusional.
        </h4>
        <ContactButton>Contacto</ContactButton>
      </section>
    </>

  );
}

export default FrontPage;