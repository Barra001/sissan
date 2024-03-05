import {
  uruguayTextSvg, peruTextSvg, paraguayTextSvg, argentinaTextSvg, boliviaTextSvg,
} from './textsSvgs';
import {
  uruguayArrowSvg, peruArrowSvg, paraguayArrowSvg, argentinaArrowSvg, boliviaArrowSvg,
} from './arrowsSvgs';

export const southAmericaCountries = [
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

export const sissanCountries = [
  {
    name: 'Uruguay', svgText: uruguayTextSvg, svgArrow: uruguayArrowSvg, arrowCoordinates: [-56, -22], textCoordinates: [-38, -23],
  },
  {
    name: 'Paraguay', svgText: paraguayTextSvg, svgArrow: paraguayArrowSvg, arrowCoordinates: [-58, -10], textCoordinates: [-29, -12],
  },
  {
    name: 'Peru', svgText: peruTextSvg, svgArrow: peruArrowSvg, arrowCoordinates: [-98, -2], textCoordinates: [-116, 0],
  },
  {
    name: 'Argentina', svgText: argentinaTextSvg, svgArrow: argentinaArrowSvg, arrowCoordinates: [-100, -20], textCoordinates: [-120, -26.5],
  },
  {
    name: 'Bolivia', svgText: boliviaTextSvg, svgArrow: boliviaArrowSvg, arrowCoordinates: [-95, -12], textCoordinates: [-106, -20],
  },

];
