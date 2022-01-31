import { createTheme } from '@mui/system';

const palette = {
  primary: {
    main: '#6AA107',
    contrastText: '#F2F2F2',
  },
  secondary: {
    main: '#0D2533',
    contrastText: '#333',
  },
};

const theme = createTheme({ palette });
export default theme;
