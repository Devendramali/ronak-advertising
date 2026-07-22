import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import media from "../assets/imgs/breadcrumb/media.jpg"
import CaseList from '../component/case-study/CaseList'

const CaseStudy = () => {
  return (
    <>
         <Breadcrumb
  title="Media"
  items={[
    { label: "Home", link: "/" },
    { label: "Media" },
  ]}
  bgimg={media}
/>
<CaseList/>
    
    </>
  )
}

export default CaseStudy