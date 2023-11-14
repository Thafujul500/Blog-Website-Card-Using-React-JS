import React from 'react';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Contract from './Contract';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './Error';


const App = () => {
  return (
    <div>
   

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/contract' element={<Contract/>}></Route>

          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>


      
      
    </div>
  );
};

export default App;