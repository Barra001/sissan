import React from 'react';
import PropTypes from 'prop-types';
import theme from './secctionTitle.theme.module.scss';

function SecctionTitle({
  children, subtitle, center, marginBottom,
}) {
  return (
    <div className={`${theme.mainContainer} ${center ? theme.center : ''}`} style={{ marginBottom }}>
      {children}
      <span className={theme.subtitle}>{subtitle}</span>
    </div>
  );
}

SecctionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  center: PropTypes.bool,
  marginBottom: PropTypes.string,
};

SecctionTitle.defaultProps = {
  center: false,
  marginBottom: '30px',
};

export default SecctionTitle;
