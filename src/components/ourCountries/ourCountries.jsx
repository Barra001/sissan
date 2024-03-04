import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap, Geographies, Geography, Marker,
} from 'react-simple-maps';
import theme from './ourCountries.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import Ball from '../ball/ball';
import SecctionTitle from '../secctionTitle/secctionTitle';
import { peruSvg } from './data/arrowsSvgs';
import { southAmericaCountries, sissanCountries } from './data/countries';

function OurCountries({ mainRef }) {
  const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

  return (
    <SideMargins secondaryBackground>
      <Ball top="-70px" left="100px" relative />
      <SecctionTitle
        subtitle="Paises"
        center
      >
        Nuestros
      </SecctionTitle>
      <div className={theme.centerRow}>
        <div className={theme.mainContainer} ref={mainRef}>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              rotate: [58, 25, 0],
              center: [-12, 16],
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

            <Marker coordinates={[-98.1193, -2.4897]}>
              {peruSvg}

              <text>
                Hola
              </text>

            </Marker>
          </ComposableMap>
        </div>
      </div>

    </SideMargins>
  );
}

OurCountries.propTypes = {
  mainRef: PropTypes.object.isRequired,
};

export default OurCountries;
