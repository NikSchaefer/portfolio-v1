import React from 'react';
import './App.css';

import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import About from './Pages/About'

import {BrowserRouter,Route,} from "react-router-dom";


function App() {


  


  return (
    <BrowserRouter>
      
      
    <div className="App">

      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;
