/* eslint-disable */

import { createGlobalStyle, css } from "styled-components";

const themeStyles = ({ theme }) => css`
  /* typography */
  body.font-loaded {
    font-family: ${theme.fonts.primary};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: ${theme.fontSizes.heading};
      font-weight: ${theme.fontWeights.bold};
      font-family: ${theme.fonts.primary};
    }
  }
  html {
    font-size: ${theme.fontSizes.root};

    font-weight: ${theme.fontWeights.display};
    /* outline only when the user is using tab */
    &:not(.user-is-tabbing) {
      a[href],
      area[href],
      input:not([disabled]),
      select:not([disabled]),
      textarea:not([disabled]),
      button:not([disabled]),
      iframe,
      [tabindex],
      [contentEditable="true"] {
        outline: none;
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    
    * {
     scrollbar-color: ${theme.colors.scrollbarSecondary} ${theme.colors.scrollbarPrimary};
     scrollbar-width: thin;

    &::-webkit-scrollbar {
        background: white;
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${theme.colors.scrollbarSecondary};
        border: none;
    }

    &::-webkit-scrollbar-thumb {
        background: ${theme.colors.scrollbarPrimary};
    }
    }


    body {
      margin: 0;
      background: ${theme.colors.grey5};
      font-family: ${theme.fonts.primary}, sans-serif;
      font-weight: ${theme.fontWeights.normal};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

    }

    html > *,
    body > * {
      overflow-x: hidden;
      scrollbar-track-color: red;
      scrollbar-face-color: blue;

    }

  
    
      @font-face {
        font-family: 'Crimson';
        src: url('../../static/fonts/Crimson/Crimson-Roman.woff2') format('woff2'),
        url('../../static/fonts/Crimson/Crimson-Roman.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Crimson';
        src: url('../../static/fonts/Crimson/Crimson-BoldItalic.woff2') format('woff2'),
        url('../../static/fonts/Crimson/Crimson-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
      }
      
      @font-face {
        font-family: 'Crimson';
        src: url('../../static/fonts/Crimson/Crimson-Bold.woff2') format('woff2'),
        url('../../static/fonts/Crimson/Crimson-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Crimson';
        src: url('../../static/fonts/Crimson/Crimson-Italic.woff2') format('woff2'),
        url('../../static/fonts/Crimson/Crimson-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
      }
      
      @font-face {
        font-family: 'Andada';
        src: url('../../static/fonts/Andada/Andada-Regular.woff2') format('woff2'),
        url('../../static/fonts/Andada/Andada-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Andada';
        src: url('../../static/fonts/Andada/Andada-Bold.woff2') format('woff2'),
        url('../../static/fonts/Andada/Andada-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
      }
      
      @font-face {
        font-family: 'Andada';
        src: url('../../static/fonts/Andada/Andada-Italic.woff2') format('woff2'),
        url('../../static/fonts/Andada/Andada-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
      }
      
      @font-face {
        font-family: 'Andada';
        src: url('../../static/fonts/Andada/Andada-BoldItalic.woff2') format('woff2'),
        url('../../static/fonts/Andada/Andada-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
      }


    html {
      line-height: 1.15;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 0;
    }
    main {
      display: block;
    }
    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }
    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    button {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      text-align: inherit;
      background: transparent;

      color: inherit;
      font: inherit;

      line-height: normal;

      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;

      -webkit-appearance: none;
    }
    a {
      background-color: transparent;
    }
    abbr[title] {
      border-bottom: none;
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
    }
    b,
    strong {
      font-weight: bolder;
    }
    code,
    kbd,
    samp {
      font-family: monospace, monospace;
      font-size: 1em;
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }
    legend {
      box-sizing: border-box;
      color: inherit;
      display: table;
      max-width: 100%;
      padding: 0;
      white-space: normal;
    }
    progress {
      vertical-align: baseline;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none !important;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
    [type="search"] {
      -webkit-appearance: textfield;
      outline-offset: -2px;
    }
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none !important;
    }
    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
    }
    details {
      display: block;
    }
    summary {
      display: list-item;
    }
    template {
      display: none;
    }
    [hidden] {
      display: none !important;
    }
    html {
      box-sizing: border-box;
      font-family: sans-serif;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }
    button {
      background: transparent;
      padding: 0;
    }
    fieldset {
      margin: 0;
      padding: 0;
    }
    ol,
    ul {
      margin: 0;
      padding: 0;
    }
    html {
      // @ts-ignore
      font-family: ${theme.fonts.primary};
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      text-rendering: optimizelegibility;
    }
    hr {
      border-top-width: 1px;
    }

    textarea {
      resize: vertical;
    }
    button,
    [role="button"] {
      cursor: pointer;
    }
    button::-moz-focus-inner {
      border: 0 !important;
    }
    table {
      border-collapse: collapse;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      padding: 0;
      line-height: inherit;
      color: inherit;
    }
    pre,
    code,
    kbd,
    samp {
      // @ts-ignore
      font-family: ${theme.fonts.mono};
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }
    img,
    video {
      max-width: 100%;
      height: auto;
    }
    ${themeStyles}
  `
);

export default GlobalStyle;
