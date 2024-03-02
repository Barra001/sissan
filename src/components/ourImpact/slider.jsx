import React from 'react';
import {
  CarouselProvider, Slider, Slide,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SingleSlide from './singleSlide/singleSlide';
import theme from './ourImpact.theme.module.scss';

function MySlider() {
  return (
    <div className={theme.carrouselContainer}>
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={280}
        totalSlides={6}
        visibleSlides={3}
      >
        <Slider className={theme.handCursor}>
          <Slide index={0}>
            <SingleSlide finalNumber={10000} title="Donantes" body="A Website is an extension of yourself and we can help you to express it properly. "> </SingleSlide>
          </Slide>
          <Slide index={1}>
            <SingleSlide finalNumber={10000} title="Transfusiones" body="A Website is an extension of yourself and we can help you to express it properly. "> </SingleSlide>
          </Slide>
          <Slide index={2}>
            <SingleSlide finalNumber={20000} title="Donaciones" body="A Website is an extension of yourself and we can help you to express it properly. " active> </SingleSlide>
          </Slide>
          <Slide index={3}>
            <SingleSlide finalNumber={20000} title="Inmunohematologías" body="A Website is an extension of yourself and we can help you to express it properly. "> </SingleSlide>
          </Slide>
          <Slide index={4}>
            <SingleSlide finalNumber={25000} title="Serologías" body="A Website is an extension of yourself and we can help you to express it properly. "> </SingleSlide>
          </Slide>
          <Slide index={5}>
            <SingleSlide finalNumber={60000} title="Hemocomponentes" body="A Website is an extension of yourself and we can help you to express it properly. "> </SingleSlide>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default MySlider;
