import * as React from 'react';

import { render } from 'react-dom';;
import App from './app/index';
import { fonts } from '../app/constants/fonts';

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
body {
  overflow-x: hidden;
  overflow-y: hidden;
}

*::selection {
  background-color: #1a73e845;
}
`;

document.head.appendChild(styleElement);

render(<App />, document.getElementById('app'));
