import React from 'react';
import { object } from 'prop-types';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import theme from './ourClients.theme.module.scss';
import MySlider from './slider';

function OurClients({ mainRef }) {
  return (
    <>
      <SideMargins>
        <div className={theme.mainContainer} ref={mainRef}>

          <SecctionTitle
            subtitle="Clientes"
          >
            Conoce a nuestros
          </SecctionTitle>

        </div>
      </SideMargins>
      <MySlider />
    </>

  );
}

OurClients.propTypes = {
  mainRef: object.isRequired,
};

export default OurClients;
