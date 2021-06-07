import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, a,  em, img, s, small, b, u, i, ol, ul, li, fieldset, form, label,table, tbody, tfoot, thead, tr, th, td, footer, header, hgroup, menu, nav, video {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
  overflow: hidden;
}

html {
  font-size: 62.5%;
}

a:hover {
 text-decoration: none;
}

input:focus,
input:hover,
button:focus,
button:active,
button:hover {
  -webkit-appearance: none;
  outline: 0px !important;
  box-shadow: none !important;
}


// Overriding Bootstrap 4 default margin & padding
.row {
  margin: 0;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9 {
  padding: 0;
}
`;

export default GlobalStyles;
