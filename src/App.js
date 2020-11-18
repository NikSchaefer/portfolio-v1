import React from 'react';
import './App.css';
import NavBar, { checkScrollDown } from './Pages/Sections/NavBar'
import Footer from './Pages/Sections/Footer'
import About from './Pages/Sections/About'

import Intro from './Pages/Sections/Intro'
import Experience from './Pages/Sections/Experience'
import Skills from './Pages/Sections/Skills'
import Projects from './Pages/Sections/Projects'

import { loadExp } from './Pages/Sections/Experience'

const elementsToCheck = [
  ['experience', 'onScrollFade 2s'],
  ['skills', 'onScrollFade 2s'],
  ['projects', 'onScrollFade 2s'],
  ['about', 'onScrollFade 2s']]

const offset = window.innerHeight + -200;

function checkElement(array, iteration) {
  const ele = document.getElementById(array[iteration][0])
  function getOffset(el) {
    let _y = 0;
    while (el && !isNaN(el.offsetTop)) {
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return _y;
  }
  let y = getOffset(ele)
  if (window.scrollY + offset > y) {
    ele.style.visibility = 'visible'
    ele.style.animation = array[iteration][1]
    return array.splice(iteration, 1)
  }
}
function checkFadeElements(array) {
  if (array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      checkElement(array, i)
    }
  }
}



function setElement(array) {

}

function App() {

  window.onload = function () {
    loadExp()
    setElement()
  }

  window.onscroll = function () {
    checkFadeElements(elementsToCheck)
    checkScrollDown()
  }
  return (
    <div className="theme-light">
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;