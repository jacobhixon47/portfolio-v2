import { keyframes } from '@emotion/core';
import { fadeInLeft, fadeInUp, fadeIn, fadeOut, slideInDown } from 'react-animations';

const myFadeInLeft = keyframes`${fadeInLeft}`;

const myFadeIn = keyframes`${fadeIn}`;

const myFadeInUp = keyframes`${fadeInUp}`;

const myFadeOut = keyframes`${fadeOut}`;

const mySlideInDown = keyframes`${slideInDown}`;

export {myFadeInLeft, myFadeIn, myFadeOut, myFadeInUp, mySlideInDown};
