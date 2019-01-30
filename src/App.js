import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Components/Routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
