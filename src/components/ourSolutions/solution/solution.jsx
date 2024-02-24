import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from './solution.theme.module.scss';

function Solution({
  title, subtitle, text, extendedText, imagePath, inverseAlignment,
}) {
  const [isOpen, setIsOpened] = useState(false);
  const textContainer = (
    <AnimationOnScroll
      animateIn={inverseAlignment ? 'animate__slideInRight' : 'animate__slideInLeft'}
      duration={1}
      style={{
        flex: 8,
      }}
    >
      <div className={theme.textContainer}>
        <div className={theme.title}>{title}</div>
        {subtitle && <div className={theme.subTitle}>{subtitle}</div>}
        <div className={theme.text}>{text}</div>
        <div className={`${theme.text} ${isOpen ? '' : theme.hiddenText}`}>{extendedText}</div>
        {extendedText && (
        <button
          onClick={() => {
            if (isOpen) {
              setIsOpened(false);
            } else {
              setIsOpened(true);
            }
          }}
          className={theme.linearGradientButton}
          type="button"
        >
          Leer
          {' '}
          {isOpen ? 'menos' : 'más'}
          {' '}
          &gt;
        </button>
        )}
      </div>
    </AnimationOnScroll>
  );
  const imageContainer = (
    <AnimationOnScroll
      animateIn={!inverseAlignment ? 'animate__slideInRight' : 'animate__slideInLeft'}
      duration={1}
      style={{
        flex: 8,
      }}
    >
      <div className={theme.imageContainer}>
        <img src={imagePath} alt={title} className={theme.image} />
      </div>
    </AnimationOnScroll>
  );
  return (
    <section className={theme.mainContainer}>
      {inverseAlignment ? imageContainer : textContainer}
      <div className={theme.spacer} />
      {inverseAlignment ? textContainer : imageContainer}
    </section>
  );
}

Solution.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  extendedText: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  inverseAlignment: PropTypes.bool,
};

Solution.defaultProps = {
  subtitle: null,
  extendedText: null,
  inverseAlignment: false,
};

export default Solution;
