import React from 'react';
import PropTypes from 'prop-types';
import theme from './ball.theme.module.scss';

const colors = {
  red: 'red',
  yellow: 'yellow',
  violet: 'violet',
};

function Ball({
  size, left, top, right, bottom, zindex, relative, color,
}) {
  const getColorTheme = () => {
    if (color === 'yellow') return theme.yellow;
    if (color === 'red') return theme.red;
    return theme.violet;
  };
  return (
    <div className={relative ? theme.positionContainer : null}>
      <div
        className={`${theme.mainContainer} ${getColorTheme()}`}
        style={relative ? {
          width: size, height: size, transform: `translate(${left}, ${top})`, zIndex: zindex, position: 'relative',
        } : {
          width: size, height: size, left, top, right, bottom, zIndex: zindex, position: 'absolute',
        }}
      />
    </div>
  );
}

Ball.propTypes = {
  size: PropTypes.number,
  left: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  zindex: PropTypes.number,
  relative: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(colors)),
};

Ball.defaultProps = {
  left: undefined,
  top: undefined,
  size: 72,
  color: 'red',
  right: undefined,
  bottom: undefined,
  zindex: -2,
  relative: false,
};

export default Ball;
