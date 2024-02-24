import React from 'react';
import PropTypes from 'prop-types';
import theme from './ball.theme.module.scss';

function Ball({
  size, left, top, right, bottom, yellow, zindex, relative,
}) {
  return (
    <div className={relative ? theme.positionContainer : null}>
      <div
        className={`${theme.mainContainer} ${yellow ? theme.yellow : theme.red}`}
        style={relative ? {
          width: size, height: size, transform: `translate(${left}px, ${top}px)`, zIndex: zindex, position: 'relative',
        } : {
          width: size, height: size, left, top, right, bottom, zIndex: zindex, position: 'absolute',
        }}
      />
    </div>
  );
}

Ball.propTypes = {
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  yellow: PropTypes.bool,
  right: PropTypes.number,
  bottom: PropTypes.number,
  zindex: PropTypes.number,
  relative: PropTypes.bool,
};

Ball.defaultProps = {
  left: undefined,
  top: undefined,
  size: 72,
  yellow: false,
  right: undefined,
  bottom: undefined,
  zindex: -2,
  relative: false,
};

export default Ball;
