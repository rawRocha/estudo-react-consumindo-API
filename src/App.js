import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* Components a baixo. */}
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
