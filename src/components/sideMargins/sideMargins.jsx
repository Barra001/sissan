import React from 'react';
import PropTypes from 'prop-types';
import theme from './sideMargins.theme.module.scss';

function SideMargins({ children }) {
  return (
    <div className={theme.mainContainer}>
      {children}
    </div>
  );
}

SideMargins.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideMargins;
