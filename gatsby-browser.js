import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './src/theme';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default wrapRootElement;
