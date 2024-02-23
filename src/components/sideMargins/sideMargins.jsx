import React from 'react';
import PropTypes from 'prop-types';
import theme from './sideMargins.theme.module.scss';

function SideMargins({ children, secondaryBackground }) {
  return (
    <div className={`${theme.mainContainer}  ${secondaryBackground ? theme.secondaryBackground : ''}`}>
      {children}
    </div>
  );
}

SideMargins.propTypes = {
  children: PropTypes.node.isRequired,
  secondaryBackground: PropTypes.bool,
};

SideMargins.defaultProps = {
  secondaryBackground: false,
};

export default SideMargins;
