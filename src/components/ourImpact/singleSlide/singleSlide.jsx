import React from 'react';
import PropTypes from 'prop-types';
import theme from './singleSlide.theme.module.scss';

function formatBigNumber(number) {
  return new Intl.NumberFormat('es-AR').format(number);
}
function SingleSlide({ finalNumber, title, body }) {
  return (
    <div className={theme.mainContainer}>
      <span className={theme.linearGradientText}>{formatBigNumber(finalNumber)}</span>
      <span className={theme.subtitle}>{title}</span>
      <p className={theme.body}>{body}</p>
    </div>
  );
}

SingleSlide.propTypes = {
  finalNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default SingleSlide;
