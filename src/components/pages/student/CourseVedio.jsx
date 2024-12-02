import React from 'react'
import { Link } from 'react-router-dom'
const CourseVedio = () => {
  return (
    <div>
      <div>
  <div className="mobile-responsive-menu">
    <div className="logo">
      <Link to="/">
        <img src="../src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
      </Link >
    </div>
  </div>
  <div className="desktop-nav nav-area">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-light p-0">
        <Link className="navbar-brand" to="/">
          <img src="../src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
        </Link >
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 ms-5">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link >
            </li>
            <li className="nav-item">
              <Link to="/resume-student">Resume</Link >
            </li>
            <li className="nav-item">
              <Link to="/training-program">Training Program</Link >
            </li>
           <li className="nav-item">
  <Link to="/coaching-center">Coaching Center</Link >
</li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mentor">Mentors</Link >
            </li>
          </ul>
          <div className="others-options gap-2 d-flex align-items-center">
            <div className="optional-item">
              <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-notification-2-line" /></button>
            </div>
            <div className="navbar-category">
              <div className="dropdown category-list-dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt />
                  Freshgrad
                  <i className="ri-arrow-down-s-line" />
                </button>
                <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                  <Link to="edit-/profile" className="nav-link-item">
                    <i className="ri-pencil-line" /> Edit Profile
                  </Link >
                  <Link to="#" className="nav-link-item">
                    <i className="ri-ticket-line" />
                    My Course
                  </Link >
                  <Link to="#" className="nav-link-item">
                    <i className="ri-lock-line" />
                    Forgot Password
                  </Link >
                  <Link to="#" className="logoutbtn">
                    <i className="ri-logout-box-line" />
                    Logout
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="side-nav-responsive">
    <div className="container">
      <div className="dot-menu">
       <div className="circle-inner">
  <span className="ri-search-line" />
</div>

      </div>
      <div className="mobilelogin gap-2 d-flex align-items-center">
        <div className="others-options">
          <div className="navbar-category">
            <div className="dropdown category-list-dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt />
                Freshgrad
                <i className="ri-arrow-down-s-line" />
              </button>
              <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                <Link to="#" className="nav-link-item">
                  User Account center
                </Link >
                <Link to="#" className="nav-link-item">
                  Hiring Dashboard
                </Link >
                <Link to="#" className="nav-link-item">
                  Freshgrad Profile/Resume
                </Link >
                <Link to="#" className="logoutbtn">
                  <i className="ri-logout-box-line" />
                  Logout
                </Link >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header_space" />
  <div className="blog-area pt-2 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Course Video and PDF Files</h2>
          <ul className="nav tabs_signup gap-2 pb-4" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link px-5 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Videos</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link px-5" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">PDF</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="blog-card p-3">
                <video id="my-video" className="video-js" controls preload="auto" poster="../src/assets/images/courses/video1.png" data-setup loop>
                  <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" />
                </video>
                <div className="content pt-3 pb-0">
                  <h3>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
                    incididunt.
                  </h3>
                  <ul className="course-list">
                    <li><i className="ri-time-fill" /> 10 hr 07 min</li>
                    <li><i className="ri-calendar-fill" /> 18/04/2024</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><embed src="../src/assets/images/pdf.pdf" width="100%" height="2100px" />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Link>
            <h2 id="intermediate_html_interview_questions_and_answers">Interview Questions
              and Answers</h2>
            <h3>1. Are the HTML tags and elements the same thing?</h3>
            <p>No, HTML tags are used to define the structure of a web page, while HTML elements are made up
              of a set of tags that define a specific part of a web page.</p>
            <h3>2. What are void elements in HTML?</h3>
            <p>Void elements in HTML are tags that do not require a closing tag. They are used to insert
              images, line breaks, and other content that does not require additional information.</p>
            <h3>3. What is the advantage of collapsing white space?</h3>
            <p>Collapsing white space in HTML can help to reduce the size of web pages and make them load
              faster. It involves removing unnecessary white space between HTML elements.</p>
            <h3>4. What are HTML Entities?</h3>
            <p>HTML Entities are special characters used to represent characters that cannot be typed on a
              keyboard. They are often used to display special symbols and foreign characters.</p>
            <h3>5. How do you display a table in an HTML webpage?</h3>
            <p>The HTML &lt;table&gt; tag is used to display data in a tabular format. It is also used to
              manage the layout of the page, for example, header section, navigation bar, body content,
              footer section. Given below are the list of HTML tags used for displaying a table in an HTML
              webpage:</p>
          </Link>
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
  </footer></div>

    </div>
  )
}

export default CourseVedio
