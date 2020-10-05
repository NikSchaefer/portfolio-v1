import React from 'react';
import './App.css';

import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'

import {BrowserRouter,Route,} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      
      
    <div className="App">

      <NavBar />
      <Route exact path='/' component={Home} />
      
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
