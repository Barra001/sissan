import React, { useState } from 'react';
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SingleSlide from './singleSlide/singleSlide';
import theme from './ourImpact.theme.module.scss';

function MySlider() {
  const isOnMobile = window.innerWidth < 770;
  const isOnTablet = window.innerWidth < 1160;
  const [activeSlide, setActiveSlide] = useState(isOnMobile ? 0 : 1);
  const totalSlides = 6;

  function handleResize() {
    if (isOnMobile) {
      return 1;
    }
    if (isOnTablet) {
      return 2;
    }
    return 3;
  }

  function handleActiveSlide(index) {
    if (isOnTablet && !isOnMobile && (index === activeSlide || index === activeSlide - 1)) {
      return true;
    }
    return index === activeSlide;
  }

  function handlePreviousButtonStyle() {
    if (isOnMobile) {
      return activeSlide > 0;
    }
    return activeSlide > 1;
  }

  function handleNextButtonStyle() {
    if (isOnMobile || isOnTablet) {
      return activeSlide < totalSlides - 1;
    }
    return activeSlide < totalSlides - 2;
  }

  return (
    <div className={theme.carrouselContainer}>
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={280}
        totalSlides={totalSlides}
        visibleSlides={handleResize()}
        dragEnabled={false}
        disableKeyboard
        touchEnabled={false}
      >
        <div className={theme.buttonRow}>
          <ButtonBack
            className={`${theme.buttonBack} ${handlePreviousButtonStyle() ? theme.enableButton : theme.disabledButton}`}
            onClick={() => {
              if (activeSlide > 0) {
                setActiveSlide(activeSlide - 1);
              }
            }}
          >
            <span className={`material-symbols-outlined ${theme.arrow}`}>
              arrow_back
            </span>
          </ButtonBack>
          <ButtonNext
            className={`${theme.buttonNext} ${handleNextButtonStyle() ? theme.enableButton : theme.disabledButton}`}
            onClick={() => {
              if (activeSlide < totalSlides) {
                setActiveSlide(activeSlide + 1);
              }
            }}
          >
            <span className={`material-symbols-outlined ${theme.arrow}`}>
              arrow_forward
            </span>
          </ButtonNext>
        </div>

        <Slider className={theme.handCursor}>
          <Slide index={0}>
            <SingleSlide finalNumber={10000} title="Donantes" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(0)}> </SingleSlide>
          </Slide>
          <Slide index={1}>
            <SingleSlide finalNumber={10000} title="Transfusiones" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(1)}> </SingleSlide>
          </Slide>
          <Slide index={2}>
            <SingleSlide finalNumber={20000} title="Donaciones" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(2)}> </SingleSlide>
          </Slide>
          <Slide index={3}>
            <SingleSlide finalNumber={20000} title="Inmunohematologías" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(3)}> </SingleSlide>
          </Slide>
          <Slide index={4}>
            <SingleSlide finalNumber={25000} title="Serologías" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(4)}> </SingleSlide>
          </Slide>
          <Slide index={5}>
            <SingleSlide finalNumber={60000} title="Hemocomponentes" body="A Website is an extension of yourself and we can help you to express it properly." active={handleActiveSlide(5)}> </SingleSlide>
          </Slide>
        </Slider>

      </CarouselProvider>
    </div>
  );
}

export default MySlider;
