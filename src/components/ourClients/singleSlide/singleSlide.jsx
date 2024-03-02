import React from 'react';
import PropTypes from 'prop-types';
import theme from './singleSlide.theme.module.scss';

function SingleSlide({
  image,
}) {
  return (
    <img src={image} className={theme.mainContainer} alt="client" />
  );
}

SingleSlide.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SingleSlide;
