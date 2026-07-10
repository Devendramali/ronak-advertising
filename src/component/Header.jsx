import React from 'react'
import logo from  "../assets/imgs/logo.png"

const Header = () => {
  return (
    <div className='menu'>
      <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <a href="#!" className='logo'>
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="col-lg-7">
          <ul className='menulist'>
            <li><a href="#!">Home</a></li>
            <li><a href="#!">About us</a></li>
            <li><a href="#!">Locations</a></li>
            <li><a href="#!">Blog</a></li>
            <li><a href="#!">Media</a></li>
            <li><a href="#!">Case Studies</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-2">
          <a href="#!" className='btn'>
            Contact Us 
            <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9766 5.96094L7.60156 10.3359C7.4375 10.5 7.21875 10.582 7 10.582C6.75391 10.582 6.53516 10.5 6.37109 10.3359C6.01562 10.0078 6.01562 9.43359 6.37109 9.10547L9.24219 6.20703H0.875C0.382812 6.20703 0 5.82422 0 5.33203C0 4.86719 0.382812 4.45703 0.875 4.45703H9.24219L6.37109 1.58594C6.01562 1.25781 6.01562 0.683594 6.37109 0.355469C6.69922 0 7.27344 0 7.60156 0.355469L11.9766 4.73047C12.332 5.05859 12.332 5.63281 11.9766 5.96094Z" fill="white"/>
            </svg>

          </a>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Header