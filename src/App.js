import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <VendingMachine />
      </BrowserRouter>
    </div>
  );
}

export default App;
