import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';

function App() {
  return (
    <div>
      <Router>
        <Route component={Cadastrar} />
        <Route component={Home} />       
      </Router>
    </div>
  );
}

export default App;
