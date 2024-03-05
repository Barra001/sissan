import React from 'react';
import PropTypes from 'prop-types';
import theme from './sideMargins.theme.module.scss';

function SideMargins({ children, secondaryBackground, onlyVerticalMargin }) {
  return (
    <div className={`${onlyVerticalMargin ? theme.onlyVertical : theme.mainContainer}  ${secondaryBackground ? theme.secondaryBackground : ''}`}>
      {children}
    </div>
  );
}

SideMargins.propTypes = {
  children: PropTypes.node.isRequired,
  secondaryBackground: PropTypes.bool,
  onlyVerticalMargin: PropTypes.bool,
};

SideMargins.defaultProps = {
  secondaryBackground: false,
  onlyVerticalMargin: false,
};

export default SideMargins;
