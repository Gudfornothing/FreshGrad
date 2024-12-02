import React from 'react'
import { Link } from 'react-router-dom'
const TermsAndConditions = () => {
  return (
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
    </div>
    <div className="preloader-section preloader-left" />
    <div className="preloader-section preloader-right" />
  {/* </div> */}
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
          <li className><Link className="grey-text" to="#">Google</Link ></li>
          <li className><Link className="grey-text" to="#">Apple</Link ></li>
          <li className><Link className="grey-text" to="#">Microsoft</Link ></li>
          <li className><Link className="grey-text" to="#">Github</Link ></li>
        </ul>
      </div>
    </div>
  </form> 
</div>

              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
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
              <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
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
  <div className="terms-conditions-area pt-70 pb-70">
    <div className="container">
      <div className="section-title">
        <span>Terms &amp; Conditions</span>
        <h2>Ledu Terms &amp; Conditions</h2>
      </div>
      <div className="row pt-45">
        <div className="col-lg-12">
          <div className="single-content">
            <h3>Legal Disclaimer</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
          <div className="single-content">
            <h3>01. Credit Reporting Terms of Service</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
          <div className="single-content">
            <h3>02. Ownership of Site Agreement to Terms of Use</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
          <div className="single-content">
            <h3>03. Provision of Services</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
          <div className="single-content">
            <h3>04. Limitation of Liability</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
          <div className="single-content">
            <h3>05. Accounts, Passwords and Security</h3>
            <p>
              Maecenas non sem ex. Nullam ac augue vel turpis fringilla maximus. Vivamus commodo laoreet
              augue non porta. Nam egestas dui turpis, non pulvinar nisi
              rhoncus eu. Phasellus et sollicitudin nulla, at efficitur nunc. Quisque et neque commodo,
              blandit lacus malesuada, scelerisque ante. Suspendisse lacinia
              tristique justo, vitae ornare ipsum interdum sed. Vestibulum porttitor urna eget nunc
              porttitor rutrum. Aliquam tempor sapien orci, quis mollis velit laoreet
              sit amet. Morbi luctus magna tellus, quis accumsan nisi cursus id. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed varius convallis massa, sed
              ultrices dolor fermentum id.
            </p>
            <p>
              Vestibulum eu aliquet justo. Aenean at mauris leo. Etiam placerat ac turpis ac feugiat.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Fusce velit nibh, consequat sed mi in, consectetur
              posuere erat. Ut mauris arcu, finibus quis lectus et, hendrerit
              rutrum erat. Integer varius pharetra arcu, et rhoncus leo commodo sed. Nullam sollicitudin
              pulvinar pharetra. In ut lacinia sem. Nunc vel ex sed sapien hendrerit consequat pharetra a
              metus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="newsletter-area section-bg ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-title mt-rs-20">
            <span>ARE YOU IMPRESSED FOR AMAZING SERVICES?</span>
            <h2>Subscribe our newsletter</h2>
          </div>
        </div>
        <div className="col-lg-7">
          <form className="newsletter-form" data-toggle="validator" method="POST">
            <input type="email" className="form-control" placeholder="Enter Your Email Address" name="EMAIL" required autoComplete="off" />
            <button className="subscribe-btn" type="submit">
              Subscribe Now <i className="flaticon-paper-plane" />
            </button>
            <div id="validator-newsletter" className="form-result" />
          </form>
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

    
  )
}

export default TermsAndConditions
