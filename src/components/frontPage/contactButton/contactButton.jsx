import React from 'react';
import PropTypes from 'prop-types';
import theme from './contactButton.theme.module.scss';

function ContactButton({ children }) {
  return (
    <button type="submit" className={theme.redRoundedButton}>
      {children}
      <span className={`material-symbols-outlined ${theme.arrow}`}>
        arrow_forward
      </span>
    </button>
  );
}

ContactButton.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ContactButton;
