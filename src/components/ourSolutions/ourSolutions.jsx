import React from 'react';
import { object } from 'prop-types';
import bancoDeSangreImage from './images/banco_de_sangre.jpg';
import medicinaTransfuncionalImage from './images/transfuncional.jpg';
import SideMargins from '../sideMargins/sideMargins';
import SecctionTitle from '../secctionTitle/secctionTitle';
import theme from './ourSolutions.theme.module.scss';
import Solution from './solution/solution';
import turnos from './images/turnos.jpg';
import insumos from './images/insumos.jpg';
import interoperabilidad from './images/interoperabilidad.jpg';
import agenda from './images/agenda.jpg';
import plasma from './images/plasma.jpg';
import historial from './images/historial.jpg';
import donantes from './images/donantes.jpg';

function OurSolutions({ mainRef }) {
  return (
    <SideMargins secondaryBackground>
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
        />
        <Solution
          inverseAlignment
          imagePath={medicinaTransfuncionalImage}
          title="Medicina transfuncional"
          subtitle="Sissan UMT"
          extendedText="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          imagePath={turnos}
          title="Turnos"
          extendedText="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          inverseAlignment
          imagePath={insumos}
          title="Insumos"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          imagePath={agenda}
          title="Agenda"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          inverseAlignment
          imagePath={interoperabilidad}
          title="Interoperabilidad"
          subtitle="Sissan PDI"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          imagePath={plasma}
          title="Plasma"
          subtitle="Sissan Plasma"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          inverseAlignment
          imagePath={historial}
          title="Historial Clínico"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
        <Solution
          imagePath={donantes}
          title="Donantes"
          text="Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers"
        />
      </div>

    </SideMargins>
  );
}
OurSolutions.propTypes = {
  mainRef: object.isRequired,
};
export default OurSolutions;
