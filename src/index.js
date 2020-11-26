import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import NavBar, { checkScrollDown } from './Pages/Sections/NavBar'
import Footer from './Pages/Sections/Footer'
import About from './Pages/Sections/About'
import Intro from './Pages/Sections/Intro'
import Experience from './Pages/Sections/Experience'
import Skills from './Pages/Sections/Skills'
import Projects from './Pages/Sections/Projects'

import { loadExp } from './Pages/Sections/Experience'

const elementsToCheck = [ // should be in render order
  ['title-about', 'title 2s'],
  ['hr-about', 'hr 2s'],

  ['about', 'onScrollFade 2s'],

  ['title-exp', 'title 2s'],
  ['hr-exp', 'hr 2s'],

  ['experience', 'onScrollFade 2s'],

  ['title-skill', 'title 2s'],
  ['hr-skill', 'hr 2s'],

  ['skills', 'onScrollFade 2s'],

  ['title-project', 'title 2s'],
  ['hr-project', 'hr 2s'],

  ['projects', 'onScrollFade 2s'],

  ['title-footer', 'title 2s'],
  ['hr-footer', 'hr 2s'],

]
const offset = window.innerHeight + -200; // px away from bottom of screen to trigger animation
const getOffset = function (el) {
  let _y = 0;
  while (el && !isNaN(el.offsetTop)) {
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return _y;
}
const checkElement = function (array, iteration) {
  if (window.scrollY + offset > array[iteration][2]) {
    const ele = document.getElementById(array[iteration][0])
    ele.style.visibility = 'visible'
    ele.style.animation = array[iteration][1]
    return array.splice(iteration, 1)
  }
}

const checkFadeElements = function (array) {
  if (array.length !== 0) {
    checkElement(array, 0)
  }
}

const generateOffsets = function (array) {
  for (let j = 0; j < array.length; j++) {
    const ele = document.getElementById(array[j][0])
    ele.style.visibility = 'hidden'
    ele.style.position = 'relative'
    const y = getOffset(ele)
    array[j].push(y)
  }
}

function App() {

  window.onload = function () {
    loadExp()
    generateOffsets(elementsToCheck)
    checkScrollDown()
  }

  window.onscroll = function () {
    checkFadeElements(elementsToCheck)
    checkScrollDown()
  }
  return (
    <div>
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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
