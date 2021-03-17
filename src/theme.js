import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f06292',
      main: '#e91e63',
      dark: '#c2185b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    error: {
      light: '#ff825b',
      main: '#ff6333',
      dark: '#cc4f28',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#cc1236',
      contrastText: '#ffffff',
    },
    info: {
      main: '#bdbdbd',
      contrastText: '#333333',
    },
    success: {
      main: '#b2ff59',
      contrastText: '#333333',
    }
  },
  typography: {
    fontFamily: 'Work Sans',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "4rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
    h2: {
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
    h3: {
      fontSize: "2.5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
    h4: {
      fontSize: "2rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
    h5: {
      fontSize: "1.8rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
    h6: {
      fontSize: "1.5rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeightMedium: 500,
    },
  }
});

export default theme;

