import { keyframes } from '@emotion/core';
import { fadeInLeft, fadeInUp, fadeIn, fadeOut, slideInDown } from 'react-animations';

const myFadeInLeft = keyframes`${fadeInLeft}`;

const myFadeIn = keyframes`${fadeIn}`;

const myFadeInUp = keyframes`${fadeInUp}`;

const myFadeOut = keyframes`${fadeOut}`;

const mySlideInDown = keyframes`${slideInDown}`;

const myBounce = keyframes`
  0% {
    transform: translateY(0vh);
  }

  50% {
    transform: translateY(-1.5vh);
  }

  100% {
    transform: translateY(0vh);
  }
`;

export {myFadeInLeft, myFadeIn, myFadeOut, myFadeInUp, mySlideInDown, myBounce};
