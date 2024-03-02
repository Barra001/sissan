import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import theme from './singleSlide.theme.module.scss';

function formatBigNumber(number) {
  return new Intl.NumberFormat('es-AR').format(number);
}
function SingleSlide({
  finalNumber, title, body, active,
}) {
  const [number, setNumber] = useState(finalNumber / 2);
  const maxInterval = 200;
  const ref = useRef(null);
  const [observerSet, setObserverSet] = useState(false);
  let interId;
  let observer;

  const increment = () => {
    if (number < finalNumber) {
      setNumber(number + 10);
    } else {
      clearInterval(interId);
    }
  };

  useEffect(
    () => {
      if (!observerSet) {
        observer = new IntersectionObserver(
          (entries) => {
            if (entries.includes((entry) => entry.isIntersecting)) {
              const actualInterval = maxInterval * (number / finalNumber) ** (finalNumber * 0.03);
              interId = setInterval(increment, actualInterval);
            }
          },
          {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the element is visible
          },
        );

        if (ref.current) {
          observer.observe(ref.current); // Step 3: Observe the element
        }
        setObserverSet(true);
      } else {
        const actualInterval = maxInterval * (number / finalNumber) ** (finalNumber * 0.03);
        interId = setInterval(increment, actualInterval);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    },
    [number],
  );

  return (
    <div className={`${theme.mainContainer} ${active ? theme.active : ''}`} id={`SingleSlide-${title}`}>
      <span className={theme.linearGradientText}>{formatBigNumber(number)}</span>
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
