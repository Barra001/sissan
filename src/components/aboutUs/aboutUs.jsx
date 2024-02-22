import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from './aboutUs.theme.module.scss';
import SecctionTitle from '../secctionTitle/secctionTitle';
import image from './sissanlatam.png';
import SideMargins from '../sideMargins/sideMargins';

function AboutUs() {
  return (
    <SideMargins>
      <div className={theme.row}>
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

export default AboutUs;
