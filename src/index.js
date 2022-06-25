import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    text: 'black',
    accent: 'orangered',
    bg: 'aliceblue',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
