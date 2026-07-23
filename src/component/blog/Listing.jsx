import React from 'react'
import BlogCard from '../reuse/BlogCard';
import blog1 from "../../assets/imgs/blog/blog.png"

const Listing = () => {
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
        <div className="custom-container blogcontainer">
               <div className="row">

                   {blogs.map((item, index) => {
                        return (
                            <div className="col-lg-4" data-gsap key={index}>
                            <BlogCard data={item} />
                            </div>
                        );
                        })}
                </div>

                <div className="pagination" data-gsap>
                    <ul>
                        <li><a href="#!">01</a></li>
                        <li><a href="#!">02</a></li>
                        <li><a href="#!">03</a></li>
                        <li><a href="#!"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.543 7.23828L9.23047 12.5508C8.83203 12.9824 8.13477 12.9824 7.73633 12.5508C7.30469 12.1523 7.30469 11.4551 7.73633 11.0566L11.2227 7.53711H1.0625C0.464844 7.53711 0 7.07227 0 6.47461C0 5.91016 0.464844 5.41211 1.0625 5.41211H11.2227L7.73633 1.92578C7.30469 1.52734 7.30469 0.830078 7.73633 0.431641C8.13477 0 8.83203 0 9.23047 0.431641L14.543 5.74414C14.9746 6.14258 14.9746 6.83984 14.543 7.23828Z" fill="white"/>
                        </svg>
                        </a></li>
                    </ul>
                </div>

        </div>
    </div>
  )
}

export default Listing