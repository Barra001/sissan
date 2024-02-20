import React from 'react';
import PropTypes from 'prop-types';
import theme from './navBarButton.theme.module.scss';

function NavBarButton({ children }) {
  return (
    <button type="submit" className={theme.navButton}>
      {children}
    </button>
  );
}

NavBarButton.propTypes = {
  children: PropTypes.string,
};

NavBarButton.defaultProps = {
  children: 'Button',
};

export default NavBarButton;
