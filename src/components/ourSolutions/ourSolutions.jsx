import React from 'react';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import theme from './ourSolutions.theme.module.scss';
import Ball from '../ball/ball';

function OurSolutions() {
  return (
    <SideMargins secondaryBackground>
      <div className={theme.mainContainer}>
        <Ball top={20} left={20} size={200} zindex={10} relative />
        <SecctionTitle
          subtitle="Nuestras soluciones"
          center
        >
          Sissan
        </SecctionTitle>
      </div>
    </SideMargins>
  );
}

export default OurSolutions;
