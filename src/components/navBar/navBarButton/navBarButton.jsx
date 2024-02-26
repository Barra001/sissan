/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import theme from './navBarButton.theme.module.scss';

function NavBarButton({ children, goTo }) {
  return (
    <button type="submit" className={theme.navButton} onClick={() => { goTo.current?.scrollIntoView({ behavior: 'smooth' }); }}>
      {children}
    </button>
  );
}

NavBarButton.propTypes = {
  children: PropTypes.string,
  goTo: PropTypes.object.isRequired,
};

NavBarButton.defaultProps = {
  children: 'Button',
};

export default NavBarButton;
