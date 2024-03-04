import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import theme from './solution.theme.module.scss';

function Solution({
  title, subtitle, text, extendedText, imagePath, inverseAlignment, imageBall, textBall,
}) {
  const [isOpen, setIsOpened] = useState(false);
  const isOnTabletOrMobile = window.innerWidth < 1160;
  const invertAlignment = !isOnTabletOrMobile && inverseAlignment;
  const textContainer = (
    <div style={{
      flex: 8,
      position: 'relative',
    }}
    >
      {textBall}
      <AnimationOnScroll
        animateIn={invertAlignment ? 'animate__slideInRight' : 'animate__slideInLeft'}
        duration={1}
      >
        <div className={theme.textContainer}>
          <div className={theme.title}>{title}</div>
          {subtitle && <div className={theme.subTitle}>{subtitle}</div>}
          <div className={theme.text}>

            {text}
          </div>
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
    </div>
  );
  const imageContainer = (
    <div style={{
      flex: 8,
      position: 'relative',
    }}
    >
      {imageBall}
      <AnimationOnScroll
        animateIn={!isOnTabletOrMobile && !inverseAlignment ? 'animate__slideInRight' : 'animate__slideInLeft'}
        duration={1}
      >
        <div className={theme.imageContainer}>
          <img src={imagePath} alt={title} className={theme.image} />
        </div>
      </AnimationOnScroll>
    </div>
  );
  return (
    <section className={theme.mainContainer}>
      {invertAlignment ? imageContainer : textContainer}
      <div className={theme.spacer}>
        <div className={theme.arrow} style={!isOnTabletOrMobile && !inverseAlignment ? {} : { justifyContent: 'flex-end' }}>
          <div className={theme.arrowColor} />
        </div>
      </div>
      {invertAlignment ? textContainer : imageContainer}
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
  imageBall: PropTypes.node,
  textBall: PropTypes.node,
};

Solution.defaultProps = {
  subtitle: null,
  extendedText: null,
  inverseAlignment: false,
  imageBall: null,
  textBall: null,
};

export default Solution;
