import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Routes from './Components/Routes/routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
