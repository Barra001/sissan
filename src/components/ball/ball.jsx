import React from 'react';
import PropTypes from 'prop-types';
import theme from './ball.theme.module.scss';

function Ball({
  size, left, top, right, bottom, yellow,
}) {
  return (
    <div
      className={`${theme.mainContainer} ${yellow ? theme.yellow : theme.red}`}
      style={{
        width: size, height: size, top, left, right, bottom,
      }}
    />
  );
}

Ball.propTypes = {
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  yellow: PropTypes.bool,
  right: PropTypes.number,
  bottom: PropTypes.number,
};

Ball.defaultProps = {
  left: undefined,
  top: undefined,
  size: 72,
  yellow: false,
  right: undefined,
  bottom: undefined,
};

export default Ball;
