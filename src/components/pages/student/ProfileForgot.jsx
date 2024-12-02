import React from 'react'
import { Link } from 'react-router-dom'
const ProfileForgot = () => {
  return (
    <div>
      <div>
  <title> Profile </title>
  <link rel="icon" type="image/png" to="../src/assets/images/favicon.png" />
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to="/">
                <img src="../src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link >
            </div>
          </div>
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
    </div>
  </div>
  <div className="header_space" />
  <div className="stepbg">
    <div className="client_filter-job pt-2 pb-5">
      <div className="stepsForm">
        <form method="post" id="msform">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="sf-steps profileview border shadow-lg">
                  <div className="profile_avtar pt-3 pt-md-5">
                    <img src="../src/assets/images/profile1.jpg" height={120} width={120} className="rounded-pill" alt />
                    <span />
                  </div>
                  <h5 className="mt-3 mb-1">Nathaniel Poole</h5>
                  <p>Networking</p>
                  <ul className="list-group profilemenu">
                    <li className="list-group-item"><Link to="edit-/profile"> <i className="ri-shield-user-fill" /> My Profile</Link ></li>
                    <li className="list-group-item"><Link to="/dashboard"> <i className="ri-bookmark-fill" /> My Courses</Link >
                    </li>
                    <li className="list-group-item"><Link to="/resume-student"> <i className="ri-bookmark-fill" /> Resume</Link >
                    </li>
                    <li className="list-group-item"><Link className="active" to="/forgot-password"> <i className="ri-lock-password-fill" /> Reset Password</Link >
                    </li>
                    <li className="list-group-item"><Link to="#" className="logoutbtn2"> <i className="ri-logout-box-fill" />
                        LOGOUT</Link ></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative p-3 p-md-4 shadow-lg">
                  <div className="sf-steps-form personal_user_info">
                    <h4>Reset Password</h4>
                    <div className="row">          
                      <div className="col-12 col-lg-12">
                        <div className="form-groups emailforgot">
                          <label>Email address</label>
                          <input type="email" placeholder="ravi@gmail.com" defaultValue="ra*****@gmail.com" disabled />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <Link type="submit" className="default-btn py-2 rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                          Send OTP
                        </Link >
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
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">OTP VERIFICATION</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div className="title">
            <h6 className="info">An otp has been sent to <Link to="#"> ravi*****@gmail.com</Link ></h6>
            <p className="mb-3">Please enter OTP to verify</p>
          </div>
          <div className="form-floating form-group">
            <div className="otp-input-fields">
              <input type="number" className="otp__digit otp__field__1" />
              <input type="number" className="otp__digit otp__field__2" />
              <input type="number" className="otp__digit otp__field__3" />
              <input type="number" className="otp__digit otp__field__4" />
              <input type="number" className="otp__digit otp__field__5" />
              <input type="number" className="otp__digit otp__field__6" />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <Link type="button" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className="default-btn py-2 rounded w-100">Verify</Link >
        </div>
      </div>
    </div>
  </div>
  {/* otp popup */}
  <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">New Password</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form className="form_field">
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input type="text" className="form-control" id="password" placeholder="password" required />
            </div> 
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="text" className="form-control" id="password" placeholder="confirm password" required />
            </div> 
          </form>
        </div>
        <div className="modal-footer">
          <Link className="default-btn py-2 rounded w-100">Save</Link >
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProfileForgot
