import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap, Geographies, Geography, Marker,
} from 'react-simple-maps';
import theme from './ourCountries.theme.module.scss';
import SideMargins from '../sideMargins/sideMargins';
import Ball from '../ball/ball';
import SecctionTitle from '../secctionTitle/secctionTitle';
import { southAmericaCountries, sissanCountries } from './data/countries';

function OurCountries({ mainRef }) {
  const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

  useEffect(
    () => {
      setTimeout(() => {
        Object.keys(sissanCountries).forEach((element) => {
          const country = document.getElementById(`${sissanCountries[element].name}Country`);
          const text = document.getElementById(`${sissanCountries[element].name}TextSVG`);
          function addStyles() {
            country.style.fill = '#F76680';
            country.style.transform = 'scale(1.01)';
          }

          function removeStyles() {
            country.style.fill = '#8E0917';
            country.style.transform = '';
          }
          if (text) {
            text.addEventListener('mouseover', addStyles);
            text.addEventListener('mouseout', removeStyles);
          }
        });
      }, 1000);
    },
    [],
  );

  return (
    <SideMargins secondaryBackground onlyVerticalMargin>
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
                      id={`${geo.properties.name}Country`}
                      className={`${theme.country}
                      ${geo.properties.name === 'Mexico' ? theme.mexico : ''} 
                      ${sissanCountries.map((e) => e.name).includes(geo.properties.name) ? theme.sissanCountries : ''}`}
                    />
                  );
                }
                return null;
              })}
            </Geographies>
            {sissanCountries.map((e) => (
              <Marker coordinates={e.arrowCoordinates} key={`${e.name}CountryArrowRender`}>
                { e.svgArrow }

              </Marker>
            ))}
            {sissanCountries.map((e) => (
              <Marker coordinates={e.textCoordinates} key={`${e.name}CountryTextRender`}>
                { e.svgText }

              </Marker>
            ))}

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
