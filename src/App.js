import React from 'react';
import './App.css';
import NavBar from './Pages/Sections/NavBar'
import Footer from './Pages/Sections/Footer'
import About from './Pages/Sections/About'

import Intro from './Pages/Sections/Intro'
import Experience from './Pages/Sections/Experience'
import Skills from './Pages/Sections/Skills'
import Projects from './Pages/Sections/Projects'

import { loadExp } from './Pages/Sections/Experience'

window.onload = function () {
  loadExp()
}

function App() {
  return (
    <div className="theme-light">
      <NavBar />
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}
export default App;