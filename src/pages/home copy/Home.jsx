import { useEffect, useState } from "react";

import Main from '../../components/03-main/MainTechnologies'
import Contact from '../../components/04-contact/Contact'
import Footer from '../../components/05-footer/Footer'
import { Outlet } from "react-router-dom";

function Home() {


  const [showScrollBTN, setshowScrollBTN] = useState(false);

  return (
    <div >

     <Main/>

    
    </div>
  )
}

export default Home
