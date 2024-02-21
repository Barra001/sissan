import React from 'react';
import PropTypes from 'prop-types';
import theme from './templateName.theme.module.scss';

function TemplateName({ children }) {
  return (
    <div className={theme.mainContainer}>
      {children}
    </div>
  );
}

TemplateName.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateName;
