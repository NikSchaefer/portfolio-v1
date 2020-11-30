import React from 'react'
export function ArrowSvg(props) {
    return (
        <svg preserveAspectRatio="none" id={props.id}
            style={{ marginBottom: props.margin }}
            viewBox="0 0 100 102" height={props.height}
            width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L50 100 L100 0 Z" fill={props.color} stroke={props.color}></path>
        </svg>
    )
}
export function Chevron(props) {
    return (
        <svg id={props.id} style={props.style} className={props.class} xmlns="http://www.w3.org/2000/svg" width={props.height} height={props.height} viewBox="0 0 24 24" stroke-widtrokeh="1.5" stroke={props.color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 7 12 12 17 7" />
            <polyline points="7 13 12 18 17 13" />
        </svg>
    )
}
export function Menu() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    )
}
function github(props) {
    return (
        <svg className={props.class} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
    )
}
function email(props) {
    return (
        <svg className={props.class} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </svg>
    )
}
function linkedin(props) {
    return (
        <svg className={props.class} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    )
}
export const socialSvg = {
    github: github,
    email: email,
    linkedin: linkedin,
}