import { useState } from 'react'
import './App.css'
import Preview from './components/Preview.jsx'

//svgs
const starSVG = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z" /></svg>;

function App() {
  const displayParagraph = (ev) => { console.log(ev) };

  return (
    <div className='container'>
      <h1>{starSVG} FAQs</h1>
      <Preview displayParagraph={displayParagraph} header={"What is Frontend Mentor, and how will it help me?"} paragraph={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript."} />
      <Preview displayParagraph={displayParagraph} header={"What is Frontend Mentor, and how will it help me?"} paragraph={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript."} />
      <Preview displayParagraph={displayParagraph} header={"Can I use Frontend Mentor projects in my portfolio?"} paragraph={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellentway to showcase your skills to potential employers!"} />
      <Preview displayParagraph={displayParagraph} header={"How can I get help if I'm stuck on a Frontend Mentor challenge?"} paragraph={"The best place to get help is inside Frontend Mentor's Discord community. There's a helpchannel where you can ask questions and seek support from other community members."} />
    </div >
  )
}

export default App
