import { useState  } from 'react'
import './responsive.css'
import './assets/font/font.css'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Layout from './routes/Layout'


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from './pages/Home'
import About from './pages/About'

// import loader from "./assets/loader.gif"

function App() {
  const [count, setCount] = useState(0)
    


     const [loading, setLoading] = useState(true)



  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  // if (loading) {
  //   return (
  //     <div className="loader-wrapper">
  //       <div className="loader">
  //            <img src={loader} alt="Loading..." />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <>
     <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route  path="/about" element={<About/>} />
            {/* <Route path='/*' element={<PortfolioPage />} /> */}
          

          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}



export default App
