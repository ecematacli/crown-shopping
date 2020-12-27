import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, a,  em, img, s, small, b, u, i, ol, ul, li, fieldset, form, label,table, tbody, tfoot, thead, tr, th, td, footer, header, hgroup, menu, nav, video {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

html {
  font-size: 10px;
}

input:focus,
input:hover,
button:focus,
button:active,
button:hover {
   outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  /* border-color: transparent;  */
}
`;

export default GlobalStyles;
