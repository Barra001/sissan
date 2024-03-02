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
import Ball from '../ball/ball';

function MySlider() {
  return (
    <div className={theme.carrouselContainer}>
      <Ball top="-35px" right="30%" size={100} />
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={250}
        totalSlides={7}
        visibleSlides={3}
        infinite
        isPlaying
        disableAnimation={false}
        playDirection="forward"
        interval={1700}
        dragEnabled={false}
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
