import React from 'react';
import PropTypes from 'prop-types';
import theme from './ourCountries.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import Ball from '../ball/ball';
import SecctionTitle from '../secctionTitle/secctionTitle';

function OurCountries({ mainRef }) {
  return (
    <SideMargins secondaryBackground>
      <Ball top="-70px" left="100px" relative />
      <SecctionTitle
        subtitle="Paises"
        center
      >
        Nuestros
      </SecctionTitle>
      <div className={theme.mainContainer} ref={mainRef} />

    </SideMargins>
  );
}

OurCountries.propTypes = {
  mainRef: PropTypes.object.isRequired,
};

export default OurCountries;
