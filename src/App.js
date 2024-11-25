import React from 'react';

import Login from './pages/Login';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* Components a baixo. */}
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
