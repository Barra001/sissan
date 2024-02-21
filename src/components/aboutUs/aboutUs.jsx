import React from 'react';
import theme from './aboutUs.theme.module.scss';
import SecctionTitle from '../secctionTitle/secctionTitle';

function AboutUs() {
  return (
    <div className={theme.row}>
      <div className={theme.column}>
        <SecctionTitle subtitle="¿Que es Sissan Latam®?">
          Sobre nosotos
        </SecctionTitle>
        <p>
          We add development capacity to tech teams. Our value isn’t limited to
          building teams but is equally distributed across the project lifecycle.
          We are a custom software development company that guarantees the successful
          delivery of your project.
        </p>
      </div>
      <div className={theme.expand}>Image</div>
    </div>
  );
}

export default AboutUs;
