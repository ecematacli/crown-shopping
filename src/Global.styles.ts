import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, a,  em, img, s, small, b, u, i, center, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, figure, figcaption, footer, header, hgroup, menu, nav, section, video {
  margin: 0;
  padding: 0;
}

body {
  background-color: #F6F6F6;
  font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyles;
