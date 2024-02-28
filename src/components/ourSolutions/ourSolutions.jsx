import React from 'react';
import { object } from 'prop-types';
import bancoDeSangreImage from './images/banco_de_sangre.png';
import medicinaTransfuncionalImage from './images/transfuncional.png';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import theme from './ourSolutions.theme.module.scss';
import Ball from '../ball/ball';
import Solution from './solution/solution';
import turnos from './images/turnos.png';
import insumos from './images/insumos.png';
import interoperabilidad from './images/interoperabilidad.png';
import agenda from './images/agenda.png';
import plasma from './images/plasma.png';
import historial from './images/historial.png';
import donantes from './images/donantes.png';

function OurSolutions({ mainRef }) {
  return (
    <SideMargins secondaryBackground>
      <Ball top="-80px" left="100px" relative />

      <div className={theme.mainContainer} ref={mainRef}>
        <SecctionTitle
          subtitle="Nuestras soluciones"
          center
        >
          Sissan
        </SecctionTitle>
        <Solution
          imagePath={bancoDeSangreImage}
          title="Banco de Sangre"
          subtitle="Sissan BS"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball top="0px" left="25%" zindex={0} color="yellow" />
          }
        />
        <Solution
          inverseAlignment
          imagePath={medicinaTransfuncionalImage}
          title="Medicina transfuncional"
          subtitle="Sissan UMT"
          extendedText="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball top="0" right="50%" zindex={0} size={20} color="violet" />
          }
        />
        <Solution
          imagePath={turnos}
          title="Turnos"
          extendedText="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          textBall={
            <Ball top="-50px" right="10px" zindex={0} size={80} color="yellow" />
          }
          imageBall={
            <Ball bottom="5px" right="45%" zindex={0} size={30} color="violet" />
          }
        />
        <Solution
          inverseAlignment
          imagePath={insumos}
          title="Insumos"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball bottom="180px" left="100px" zindex={0} color="violet" />
          }
        />
        <Solution
          imagePath={agenda}
          title="Agenda"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball bottom="65px" left="85px" zindex={0} size={30} color="yellow" />
          }
        />
        <Solution
          inverseAlignment
          imagePath={interoperabilidad}
          title="Interoperabilidad"
          subtitle="Sissan PDI"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          textBall={
            <Ball top="-50px" right="50px" zindex={0} size={50} color="violet" />
          }
          imageBall={
            <Ball bottom="-20px" left="40%" zindex={0} size={30} color="yellow" />
          }
        />
        <Solution
          imagePath={plasma}
          title="Plasma"
          subtitle="Sissan Plasma"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball bottom="25px" right="39%" zindex={0} color="yellow" />
          }
        />
        <Solution
          inverseAlignment
          imagePath={historial}
          title="Historial Clínico"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball left="85px" bottom="50%" zindex={0} color="violet" />
          }
        />
        <Solution
          imagePath={donantes}
          title="Donantes"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          imageBall={
            <Ball bottom="10px" left="-50px" zindex={0} size={45} color="violet" />
          }
        />
      </div>

    </SideMargins>
  );
}
OurSolutions.propTypes = {
  mainRef: object.isRequired,
};
export default OurSolutions;
