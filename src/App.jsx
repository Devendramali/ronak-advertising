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
import Location from './pages/Location'
import Team from './pages/Team'
import LocationDetails from './pages/LocationDetails'
import BlogList from './pages/BlogList'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import Media from './pages/Media'
import CaseStudy from './pages/CaseStudy'
import CaseStudydetails from './pages/CaseStudydetails'

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
            <Route  path="/location" element={<Location/>} />
            <Route path='/team' element={<Team />} />
            <Route path='/location-details' element={<LocationDetails />} />
            <Route path='/blog' element={<BlogList />} />
            <Route path='/blog-details' element={<BlogDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/media' element={<Media />} />
            <Route path='/case-study' element={<CaseStudy />} />
            <Route path='/case-study-details' element={<CaseStudydetails />} />
          

          </Route>
        </Routes>

      </BrowserRouter>
     
    </>
  )
}



export default App
