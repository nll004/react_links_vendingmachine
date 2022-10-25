import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Snack from './Snacks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <VendingMachine/>
        <Routes>
          <Route exact path='crackers' element={<Snack name='Peanut Butter Crackers' price={0.99}/>} />
          <Route exact path='cheese' element={<Snack name='Cheese Stick' price={0.99}/>} />
          <Route exact path='jerky' element={<Snack name='Beef Jerky' price={2.49}/>} />
          <Route exact path='peanuts' element={<Snack name='Peanuts' price={1.99}/>} />
          <Route exact path='chips' element={<Snack name='Corn Chips' price={1.49}/>} />
          <Route exact path='cookies' element={<Snack name='Chocolate Chip Cookies' price={1.99}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
