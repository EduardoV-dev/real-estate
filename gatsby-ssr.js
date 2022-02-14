import React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import { Layout } from './src/components';
import theme from './src/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Layout>{element}</Layout>;
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: 0.3s ease all;
        }

        body {
          background-color: #f2f2f2;
          font-size: 16px;
          font-family: 'Roboto', 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana,
            sans-serif;
        }

        p {
          line-height: 1.5;
          font-size: 1rem;
          color: #f2f2f2;
        }

        .link-active {
          position: relative;

          &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 3px;
            border-radius: 5px;
            background-color: #f2f2f2;
          }
        }

        .wrapper {
          width: 95%;
          max-width: 75rem;
          margin: 0 auto;
          overflow-x: hidden;

          @media screen and (min-width: 1200px) {
            width: 100%;
            padding: 0 1rem;
          }
        }
      `}
    />
  </ThemeProvider>
);
