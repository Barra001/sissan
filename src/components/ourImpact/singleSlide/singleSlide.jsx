/* eslint-disable eqeqeq */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import theme from './singleSlide.theme.module.scss';

/* function formatBigNumber(number) {
  return new Intl.NumberFormat('es-AR').format(number);
} */
function SingleSlide({
  finalNumber, title, body, active,
}) {
  const mainRef = useRef(null);
  const number = useSpring({
    from: { number: 0 },
    to: { number: finalNumber },
    config: { mass: 1, tension: 20, friction: 10 },
    delay: 250,
  });

  useEffect(() => {
    number.number.pause();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && number.number.isPaused) {
          number.number.resume();
        }
      });
    });
    observer.observe(mainRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${theme.mainContainer} ${active ? theme.active : ''}`} id={`SingleSlide-${title}`} ref={mainRef}>
      <animated.div className={theme.linearGradientText}>
        {number.number.to((n) => n.toFixed(0))}
      </animated.div>
      <span className={theme.subtitle}>{title}</span>
      <p className={theme.body}>{body}</p>
    </div>
  );
}

SingleSlide.propTypes = {
  finalNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

SingleSlide.defaultProps = {
  active: false,
};

export default SingleSlide;
