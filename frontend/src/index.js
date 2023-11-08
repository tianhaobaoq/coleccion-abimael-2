import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux'
import store from './store/index'


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0c000e',
      contrastText: '#f7f5f5',
      dark: '#000000',
    },
    secondary: {
      main: '#9daa33',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    background: {
      default: '#30b2c1',
      paper: '#332a33',
    },
    error: {
      main: '#ff2919',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
      hint: '#20184a',
      disabled: 'rgba(0,0,0,0.5)',
    },
    divider: 'rgba(0,0,0,0.12)',
  },
  typography: {
    fontFamily: 'Slabo 27px',
    fontWeightMedium: 100,
    fontWeightBold: 900,
    h1: {
      fontFamily: 'Source Sans Pro',
    },
    body1: {
      fontFamily: 'Open Sans',
    },
    h2: {
      fontFamily: 'Montserrat',
    },
    h5: {
      fontFamily: 'Source Sans Pro',
    },
    overline: {
      fontFamily: 'PT Sans',
    },
    button: {
      fontFamily: 'PT Sans',
      fontSize: '1rem',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<CssBaseline />
<ThemeProvider theme={theme}>
<Provider store={store}>
    <App />
</Provider>
</ThemeProvider>
</React.StrictMode>
);