import React from 'react';
import { object } from 'prop-types';
import theme from './ourImpact.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import MySlider from './slider';

function OurImpact({ mainRef }) {
  return (
    <>
      <SideMargins>
        <div className={theme.mainContainer} ref={mainRef}>
          <SecctionTitle
            subtitle="Impacto"
            center
          >
            Nuestro
          </SecctionTitle>

        </div>
      </SideMargins>
      <MySlider />
    </>
  );
}

OurImpact.propTypes = {
  mainRef: object.isRequired,
};

export default OurImpact;
