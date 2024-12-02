import React from 'react'
import { Link } from 'react-router-dom'
const TrainingProgram = () => {
  return (
    <div>
      <div>
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to="/">
                <img src="/src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link >
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-nav nav-area">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light p-0">
            <Link className="navbar-brand" to="/">
              <img src="/src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
            </Link >
            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
              <ul className="navbar-nav w-100 ms-5">
                <li className="nav-item">
                  <Link to="/training-program" className="nav-link active">
                    Training Programs
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/recruitor-manager" className="nav-link">
                    Recruiter
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/trainer-mentors" className="nav-link">
                    Mentorship</Link >
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
           <div className="nav-widget-form me-3 d-none d-md-none d-lg-block">
  <form className="browser-default right position-relative">
    <input id="search-input" placeholder="Search" type="text" className="browser-default search-field" name="q" defaultValue autoComplete="off" aria-label="Search box" />
    <label htmlFor="search-input"><i className="ri-search-line" /></label>
    <i className="material-icons">cancel</i>
    <div className="search-popup">
      <div className="search-content">
        <ul className="popup-list">
          <li ><Link className="grey-text" to="#">Google</Link ></li>
          <li ><Link className="grey-text" to="#">Apple</Link ></li>
          <li ><Link className="grey-text" to="#">Microsoft</Link ></li>
          <li ><Link className="grey-text" to="#">Github</Link ></li>
        </ul>
      </div>
    </div>
  </form> 
</div>

              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/signin" className="default-btn two rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="defaultsignin rounded-pill">Sign up</Link >
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
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signin" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
          <div className="container">
  <div className="side-nav-inner">
    <div className="side-nav justify-content-center align-items-center">
      <div className="side-item">
        <form className="search-form">
          <input type="search" className="form-control" placeholder="Search courses" />
          <button type="submit">
            <i className="ri-search-line" />
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </div>
  <div className="header_space" />
  <div className="banner-area bg-white py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content">
            <span data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">FOR
              A BETTER FUTURE</span>
            <h1 data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Take your team collaboration to the next level</h1>
            <p data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Book a session with freshgrad mentors across domain &amp; work together to build your career!</p>
            <div className="banner-form-area" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-img" data-speed="0.05" data-revert="true">
            <img src="/src/assets/images/trainer-banner.png" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true" alt="Man" />
            <div className="right-content shadow" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <i className="flaticon-checked" />
              <div className="content">
                <h3>$4578521.95</h3>
                <p>This month total earn</p>
              </div>
            </div>
            <div className="left-content shadow" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <div className="content">
                <img src="/src/assets/images/home-one/user-img.jpg" alt="User" />
                <h3>User experience class</h3>
                <p>Today at 12.00 PM</p>
              </div>
            </div>
            <div className="banner-img-shape">
              <div className="shape1" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
                <img src="/src/assets/images/home-one/shape3.png" alt="Shape" />
              </div>
              <div className="shape2" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
                <img src="/src/assets/images/home-one/shape2.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner-shape">
      <div className="banner-shape1">
        <img src="/src/assets/images/home-one/shape1.png" alt="Shape" />
      </div>
    </div>
  </div>
  <div className="courses-area py-5 bg-light">
    <div className="container">
      <div className="section-title text-center mb-45">
        <h2>All Courses</h2>
        <p>
          We found 09 courses available for you
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/networking.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Networking</Link >
              <div className="price-text">Free</div>
              <h3> <Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link ></h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 62 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="#" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors1.jpg" alt="Instructors" />
                  <h3>David warner</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/Cybersecurity.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Cybersecurity</Link >
              <div className="price-text">Free</div>
              <h3> <Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link >
              </h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 54 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="#" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors2.jpg" alt="Instructors" />
                  <h3>David malan</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/cloud.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Cloud</Link >
              <div className="price-text">Free</div>
              <h3><Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link ></h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 40 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="/networking-courses" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors3.jpg" alt="Instructors" />
                  <h3>Emma jhonson</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/networking.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Networking</Link >
              <div className="price-text">Free</div>
              <h3><Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link ></h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 62 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="#" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors1.jpg" alt="Instructors" />
                  <h3>David warner</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/Cybersecurity.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Cybersecurity</Link >
              <div className="price-text">$129</div>
              <h3><Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link >
              </h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 54 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="#" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors2.jpg" alt="Instructors" />
                  <h3>David malan</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to="/networking-courses">
              <img src="/src/assets/images/cloud.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link to="/networking-courses" className="tag-btn">Cloud</Link >
              <div className="price-text">Free</div>
              <h3><Link to="/networking-courses">Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  industry.</Link ></h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 40 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="#" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors3.jpg" alt="Instructors" />
                  <h3>Emma jhonson</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <Link to="#" className="default-btn rounded">View All</Link >
        </div>
      </div>
    </div>
  </div>
  <div className="instructors-area py-5">
    <div className="container">
      <div className="row align-items-center mb-45">
        <div className="col-lg-8 col-md-9">
          <div className="section-title mt-rs-20">
            <h2>Meet our top Mentors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
              labore et dolore.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 text-end">
          <Link to="#" className="default-btn">View all instructor</Link >
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="instructors-item">
            <div className="instructors-img">
              <Link to="/trainer-details">
                <img src="/src/assets/images/instructors/instructors-img1.jpg" alt="Team Images" />
              </Link >
            </div>
            <div className="content">
              <h3><Link to="/trainer-details">Sally</Link ></h3>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="instructors-item">
            <div className="instructors-img">
              <Link to="/trainer-details">
                <img src="/src/assets/images/instructors/instructors-img2.jpg" alt="Team Images" />
              </Link >
            </div>
            <div className="content">
              <h3><Link to="/trainer-details">Jesse</Link ></h3>
              <span>Content strategist</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="instructors-item">
            <div className="instructors-img">
              <Link to="/trainer-details">
                <img src="/src/assets/images/instructors/instructors-img3.jpg" alt="Team Images" />
              </Link >
            </div>
            <div className="content">
              <h3><Link to="/trainer-details">Lance</Link ></h3>
              <span>Photographer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="instructors-item">
            <div className="instructors-img">
              <Link to="/trainer-details">
                <img src="/src/assets/images/instructors/instructors-img4.jpg" alt="Team Images" />
              </Link >
            </div>
            <div className="content">
              <h3><Link to="/trainer-details">Jonquil</Link ></h3>
              <span>Art director</span>
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
                <Link to="#">
                  About Us
                </Link >
              </li>
              <li>
                <Link to="#">
                  Instructor registration
                </Link >
              </li>
              <li>
                <Link to="#">
                  Instructors
                </Link >
              </li>
              <li>
                <Link to="#">
                  Our Event
                </Link >
              </li>
              <li>
                <Link to="#">
                  Courses List
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
                <Link to="#">
                  Courses
                </Link >
              </li>
              <li>
                <Link to="#">
                  Our Blog
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

    </div>
  )
}

export default TrainingProgram
