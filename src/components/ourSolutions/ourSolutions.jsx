import React from 'react';
import bancoDeSangreImage from './images/banco_de_sangre.png';
import medicinaTransfuncionalImage from './images/transfuncional.png';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import theme from './ourSolutions.theme.module.scss';
import Ball from '../ball/ball';
import Solution from './solution/solution';

function OurSolutions() {
  return (
    <SideMargins secondaryBackground>
      <Ball top={-80} left={100} relative />
      <div className={theme.mainContainer}>
        <SecctionTitle
          subtitle="Nuestras soluciones"
          center
        >
          Sissan
        </SecctionTitle>
        <div className={theme.lineContainer}>
          <div className={theme.line} />
        </div>
        <Solution
          imagePath={bancoDeSangreImage}
          title="Banco de Sangre"
          subtitle="Sissan BS"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          inverseAlignment
          imagePath={medicinaTransfuncionalImage}
          title="Medicina transfuncional"
          subtitle="Sissan UMT"
          extendedText="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
      </div>
    </SideMargins>
  );
}

export default OurSolutions;
