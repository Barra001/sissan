import React from 'react';
import PropTypes from 'prop-types';
import theme from './contactButton.theme.module.scss';

function ContactButton({ children, goTo }) {
  return (
    <button type="submit" className={theme.redRoundedButton} onClick={() => { goTo.current?.scrollIntoView({ behavior: 'smooth' }); }}>
      {children}
      <span className={`material-symbols-outlined ${theme.arrow}`}>
        arrow_forward
      </span>
    </button>
  );
}

ContactButton.propTypes = {
  children: PropTypes.string.isRequired,
  goTo: PropTypes.object.isRequired,
};

export default ContactButton;
