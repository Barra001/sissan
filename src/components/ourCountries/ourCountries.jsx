import React from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import theme from './ourCountries.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import Ball from '../ball/ball';
import SecctionTitle from '../secctionTitle/secctionTitle';

function OurCountries({ mainRef }) {
  const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

  const southAmericaCountries = [
    'Uruguay',
    'Argentina',
    'Chile',
    'Paraguay',
    'Bolivia',
    'Peru',
    'Ecuador',
    'Colombia',
    'Venezuela',
    'Guyana',
    'Suriname',
    'French Guiana',
    'Brazil',
    'Mexico',
  ];

  const sissanCountries = [
    'Uruguay',
    'Argentina',
    'Paraguay',
    'Bolivia',
    'Peru',
  ];
  return (
    <SideMargins secondaryBackground>
      <Ball top="-70px" left="100px" relative />
      <SecctionTitle
        subtitle="Paises"
        center
      >
        Nuestros
      </SecctionTitle>
      <div className={theme.mainContainer} ref={mainRef}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            rotate: [58, 25, 0],
            center: [0, 16],
            scale: 350,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => geographies.map((geo) => {
              if (southAmericaCountries.includes(geo.properties.name)) {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={`${theme.country} 
                      ${geo.properties.name === 'Mexico' ? theme.mexico : ''} 
                      ${sissanCountries.includes(geo.properties.name) ? theme.sissanCountries : ''}`}
                  />
                );
              }
              return null;
            })}
          </Geographies>
        </ComposableMap>
      </div>

    </SideMargins>
  );
}

OurCountries.propTypes = {
  mainRef: PropTypes.object.isRequired,
};

export default OurCountries;
