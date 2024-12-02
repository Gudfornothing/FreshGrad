import React from 'react'
import { Link } from 'react-router-dom'
import RecruitorHeaderComponent from './RecruitorHeaderComponent'
const InterviewGuide = () => {
  return (
    <div>
    <div>
      
     <RecruitorHeaderComponent/>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="dot-menu">
           <div className="circle-inner">
  <span className="ri-search-line" />
</div>

          </div>
          <div className="mobilelogin gap-2 d-flex align-items-center">
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signin" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <div className="header_space" />
  <div className="blog-area pt-5 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <div className="text-center product-topper mb-45">
            <h2>Interview Guide Template</h2>
            <p>Discover effective interview tips and tricks that will enhance your <br />chances of acing
              the job
              interview.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/interview-guide-details">
              <img src="../src/assets/images/courses/video3.jpg" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/interview-guide-details" className="tag-btn">Design</Link >
              <h3><Link to="/interview-guide-details">UI/UX design pattern for succesfull software
                  applications</Link ></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/interview-guide-details">
              <img src="../src/assets/images/courses/video1.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/interview-guide-details" className="tag-btn">Accounting</Link >
              <h3><Link to="/interview-guide-details">Basic knowledge about hodiernal bharat in
                  history</Link >
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/interview-guide-details">
              <img src="../src/assets/images/courses/video2.jpg" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/interview-guide-details" className="tag-btn">Business</Link >
              <h3><Link to="/interview-guide-details">The complete accounting &amp; bank financial
                  course
                  2021</Link >
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/interview-guide-details">
              <img src="../src/assets/images/courses/video4.jpg" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/interview-guide-details" className="tag-btn">Business</Link >
              <h3><Link to="/interview-guide-details">The complete accounting &amp; bank financial
                  course
                  2021</Link >
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer-area">
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget">
            <p>
              Lorem ipsum dolor sit amet, consec tetur
              adipiscing elit eiusmod tempor incididunt
              labore dolore magna aliqua consec tetur
              adipiscing elite sed do labor.
            </p>
            <ul className="social-link">
              <li className="social-title">Follow Us:</li>
              <li>
                <Link to="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-fill" />
                </Link >
              </li>
              <li>
                <Link to="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill" />
                </Link >
              </li>
              <li>
                <Link to="https://www.pinterest.com/" target="_blank">
                  <i className="ri-instagram-line" />
                </Link >
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget ps-5">
            <h3>About us</h3>
            <ul className="footer-list">
              <li>
                <Link to="#aboutus">
                  About Us
                </Link >
              </li>
              <li>
                <Link to="/trainer-mentors">
                  Mentorship
                </Link >
              </li>
              <li>
                <Link to="/recruitor-manager">
                  Recruiter
                </Link >
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget ps-5">
            <h3>Resources</h3>
            <ul className="footer-list">
              <li>
                <Link to="/">
                  Home
                </Link >
              </li>
              <li>
                <Link to="/contactus">
                  Contact us
                </Link >
              </li>
              <li>
                <Link to="/terms-and-conditions">
                  Terms &amp; conditions
                </Link >
              </li>
              <li>
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link >
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget ps-5">
            <h3>Official Info</h3>
            <ul className="footer-contact">
              <li>
                <i className="ri-map-pin-2-fill" />
                <div className="content">
                  <h4>Location:</h4>
                  <span>0452 Sunrise Road Las Vegas</span>
                </div>
              </li>
              <li>
                <i className="ri-mail-fill" />
                <div className="content">
                  <h4>Email:</h4>
                  <span><Link to="#"><span className="__cf_email__">freshgrad@gmail.com</span></Link ></span>
                </div>
              </li>
              <li>
                <i className="ri-phone-fill" />
                <div className="content">
                  <h4>Phone:</h4>
                  <span><Link to="tel:+11234567890">+1 1234567890</Link ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="copy-right-text text-center">
          <p>
            Copyright @
            <b>FreshGard</b> All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>

    </div>
  )
}

export default InterviewGuide
