import React from 'react'
import Hero from '../sections/Hero/Hero'
import Projects from '../sections/Projects/Projects'
import Skills from '../sections/Skills/Skills'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'

import { useNavigate } from 'react-router-dom'


function Landing() {


    // const navigate = useNavigate();
    // navigate('/');


  return (
 <div>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
 </div>
  )
}

export default Landing