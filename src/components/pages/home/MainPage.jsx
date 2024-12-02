import HeroSlider from 'hero-slider';
import React from 'react';

import { BrowserRouter, Link ,Routes,Route} from 'react-router-dom';




const MainPage = () => {
  const currentYear = new Date().getFullYear();

  
  

    
  return (
    
<div className="App">
  
  
  {/* <div id="preloader"> */}
    {/* <div id="preloader-area"> */}
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
    {/* </div> */}
    <div className="preloader-section preloader-left" />
    <div className="preloader-section preloader-right" />
  {/* </div> */}
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to='/' >
                <img src="/src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link>
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
                  <Link to="/training-program" className="nav-link">
                    Training Programs
                  </Link>
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
                  <Link to="/jobs" className="nav-link">
                    Jobs
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
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
          <div className="mobilelogin gap-2 d-flex align-items-end">
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header_space" />
 
  <div className="hero-slider-areas pt-50 position-relative">
    <div className="univery_add">
     <div>
  <div className="firstbanner"><img src="/src/assets/images/hero_img_2_1.png" alt='img' /></div>
  <div className="firstbanner2"><img src="/src/assets/images/hero_img_2_2.png" alt ='img'/></div>
</div>

    </div>
    <div className="hero-slider owl-carousel owl-theme">
      <div className="hero-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-xl-8 mx-auto text-center">
              <div className="hero-content">
                <span className="top-title">Empower Your Future</span>
                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                <p>
                  Flexible easy to access learning opportunities can bring a significant
                  change in
                  how
                  to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                </p>
                <div className="banner-btn">
                  <Link to="/networking-courses" className="default-btn border-radius-50">Find courses</Link >
                  <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                    <span className="ms-3 text-white">Watch video</span>
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-item">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-xl-8 mx-auto text-center">
              <div className="hero-content">
                <span className="top-title">Empower Your Future</span>
                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                <p>
                  Flexible easy to access learning opportunities can bring a significant
                  change in
                  how
                  to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                </p>
                <div className="banner-btn">
                  <Link to="#" className="default-btn border-radius-50">Find courses</Link >
                  <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                    <span className="title-text">Watch video</span>
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-item">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-8 mx-auto text-center">
              <div className="hero-content">
                <span className="top-title">Empower Your Future</span>
                <h1> Train, Thrive, and Secure Your Career Journey as a Fresh Graduate.</h1>
                <p>
                  Flexible easy to access learning opportunities can bring a significant
                  change in
                  how
                  to learn! The Ellen can offer you to enjoy the beauty of eLearning!
                </p>
                <div className="banner-btn">
                  <Link to="#" className="default-btn border-radius-50">Find courses</Link >
                  <Link to="https://www.youtube.com/watch?v=Zd00oIDAt60" className="play-btn">
                    <i className="flaticon-play-button-arrowhead" />
                    <span className="title-text">Watch video</span>
                  </Link >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-shape">
  <div className="shape1">
    <img src="/src/assets/images/home-three/shape.png" alt="Shape" />
  </div>
  <div className="shape2">
    <img src="/src/assets/images/home-three/shape2.png" alt="Shape" />
  </div>
</div>

  </div>
  
  {/* video */}
  <div className="video_home">
    <video width="100%" height="100%" className="rounded" autoPlay muted playsInline loop>
      <source src="/src/assets/images/video-home.mp4" type="video/mp4" />
    </video>
  </div>
  {/* video end */}
  <div className="header_space" />
  <div className="courses-area py-5 bg-light">
    <div className="container">
      <div className="section-title text-center mb-45">
        <h2>Free Training Program</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Student Training Program</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              "You are allowed to complete only one training program for FREE" &amp; "If you miss 3
              consecutive days, then you will have to start your program from beginning day 1"
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="courses-item">
            <Link to='/networking-courses' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="/src/assets/images/networking.png" alt="Courses" />
            </Link >
            <div className="content">
              <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="tag-btn">Networking</Link >
              <div className="price-text">Free</div>
              <h3> <Link to='/networking-courses' data-bs-toggle="modal" data-bs-target="#exampleModal">Lorem Ipsum is simply dummy
                  text of the printing and
                  typesetting
                  industry.</Link ></h3>
              <ul className="course-list">
                <li><i className="ri-vidicon-fill" /> 62 Days</li>
              </ul>
              <div className="bottom-content">
                <Link to="/networking-courses" className="user-area">
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
                <Link to="/networking-courses" className="user-area">
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
                <Link to="/networking-courses" className="user-area">
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
                <Link to="/networking-courses" className="user-area">
                  <img src="/src/assets/images/courses/courses-instructors3.jpg" alt="Instructors" />
                  <h3>Emma jhonson</h3>
                </Link >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="enrolled-area-two py-5" id="aboutus">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="enrolled-img-three mb-30 pr-20">
            <img src="/src/assets/images/enrolled/enrolled-img3.jpg" alt="Enrolled" />
            <div className="enrolled-img-content">
              <i className="flaticon-discount" />
              <div className="content">
                <h3>Get 40% off</h3>
                <p>Every course</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="enrolled-content mb-30">
            <div className="section-title">
              <span>About Our FreshGard</span>
              <h2>A Few Words About the FreshGard.</h2>
              <p>
                Education is a vital aspect of human development, providing individuals with
                knowledge,
                skills, and opportunities to acquire new information.encompasses formal learning
                institutions
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-6">
                <ul className="enrolled-list">
                  <li><i className="flaticon-check" /> Full lifetime access</li>
                  <li><i className="flaticon-check" /> Certificate of completion</li>
                </ul>
              </div>
              <div className="col-lg-6 col-6">
                <ul className="enrolled-list">
                  <li><i className="flaticon-check" /> 20+ downloadable resources</li>
                  <li><i className="flaticon-check" /> Free trial 7 days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="featured-area bg-light py-5" id="career_home">
    <div className="container">
      <div className="row align-items-center mb-45">
        <div className="col-lg-8 col-md-9">
          <div className="section-title mt-rs-20">
            <h2>Unlock Your Career</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a
              galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        <div className="col-lg-4  col-md-3 text-end">
          <img src="/src/assets/images/users.png" alt ="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          <div className="row career-se">
            <div className="col-lg-8 col-12 mb-3">
              <div className="banner-item position-relative">
                <div className="banner-content">
                  <span>Free</span>
                  <h3>Germany Foundation<br />
                    Document</h3>
                  <Link to="/networking-courses" className="e-btn">View
                    Courses</Link >
                </div>
                <div className="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                  <img src="/src/assets/images/career-banner.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="banner-item trainer-ban position-relative">
                <div className="banner-content">
                  <span>Trainer</span>
                  <h3>Trainer skills<br /> daily</h3>
                  <Link to="/trainer-mentors" className="e-btn">View</Link >
                </div>
                <div className="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                  <img src="/src/assets/images/career-banner2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="banner-item careerbg trainer-ban position-relative">
                <div className="banner-content">
                  <span>Careers</span>
                  <h3>Jobs <br />Explore</h3>
                  <Link to="/jobs" className="e-btn">View</Link >
                </div>
                <div className="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                  <img src="/src/assets/images/career-banner3.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 mb-3">
              <div className="banner-item menterbg position-relative">
                <div className="banner-content">
                  <span>Top Mentors</span>
                  <h3>Mentorship <br />
                    Guidance</h3>
                  <Link to="/networking-courses" className="e-btn">View
                    Courses</Link >
                </div>
                <div className="banner-thumb d-none d-sm-block d-md-none d-lg-block">
                  <img src="/src/assets/images/career-banner4.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="banner-item companybg trainer-ban position-relative">
            <div className="banner-content">
              <span>Company</span>
              <h3>Compete Battle  <br />For Excellence</h3>
              <Link to="#" className="e-btn">View</Link >
            </div>
            <div className="banner-thumb d-none d-sm-block d-md-none d-lg-block">
              <img src="/src/assets/images/career-banner5.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="enrolled-area-two py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="rowf">
         <div className="col-12 col-md-6 my-auto enrolled-img-three">
  <img src="/src/assets/images/tr1.webp" alt="tr" />
  <div>
    <img src="/src/assets/images/trainer.webp" alt="tr" />
  </div>
</div>

            <div className="video_players">
              <video width="100%" className="rounded" autoPlay muted playsInline loop>
                <source src="/src/assets/images/Home-1-Video.mp4" type="video/mp4" />
              </video>
          <div className="enrolled-img-three mb-30 pr-20">
  {/* <img src="/src/assets/images/enrolled/enrolled-img3.jpg" className="img-fluid" alt="Enrolled" /> */}
</div>

            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="enrolled-content mb-30">
            <div className="section-title">
              <span>FLEXIBLE SUPPORTED LEARNING</span>
              <h2>Expertise Across AllDisciplines</h2>
              <p>
                Education is a vital aspect of human development, providing individuals with
                knowledge,
                skills, and opportunities to acquire new information.encompasses formal learning
                institutions
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-6">
                <div className="counter-content">
                  <i className="flaticon-online-course" />
                  <h3><span className="odometer" data-count={15000}>00000</span>+</h3>
                  <p>Courses &amp; videos</p>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="counter-content">
                  <i className="flaticon-student" />
                  <h3><span className="odometer" data-count={145000}>000000</span>+</h3>
                  <p>Students enrolled</p>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="counter-content">
                  <i className="flaticon-online-course-1" />
                  <h3><span className="odometer" data-count={10000}>00000</span>+</h3>
                  <p>Courses instructors</p>
                </div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="counter-content">
                  <i className="flaticon-customer-satisfaction" />
                  <h3><span className="odometer" data-count={100}>000</span>%</h3>
                  <p>Satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="featured-area bg-light py-5" id="trainer-mentor">
    <div className="container">
      <div className="row align-items-center mb-45">
        <div className="col-lg-8 col-md-9">
          <div className="section-title mt-rs-20">
            <h2>Personalised Mentor Support</h2>
            <p>Select a mentor from a pool of 2000+ industry experts &amp; get 1-on-1 mentorship!</p>
          </div>
        </div>
        <div className="col-lg-4  col-md-3 text-end">
          <Link to="/trainer-mentors" className="default-btn border-radius-50">View more</Link >
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="featured-item-one">
            <img src="/src/assets/images/menter.png"  className="rounded img-fluid" />
          </div>
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
          <Link to="/trainer-mentors" className="default-btn">View all instructor</Link >
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
              <h3><Link to="/trainer-details">Sally welch</Link ></h3>
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
              <h3><Link to="/trainer-details">Jesse joslin</Link ></h3>
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
              <h3><Link to="/trainer-details">Lance altman</Link ></h3>
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
              <h3><Link to="/trainer-details">Jonquil von</Link ></h3>
              <span>Art director</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="testimonials-area bg-light py-5">
    <div className="container">
      <div className="section-title text-center">
        <span>TESTIMONIAL</span>
        <h2>What people say about us</h2>
      </div>
      <div className="testimonials-slider-two owl-carousel owl-theme">
        <div className="testimonials-card-two">
          <div className="rating">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
            vel,
            porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur
            ridiculus.”</p>
          <div className="content">
            <img src="/src/assets/images/testimonials/testimonials-img1.jpg" alt="testimonials" />
            <h3>Nikolas brooten</h3>
            <span>Student</span>
          </div>
          <div className="quote"> <i className="flaticon-quote" /></div>
        </div>
        <div className="testimonials-card-two">
          <div className="rating">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
            vel,
            porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur
            ridiculus.”</p>
          <div className="content">
            <img src="/src/assets/images/testimonials/testimonials-img2.jpg" alt="testimonials" />
            <h3>Terry ambady</h3>
            <span>Content strategist</span>
          </div>
          <div className="quote"> <i className="flaticon-quote" /></div>
        </div>
        <div className="testimonials-card-two">
          <div className="rating">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
            vel,
            porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur
            ridiculus.”</p>
          <div className="content">
            <img src="/src/assets/images/testimonials/testimonials-img3.jpg" alt="testimonials" />
            <h3>Cory zamora</h3>
            <span>Photographer</span>
          </div>
          <div className="quote"> <i className="flaticon-quote" /></div>
        </div>
        <div className="testimonials-card-two">
          <div className="rating">
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
            <i className="ri-star-fill" />
          </div>
          <p>“Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa
            vel,
            porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur
            ridiculus.”</p>
          <div className="content">
            <img src="/src/assets/images/testimonials/testimonials-img3.jpg" alt="testimonials" />
            <h3>Jonquil von</h3>
            <span>Photographer</span>
          </div>
          <div className="quote"> <i className="flaticon-quote" /></div>
        </div>
      </div>
    </div>
  </div>
  <div className="blog-area pt-100 pb-70">
  <div className="container">
    <div className="row align-items-center mb-45">
      <div className="col-lg-8 col-md-9">
        <div className="section-title mt-rs-20">
          <h2>Latest from our blogs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut
            labore et dolore.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-3 text-end">
        <Link to="#" className="default-btn">View all blogs</Link >
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div className="blog-card">
          <Link to="#">
            <img src="/src/assets/images/blog/blog-img1.jpg" alt="Blog" /> 
          </Link >
          <div className="content">
            <ul>
              <li><i className="ri-calendar-todo-fill" /> Jan 12,2022 </li>
              <li><i className="ri-price-tag-3-fill" /> <Link to="#">Education</Link ></li>
            </ul>
            <h3><Link to="#">All that is wrong with codding in the field of
                apprentices</Link ></h3>
            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <Link to="#" className="read-btn">Read More</Link >
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card">
          <Link to="#">
            <img src="/src/assets/images/blog/blog-img2.jpg" alt="Blog" />
          </Link >
          <div className="content">
            <ul>
              <li><i className="ri-calendar-todo-fill" /> Jan 13,2022 </li>
              <li><i className="ri-price-tag-3-fill" /> <Link to="tags.html">learning</Link ></li>
            </ul>
            <h3><Link to="#">How to use technology to adapt your talent to the
                world</Link >
            </h3>
            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <Link to="#" className="read-btn">Read More</Link >
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="blog-card">
          <Link to="#">
            <img src="/src/assets/images/blog/blog-img3.jpg" alt="Logo Blog" />
          </Link >
          <div className="content">
            <ul>
              <li><i className="ri-calendar-todo-fill" /> Jan 15,2022 </li>
              <li><i className="ri-price-tag-3-fill" /> <Link to="tags.html">Courses</Link ></li>
            </ul>
            <h3><Link to="#">Here are the things to look for when selecting an
                online
                course</Link ></h3>
            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <Link to="#" className="read-btn">Read More</Link >
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
                <Link to="https://www.twitter.com/" target="_blank">
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
            Copyright @{currentYear}
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

export default MainPage;