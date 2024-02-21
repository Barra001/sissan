import React from 'react';
import PropTypes from 'prop-types';
import theme from './secctionTitle.theme.module.scss';

function SecctionTitle({ children, subtitle, center }) {
  return (
    <div className={`${theme.mainContainer} ${center ? theme.center : ''}`}>
      {children}
      <span className={theme.subtitle}>{subtitle}</span>
    </div>
  );
}

SecctionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

SecctionTitle.defaultProps = {
  center: false,
};

export default SecctionTitle;
