import React from 'react';
import PropTypes from 'prop-types';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from './contact.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import SingleContact from './singleContact/singleContact';
import peruFlag from './assets/flags/PE.svg';
import paraguayFlag from './assets/flags/PY.svg';
import uruguayFlag from './assets/flags/UY.svg';
import linkedin from './assets/icons/linkedin.svg';
import facebook from './assets/icons/facebook.svg';
import whatsapp from './assets/icons/whatsapp.svg';
import Ball from '../ball/ball';

function Contact({ mainRef }) {
  return (
    <>
      <SideMargins>
        <div className={theme.mainContainer} ref={mainRef}>
          <Ball top="-55px" right="15%" />
          <SecctionTitle
            subtitle="Información de contacto"
            center
          >
            ¿Queres contactarnos?
          </SecctionTitle>

          <div className={theme.responsiveRow}>
            <SingleContact country="Paraguay" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={paraguayFlag} />
            <SingleContact country="Uruguay" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={uruguayFlag} />
            <SingleContact country="Perú" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={peruFlag} />
          </div>
          <AnimationOnScroll
            animateIn="animate__slideInUp"
            duration={1}
          >
            <div className={theme.row}>
              <a href="https://www.facebook.com/SoftwareSissan/?locale=es_LA" className={theme.socialIcon}>
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/company/data-process-srl/about/" className={theme.socialIcon}>
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="https://wa.me/+598091063493" className={theme.socialIcon}>
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </AnimationOnScroll>

        </div>
      </SideMargins>
      <footer>
        <p>
          © Copyright 2024 Sissan. All rights reserved. Made By
          {' '}
          <a href="https://www.linkedin.com/in/manuel-barrabino-8234461b7/">Manuel Barrabino</a>
        </p>

      </footer>
    </>
  );
}

Contact.propTypes = {
  mainRef: PropTypes.object.isRequired,
};

export default Contact;
