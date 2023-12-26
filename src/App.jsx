import { useState } from 'react'
import Header from './components/01-header/header'
import Hero from './components/02-hero/Hero'
import Main from './components/03-main/Main'
import Contact from './components/04-contact/Contact'
import Footer from './components/05-footer/Footer'

function App() {

  return (
    <div className='container'>
     <Header/>
     <Hero/>
     <div className="divider" />
     <Main/>
     <div className="divider" />
     <Contact/>
     <div className="divider" />
     <Footer/>
    </div>
  )
}

export default App
