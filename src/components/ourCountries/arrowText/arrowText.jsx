import React from 'react';
import PropTypes from 'prop-types';
import theme from './arrowText.theme.module.scss';

function ArrowText({ children }) {
  return (
    <div className={theme.mainContainer}>
      <div className={theme.linearGradientText}>
        {children}
      </div>

    </div>
  );
}

ArrowText.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ArrowText;
