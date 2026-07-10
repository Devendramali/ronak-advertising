import React from 'react'
import Heading from '../reuse/Heading'
import BlogCard from '../reuse/BlogCard';
import blog1 from "../../assets/imgs/blog/blog.png"

const HomeBlog = () => {
    const blogs = [
  {
    id: 1,
    image: blog1,
    date: "May 19, 2023",
    author: "Mesbah",
    comments: 5,
    title: "INNOVATE CREATE INSPIRE YOUR BRAND TO LIFE IN",
    button: "Read More",
  },
  {
    id: 2,
    image: blog1,
    date: "May 19, 2023",
    author: "Mesbah",
    comments: 5,
    title: "SERVICES DOES YOUR BILLBOARD COMPANY OFFER",
    button: "Read More",
  },
  {
    id: 3,
    image: blog1,
    date: "May 19, 2023",
    author: "Mesbah",
    comments: 5,
    title: "TYPES OF BILLBOARDS DO YOU HAVE AVAILABLE",
    button: "Read More",
  },
];
  return (
    <div className='p-70'>
        <div className="custom-container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                         <Heading
                    title="Where the Beat Meets  business Billboard"
                    subtitle="Latest Blog"
                    titleclass="text-black"
                    />
                </div>
                <div className="col-lg-5">
                    <div className="blogpara" data-gsap>
                        <p>Billboard advertising is a powerful marketing too businesBillboard advertising is a powerful marketing tool that he businesses gain visibility and reach their target audienceses</p>
                    </div>
                </div>
            </div>
            <div className="blogcontainer">
                <div className="row">

                   {blogs.map((item, index) => {
                        return (
                            <div className="col-lg-4" data-gsap key={index}>
                            <BlogCard data={item} />
                            </div>
                        );
                        })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBlog