import React from 'react'
import { Link } from 'react-router-dom'
const RecruitorManager = () => {
  return (
    <div>
      <div>
  {/* <div id="preloader"> */}
    <div id="preloader-area">
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
  </div>
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
                  <Link to="/recruitor-manager" className="nav-link active">
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
  <div className="recruiterbgme ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content">
            <span data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">Welcome to Hiring manager</span>
            <h1 data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Next Generation hiring solution. </h1>
            <p data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Powerful, agile, all-in-one hiring tool for your recruiting needs, built with productivity at heart and loaded with features to help your hair more effectively.</p>
            <div className="banner-form-area" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <button className="default-btn rounded-pill" type="submit">
                Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-img" data-speed="0.05" data-revert="true">
            <img src="/src/assets/images/hiring-manager.png" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true" alt="Man" />
            <div className="right-content job__qui" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <div className="content">
                <img src="/src/assets/images/job-me.png"  />
              </div>
            </div>
            <div className="left-content applicantsuser" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <h5>Applicants</h5>
              <div className="content">
                <img className={50} height={50} src="/src/assets/images/testimonials/testimonials-img1.jpg" alt="User" />
                <div>
                  <h3>San Francisco</h3>
                  <p>2H Ago</p>
                </div>
              </div>
              <div className="content">
                <img className={50} height={50} src="/src/assets/images/testimonials/testimonials-img2.jpg" alt="User" />
                <div>
                  <h3>San francisco</h3>
                  <p>4H Ago</p>
                </div>
              </div>
              <div className="content">
                <img className={50} height={50} src="/src/assets/images/testimonials/testimonials-img3.jpg" alt="User" />
                <div>
                  <h3>San francisco</h3>
                  <p>2day Ago</p>
                </div>
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
  <div className="bg-white py-5">
    <div className="container">
      <div className="title mb-35">
        <h3> We worked with <span>250+ </span> leading universities and companies</h3>
      </div>
      <div className="brand-slider owl-carousel owl-theme">
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
  <div className="hirignProcess">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="hiring__processection p-5" style={{backgroundImage: 'url(/src/assets/images/hiring-process.png)'}}>
            <div className="section-title text-center">
              <h2 className="text-white">End to end hiring process</h2>
              <p className="text-white">
                Recruiten is set up to allow everyone on your team to contribute to the hiring effort. You can easily divvy up the work and get everyone involved
              </p>
            </div>
            <div className="row mt-4">
              <div className="col-md-8">
                <div className="hireone">
                  <img src="/src/assets/images/hire1.jpg" className="img-fluid"  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="hireone">
                  <img src="/src/assets/images/hire2.jpg" className="img-fluid"  />
                </div>
                <div className="hireone">
                  <img src="/src/assets/images/hire3.jpg" className="img-fluid"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="enrolled-areas py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="enrolled-img" data-speed="0.05" data-revert="true">
            <img src="/src/assets/images/Innovatively.png" alt="Enrolled" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="enrolled-content">
            <div className="section-title ps-0 px-lg-5">
              <h2>Innovatively built for recruiters and applicants</h2>
              <p>
                We create engaging experience with our radicitted tool, post on application and let your condide-checkout these way towards on new
              </p>
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

export default RecruitorManager
