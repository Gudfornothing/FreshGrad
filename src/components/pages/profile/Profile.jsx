import React from 'react'
import { Link } from 'react-router-dom'
const Profile = () => {
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

              <div className="others-options">
                <div className="navbar-category">
                  <div className="dropdown category-list-dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="/src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt />
                      Freshgrad
                      <i className="ri-arrow-down-s-line" />
                    </button>
                    <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                      <Link to="/profile" className="nav-link-item">
                        <i className="flaticon-user" />
                        Edit Profile
                      </Link >
                      <Link to="/dashboard" className="nav-link-item">
                        <i className="ri-bookmark-fill" />
                        My Courses
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
  <div className="stepbg">
    <div className="header_space" />
    <div className="client_filter-job pt-2 pb-5">
      <div className="stepsForm">
        <form method="post" id="msform">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="sf-steps profileview border shadow-lg">
                  <div className="profile_avtar pt-3 pt-md-5">
                    <img src="/src/assets/images/profile1.jpg" height={120} width={120} className="rounded-pill" alt />
                    <span />
                  </div>
                  <h5 className="mt-3 mb-1">Nathaniel Poole</h5>
                  <p>Networking</p>
                  <ul className="list-group profilemenu">
                    <li className="list-group-item"><Link className="active" to="/profile"> <i className="ri-shield-user-fill" /> My Profile</Link ></li>
                    <li className="list-group-item"><Link to="/dashboard"> <i className="ri-bookmark-fill" /> My Courses</Link > </li>
                    <li className="list-group-item"><Link to="/resume-student"> <i className="ri-bookmark-fill" /> Resume</Link > </li>
                    <li className="list-group-item"><Link to="/forgot-password"> <i className="ri-lock-password-fill" /> Reset Password</Link >
                    </li>
                    <li className="list-group-item"><Link to="#" className="logoutbtn2"> <i className="ri-logout-box-fill" />
                        LOGOUT</Link ></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative p-3 p-md-4 shadow-lg">
                  <div className="personal_user_info border p-4 rounded">
                    <div className="d-flex justify-content-between">
                      <h4>Personal Information</h4>
                      <Link to="edit-/profile" className="default-btn rounded p-2">Edit <i className="ri-edit-2-fill" /></Link >  
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>First Name</p>
                          <h6>Nathaniel</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Last Name</p>
                          <h6>Poole</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Email ID</p>
                          <h6>freshgrad@gmail.com</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Phone Number</p>
                          <h6>01 1234567890</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Dob</p>
                          <h6>14 July 1995</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="personal_user_info mt-4 border p-4 rounded">
                    <div className="d-flex justify-content-between">
                      <h4>Address</h4>
                      <Link to="edit-/profile" className="default-btn rounded p-2">Edit <i className="ri-edit-2-fill" /></Link >    
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Country</p>
                          <h6>USA</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>State</p>
                          <h6>Alabama</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>City</p>
                          <h6>Andalusia</h6>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group info__profile">
                          <p>Citizen</p>
                          <h6>United States</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Profile
