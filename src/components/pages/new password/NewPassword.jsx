import React from 'react'
import { Link } from 'react-router-dom'
const NewPassword = () => {
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
  <div className="user-area p-0 p-md-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-0 d-none d-md-block d-lg-block">
          <div className="user_login">
            <img src="/src/assets/images/login_2.gif" className="imgk-fluid w-100" alt="login-banner" />
          </div>
        </div>
        <div className="col-lg-6 d-flex p-0">
          <div className="user-all-form userlogin position-relative">
            <div className="login_bottom">
              <img src="/src/assets/images/login-bottom.png" alt />
            </div>
            <div className="contact-form m-0 py-0">
             <img src="/src/assets/images/logos/logo-full.png" className="logo_login rounded-pill" alt="Logo" />

              <h3 className="user-title"> Create New Password</h3>
              <form id="contactForms" className="mt-2">
                <div className="row">
                  <div className="col-12 col-lg-12">
                    <div className="form-floating form-group">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="xxxxxxxx" />
                      <label htmlFor="floatingPassword">New Password</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12">
                    <div className="form-floating form-group">
                      <input type="password" className="form-control" id="floatingPassword" placeholder="xxxxxxxx" />
                      <label htmlFor="floatingPassword">Confirm password</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn w-100 rounded">
                      SAVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default NewPassword
