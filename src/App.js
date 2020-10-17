import React from 'react';
import './App.css';
import Home from './Pages/Home'
import NavBar from './Pages/NavBar'
import Footer from './Pages/Footer'
import About from './Pages/About'
import TEC from './Pages/Work/TEC'
import Nebula from './Pages/Work/Nebula'
import K5 from './Pages/Work/K5'
import {BrowserRouter,Route,} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="theme-light">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/theesportcompany' component={TEC} />
      <Route exact path='/nebula' component={Nebula} />
      <Route exact path='/k5gaming' component={K5} />
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;