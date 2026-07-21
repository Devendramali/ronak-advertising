import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import Listing from '../component/blog/Listing'
import blogimg from "../assets/imgs/breadcrumb/blog-details.jpg"
import Details from '../component/blog/Details'

const BlogDetails = () => {
  return (
    <>
      <Breadcrumb
  title="Blog Details"
  items={[
    { label: "Home", link: "/" },
    { label: "Blog", link: "/" },
    { label: "Blog Details" },
  ]}
  bgimg={blogimg}
/>
<Details/>

    
    </>
  )
}

export default BlogDetails