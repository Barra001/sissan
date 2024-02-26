/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { object } from 'prop-types';
import Slider from 'react-slick';
import SideMargins from '../sideMargins/sideMargins';
import theme from './ourImpact.theme.module.scss';
import SecctionTitle from '../secctionTitle/secctionTitle';

function OurImpact({ mainRef }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
        <div>
          <Slider {...settings} className={theme.slider}>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>4</p>
            </div>
            <div>
              <p>5</p>
            </div>
            <div>
              <p>6</p>
            </div>
            <div>
              <p>7</p>
            </div>
            <div>
              <p>8</p>
            </div>
            <div>
              <p>9</p>
            </div>
          </Slider>
        </div>
      </div>
    </SideMargins>
  );
}

OurImpact.propTypes = {
  mainRef: object.isRequired,
};

export default OurImpact;
