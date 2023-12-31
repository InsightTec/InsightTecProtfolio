import { useEffect, useState } from "react";
import Header from './components/01-header/header'
import Hero from './components/02-hero/Hero'
import Main from './components/03-main/MainTechnologies'
import Contact from './components/04-contact/Contact'
import Footer from './components/05-footer/Footer'
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);

  return (
    <div  id="up" className='container'>
     <Header/>

     <Outlet/>
     <div className="divider" />
     <Contact/>
     <div className="divider" />
     <Footer/>
     
     <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
      
    </div>
  )
}

export default App
