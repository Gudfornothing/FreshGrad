import React from 'react'
import { Link } from 'react-router-dom'
const TrainerMentors = () => {
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
                  <Link to="/training-program" className="nav-link">
                    Training Programs
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/recruitor-manager" className="nav-link">
                    Recruiter
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/trainer-mentors" className="nav-link active">
                    Mentorship</Link >
                </li>
                <li className="nav-item">
                  <Link to="/jobs" className="nav-link">
                    Jobs
                  </Link >
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
  <div className="banner-area bg-white ptb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content">
            <span data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">FOR
              A BETTER FUTURE</span>
            <h1 data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Take your team collaboration to the next level</h1>
            <p data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Book a session with freshgrad mentors across domain &amp; work together to build your career!
            </p>
            <div className="banner-form-area" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <Link to="/mentor" className="default-btn rounded" type="submit">
                Find Mentors
              </Link >
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
  <div className="play-area pt-20">
    <div className="container">
      <div className="title mb-4">
        <h2> We worked with <span>250+ </span> leading universities and companies</h2>
      </div>
      <div className="brand-slider owl-carousel owl-theme pb-100">
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client1.png" className="brand-item-logo1" alt="Images" />
        </div>
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client2.png" className="brand-item-logo1" alt="Images" />
        </div>
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client3.png" className="brand-item-logo1" alt="Images" />
        </div>
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client4.png" className="brand-item-logo1" alt="Images" />
        </div>
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client5.png" className="brand-item-logo1" alt="Images" />
        </div>
        <div className="brand-item">
          <img src="/src/assets/images/client-logo/client6.png" className="brand-item-logo1" alt="Images" />
        </div>
      </div>
    </div>
  </div>
  <div className="instructors-area ">
    <div className="container">
      <div className="section-title text-center mb-45">
        <h2>Meet our top instructor</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img1.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Sally</Link ></h3>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img2.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Jesse</Link ></h3>
              <span>Content strategist</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img3.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Lance</Link ></h3>
              <span>Photographer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img4.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Jonquil</Link ></h3>
              <span>Art director</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img5.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Oliva</Link ></h3>
              <span>Web designer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img6.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Carol</Link ></h3>
              <span>Chief programmer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img7.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">Jessica</Link ></h3>
              <span>Creative writer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="instructors-card">
            <Link to="/trainer-details">
              <img src="/src/assets/images/instructors/instructors-img8.jpg" alt="Team Images" />
            </Link >
            <div className="content">
              <h3><Link to="/trainer-details">David charest</Link ></h3>
              <span>Marketing director</span>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <Link to="/mentor" className="default-btn rounded" type="submit">
            All Mentors
          </Link >
        </div>
      </div>
    </div>
  </div>
  <div className="enrolled-areas">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="enrolled-content">
            <div className="section-title">
              <h2>Become a Mentor &amp; Guide FreshGrad Talent!</h2>
              <p>
                Join the community of 2000+ mentors &amp; empower future leaders.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="enrolled-img" data-speed="0.05" data-revert="true">
            <img src="/src/assets/images/mentor-banner.png" alt="Enrolled" />
            <div className="left-content">
              <div className="enrolled-img-content">
                <i className="flaticon-reading-book active" />
                <div className="content">
                  <h3>110k+ students</h3>
                  <p>Learn daily</p>
                </div>
              </div>
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
  </footer></div>

    </div>
  )
}

export default TrainerMentors
