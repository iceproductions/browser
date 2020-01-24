import * as React from 'react';

import { render } from 'react-dom';
import { fonts } from '../app/constants/fonts';
import App from './app';

const styleElement = document.createElement('style');

styleElement.textContent = `
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${fonts.robotoRegular}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${fonts.robotoMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  src: url(${fonts.robotoLight}) format('woff2');
}

*::selection {
  background-color: #1a73e845;
}
`;

document.head.appendChild(styleElement);

render(<App />, document.getElementById('app'),);
