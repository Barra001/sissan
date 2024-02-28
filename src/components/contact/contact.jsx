import React from 'react';
import PropTypes from 'prop-types';
import theme from './contact.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import SingleContact from './singleContact/singleContact';
import peruFlag from './flags/PE.svg';
import paraguayFlag from './flags/PY.svg';
import uruguayFlag from './flags/UY.svg';

function Contact({ mainRef }) {
  return (
    <>
      <SideMargins>
        <div className={theme.mainContainer} ref={mainRef}>
          <SecctionTitle
            subtitle="Información de contacto"
            center
          >
            ¿Queres contactarnos?
          </SecctionTitle>

          <div className={theme.row}>
            <SingleContact country="Paraguay" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={paraguayFlag} />
            <SingleContact country="Uruguay" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={uruguayFlag} />
            <SingleContact country="Perú" address="2068 Boulevard Henri-Bourassa Est" email="sybexdesigns@gmail.com" phone="+447473997191" flag={peruFlag} />
          </div>

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
