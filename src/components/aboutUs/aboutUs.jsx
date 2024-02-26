/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { object } from 'prop-types';
import theme from './aboutUs.theme.module.scss';
import SecctionTitle from '../secctionTitle/secctionTitle';
import image from './sissanlatam.png';
import SideMargins from '../sideMargins/sideMargins';

function AboutUs({ mainRef }) {
  const [isOpen, setIsOpened] = useState(false);

  return (
    <SideMargins>
      <div className={theme.row} id="aboutUsSection" ref={mainRef}>
        <AnimationOnScroll animateIn="animate__slideInLeft" duration={1} style={{ flex: 1 }}>
          <div
            className={theme.column}
          >
            <SecctionTitle
              subtitle="¿Que es Sissan Latam®?"
            >
              Sobre nosotos
            </SecctionTitle>
            <p>
              We add development capacity to tech teams. Our value isn’t limited to
              building teams but is equally distributed across the project lifecycle.
              We are a custom software development company that guarantees the successful
              delivery of your project.
            </p>
            <p className={`${theme.transition} ${isOpen ? '' : theme.hiddenText}`}>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers)
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers)
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers)
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers)
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with
              you long term (not the case with freelancers)
            </p>
            <button
              className={theme.moreInfoButton}
              type="submit"
              onClick={() => {
                if (isOpen) {
                  setIsOpened(false);
                } else {
                  setIsOpened(true);
                }
              }}
            >
              Ver
              {' '}
              {isOpen ? 'menos' : 'más'}
              {' '}
              información

              <span
                className={`material-symbols-outlined ${theme.arrow}`}
              >
                arrow_forward
              </span>
            </button>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          duration={2}
          className={theme.flexCenter}
        >
          <img src={image} className={theme.image} alt="Sissan Latam" />
        </AnimationOnScroll>
      </div>
    </SideMargins>
  );
}

AboutUs.propTypes = {
  mainRef: object.isRequired,
};

export default AboutUs;
