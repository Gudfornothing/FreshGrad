import React from 'react'
import { Link } from 'react-router-dom'

const Jobs = () => {
  return (
    <div>
      <div>
  {/* <div id="preloader"> */}
    {/* <div id="preloader-area">
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
    </div> */}
    {/* <div className="preloader-section preloader-left" />
    <div className="preloader-section preloader-right" /> */}
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
                  <Link to="/recruitor-manager" className="nav-link">
                    Recruiter
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/trainer-mentors" className="nav-link">
                    Mentorship</Link >
                </li>
                <li className="nav-item">
                  <Link to="/jobs" className="nav-link active">
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
  <div className="recruiterbgme jobbgre py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content">
            <span data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">Welcome to Jobs manager</span>
            <h1 data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Easy way to get your dream jobs </h1>
            <p data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              Fill your job in hours, not weeks. Search for free.</p>
            <div className="banner-form-area" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <Link to="/jobs" className="default-btn rounded-pill" type="submit">
                Search Jobs
              </Link >
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-img" data-speed="0.05" data-revert="true">
            <img src="/src/assets/images/job-banner.webp" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true" alt="Man" />
            <div className="right-content kkkkkdd job__qui" data-aos="fade-down" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <div className="content">
                <img src="/src/assets/images/job-2.webp"  />
              </div>
            </div>
            <div className="left-content kkkkkddsadf applicantsuser" data-aos="fade-up" data-aos-delay={900} data-aos-duration={1000} data-aos-once="true">
              <img src="/src/assets/images/job-1.webp"  />
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
  <div className="instructors-area py-5">
    <div className="container">
      <div className="row align-items-center mb-45">
        <div className="col-lg-8 col-md-9">
          <div className="section-title mt-rs-20">
            <h2>Browse by category</h2>
            <p>
              Find the job that’s perfect for you. about 800+ new jobs everyday
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="categoryjobs">
            <div className="image-left d-inline-flex">
              <img decoding="async" alt="Human Resource" src="/src/assets/images/icon/customer-service.svg" width={42} height={42} />
            </div>
            <div className="text-info-right">
              <h4>
                Human Resource </h4>
              <p className="font-xs mb-0">
                No Job Available </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categoryjobs">
            <div className="image-left d-inline-flex">
              <img loading="lazy" decoding="async" alt="Market Research" src="/src/assets/images/icon/research.svg" width={42} height={42} />
            </div>
            <div className="text-info-right">
              <h4>
                Market Research </h4>
              <p className="font-xs mb-0">
                1 Job Available </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categoryjobs">
            <div className="image-left d-inline-flex">
              <img loading="lazy" decoding="async" alt="Software" src="/src/assets/images/icon/marketing.svg" width={42} height={42} />
            </div>
            <div className="text-info-right">
              <h4>
                Software </h4>
              <p className="font-xs mb-0">
                No Job Available </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categoryjobs">
            <div className="image-left d-inline-flex">
              <img loading="lazy" decoding="async" alt="Marketing & Sale" src="/src/assets/images/icon/sale.svg" width={42} height={42} />
            </div>
            <div className="text-info-right">
              <h4>
                Marketing &amp; Sale </h4>
              <p className="font-xs mb-0">
                No Job Available </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="categoryjobs">
            <div className="image-left d-inline-flex">
              <img decoding="async" alt="Content Writer" src="/src/assets/images/icon/content-writer.svg" width={42} height={42} />
            </div>
            <div className="text-info-right">
              <h4>
                Content Writer </h4>
              <p className="font-xs mb-0">
                4 Jobs Available </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hiringbanner">
    <div className="container">
      <div className="row">
        <div className="col-md-13">
          <div className="hiringviedessd">
            <div>
              <span>WE ARE</span>
              <h1>HIRING</h1>
            </div>
            <div>
              <p>Let’s Work Together &amp; Explore Opportunities
              </p>
            </div>
            <Link to="#" className="default-btn">Apply Now</Link >
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
            <h2>Jobs of the day</h2>
            <p>
              Search and connect with the right candidates faster
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 text-end">
          <Link to="/jobs" className="default-btn rounded">All Jobs</Link >
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-4">
          <div className="categoryjobs joblist010">
            <div className="card_rec position-relative">
              <div className="mentersvies0121">
                <div className="companylogos position-relative">
                  <img src="/src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className="comnam">
                    <h3>Python Developer </h3>
                    <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                  </div>
                </div>
              </div>
              <p className="perographsv">
                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
              </p>
              <div className="businessmen">
                <div><i className="ri-briefcase-4-fill" /> 5 Applied</div>
                <div><i className="ri-calendar-2-line" />10 days left</div>
              </div>
              <Link to="#" className="rightareee"><i className="ri-arrow-right-up-line" /></Link >
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="categoryjobs joblist010">
            <div className="card_rec position-relative">
              <div className="mentersvies0121">
                <div className="companylogos position-relative">
                  <img src="/src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className="comnam">
                    <h3>Python Developer </h3>
                    <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                  </div>
                </div>
              </div>
              <p className="perographsv">
                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
              </p>
              <div className="businessmen">
                <div><i className="ri-briefcase-4-fill" /> 5 Applied</div>
                <div><i className="ri-calendar-2-line" />10 days left</div>
              </div>
              <Link to="#" className="rightareee"><i className="ri-arrow-right-up-line" /></Link >
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="categoryjobs joblist010">
            <div className="card_rec position-relative">
              <div className="mentersvies0121">
                <div className="companylogos position-relative">
                  <img src="/src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className="comnam">
                    <h3>Python Developer </h3>
                    <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                  </div>
                </div>
              </div>
              <p className="perographsv">
                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
              </p>
              <div className="businessmen">
                <div><i className="ri-briefcase-4-fill" /> 5 Applied</div>
                <div><i className="ri-calendar-2-line" />10 days left</div>
              </div>
              <Link to="#" className="rightareee"><i className="ri-arrow-right-up-line" /></Link >
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="categoryjobs joblist010">
            <div className="card_rec position-relative">
              <div className="mentersvies0121">
                <div className="companylogos position-relative">
                  <img src="/src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className="comnam">
                    <h3>Python Developer </h3>
                    <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                  </div>
                </div>
              </div>
              <p className="perographsv">
                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
              </p>
              <div className="businessmen">
                <div><i className="ri-briefcase-4-fill" /> 5 Applied</div>
                <div><i className="ri-calendar-2-line" />10 days left</div>
              </div>
              <Link to="#" className="rightareee"><i className="ri-arrow-right-up-line" /></Link >
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="categoryjobs joblist010">
            <div className="card_rec position-relative">
              <div className="mentersvies0121">
                <div className="companylogos position-relative">
                  <img src="/src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className="comnam">
                    <h3>Python Developer </h3>
                    <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                  </div>
                </div>
              </div>
              <p className="perographsv">
                Eureka Outsourcing Solutions is hiring for the role of Customer Service Representative!
              </p>
              <div className="businessmen">
                <div><i className="ri-briefcase-4-fill" /> 5 Applied</div>
                <div><i className="ri-calendar-2-line" />10 days left</div>
              </div>
              <Link to="#" className="rightareee"><i className="ri-arrow-right-up-line" /></Link >
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
                We create engaging experience with our radicitted tool, post on application and let your
                condide-checkout these way towards on new
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
  </footer>
</div>

    
  )
}

export default Jobs
