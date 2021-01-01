import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavBar from './Sections/NavBar'
import Footer from './Sections/Footer'

import * as DOM from 'react-router-dom'
import Main from './Home/Main'
function App() {

  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
