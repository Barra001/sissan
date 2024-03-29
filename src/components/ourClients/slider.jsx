import React from 'react';
import {
  CarouselProvider, Slider, Slide,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SingleSlide from './singleSlide/singleSlide';
import theme from './ourClients.theme.module.scss';
import firstClient from './clients/1.png';
import secondClient from './clients/2.png';
import thirdClient from './clients/3.png';
import fourthClient from './clients/4.png';
import fifthClient from './clients/5.png';
import sixthClient from './clients/6.png';
import seventhClient from './clients/7.png';

function MySlider() {
  const isOnMobile = window.innerWidth < 770;
  const isOnTablet = window.innerWidth < 1160;

  function handleResize() {
    if (isOnMobile) {
      return 1;
    }
    if (isOnTablet) {
      return 2;
    }
    return 3;
  }
  return (
    <div className={theme.carrouselContainer}>
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={250}
        totalSlides={7}
        visibleSlides={handleResize()}
        infinite
        isPlaying
        disableAnimation={false}
        playDirection="forward"
        interval={1700}
        dragEnabled={false}
        disableKeyboard
        touchEnabled={false}
      >
        <Slider className={theme.handCursor}>
          <Slide index={0}>
            <SingleSlide image={firstClient}> </SingleSlide>
          </Slide>
          <Slide index={1}>
            <SingleSlide image={secondClient}> </SingleSlide>
          </Slide>
          <Slide index={2}>
            <SingleSlide image={thirdClient}> </SingleSlide>
          </Slide>
          <Slide index={3}>
            <SingleSlide image={fourthClient}> </SingleSlide>
          </Slide>
          <Slide index={4}>
            <SingleSlide image={fifthClient}> </SingleSlide>
          </Slide>
          <Slide index={5}>
            <SingleSlide image={sixthClient}> </SingleSlide>
          </Slide>
          <Slide index={6}>
            <SingleSlide image={seventhClient}> </SingleSlide>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  );
}

export default MySlider;
