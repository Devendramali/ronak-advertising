import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import CompanyOverview from '../component/about/CompanyOverview'
import TimelineSlider from '../component/about/TimelineSlider'

const About = () => {
  return (
    <>
      <Breadcrumb/>
      <CompanyOverview/>
      <TimelineSlider/>
    </>
  )
}

export default About