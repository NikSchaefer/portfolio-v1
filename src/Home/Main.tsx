
import About from './About'
import Intro from './Intro'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import React from 'react'
import { checkScrollDown } from '../Sections/NavBar'

interface element {
    id: string,
    animation: string,
    offset: number,
}
const elementsToCheck: element[] = [
    {
        id: 'title-about',
        animation: 'title 1s',
        offset: 0
    },
    {
        id: 'hr-about',
        animation: 'hr 1.2s',
        offset: 0
    },
    {
        id: 'about',
        animation: 'onScrollFade 1.5s',
        offset: 0
    },
    {
        id: 'title-exp',
        animation: 'title 1s',
        offset: 0
    },
    {
        id: 'hr-exp',
        animation: 'hr 1.2s',
        offset: 0
    },
    {
        id: 'exp-div',
        animation: 'onScrollFade 1.5s',
        offset: 0
    },
    {
        id: 'title-skill',
        animation: 'title 1s',
        offset: 0
    },
    {
        id: 'hr-skill',
        animation: 'hr 1.2s',
        offset: 0
    },
    {
        id: 'skills',
        animation: 'onScrollFade 1.5s',
        offset: 0
    },
    {
        id: 'title-project',
        animation: 'title 1s',
        offset: 0
    },
    {
        id: 'hr-project',
        animation: 'hr 1.2s',
        offset: 0
    },
    {
        id: 'projects',
        animation: 'onScrollFade 1.5s',
        offset: 0
    },
    {
        id: 'title-footer',
        animation: 'title 1s',
        offset: 0
    },
    {
        id: 'hr-footer',
        animation: 'hr 1.2s',
        offset: 0
    },
]
const offset: number = window.innerHeight + -200; // px away from bottom of screen to trigger animation
const getOffset = function (el: any): number {
    let _y = 0;
    while (el && !isNaN(el.offsetTop)) {
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return _y;
}
const checkElement = function (array: element[], iteration: number) {
    if (window.scrollY + offset > array[iteration].offset) {
        const ele: any = document.getElementById(array[iteration].id)
        ele.style.visibility = 'visible'
        ele.style.animation = array[iteration].animation
        array.shift()
    }
}
const checkFadeElements = function (array: element[]) {
    if (array.length !== 0) {
        checkElement(array, 0)
    }
}
const generateOffsets = function (array: element[]) {
    for (let j = 0; j < array.length; j++) {
        const ele: any = document.getElementById(array[j].id)
        ele.style.visibility = 'hidden'
        ele.style.position = 'relative'
        array[j].offset = getOffset(ele)
    }
}

export default function Main() {
    window.onload = function () {
        generateOffsets(elementsToCheck)
    }

    window.onscroll = function () {
        checkFadeElements(elementsToCheck)
        checkScrollDown()
    }

    return (
        <div>
            <Intro />
            <About />
            <Experience />
            <Skills />
            <Projects />
        </div>
    )
}