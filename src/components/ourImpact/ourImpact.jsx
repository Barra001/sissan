import React from 'react';
import { object } from 'prop-types';
import Carousel from 'react-multi-carousel';
import theme from './ourImpact.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import 'react-multi-carousel/lib/styles.css';

function OurImpact({ mainRef }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <SideMargins>
      <div className={theme.mainContainer} ref={mainRef}>
        <SecctionTitle
          subtitle="Impacto"
          center
        >
          Nuestro
        </SecctionTitle>

        <div className={theme.spacer} />
        <Carousel responsive={responsive}>
          <div className={theme.div}>Item 1</div>
          <div className={theme.div}>Item 2</div>
          <div className={theme.div}>Item 3</div>
          <div className={theme.div}>Item 4</div>
          <div className={theme.div}>Item 1</div>
          <div className={theme.div}>Item 2</div>
          <div className={theme.div}>Item 3</div>
          <div className={theme.div}>Item 4</div>
        </Carousel>
      </div>
    </SideMargins>
  );
}

OurImpact.propTypes = {
  mainRef: object.isRequired,
};

export default OurImpact;
