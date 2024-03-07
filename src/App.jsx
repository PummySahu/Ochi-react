import React from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';
import Clients from './components/Clients'
import Eyesec from './components/Eyesec'


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen '>
      <Nav/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      <Clients/>
      <Cards/>
      <Eyesec/>
      <Footer/>
    </div>
  )
}

export default App