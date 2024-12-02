import React from 'react'
import { Link } from 'react-router-dom'
const MyCourses = () => {
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
                    <img src="../src/assets/images/profile1.jpg" height={120} width={120} className="rounded-pill" alt />
                    <span />
                  </div>
                  <h5 className="mt-3 mb-1">Nathaniel Poole</h5>
                  <p>Networking</p>
                  <ul className="list-group profilemenu">
                    <li className="list-group-item"><Link to="edit-/profile"> <i className="ri-shield-user-fill" /> My Profile</Link ></li>
                    <li className="list-group-item"><Link className="active" to="/dashboard"> <i className="ri-bookmark-fill" /> My Courses</Link >
                    </li>
                    <li className="list-group-item"><Link to="/resume-student"> <i className="ri-bookmark-fill" /> Resume</Link >
                    </li>
                    <li className="list-group-item"><Link to="/forgot-password"> <i className="ri-lock-password-fill" /> Reset Password</Link >
                    </li>
                    <li className="list-group-item"><Link to="#" className="logoutbtn2"> <i className="ri-logout-box-fill" />
                        LOGOUT</Link ></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative p-3 p-md-4 shadow-lg">
                  <div className="personal_user_info">
                    <div className="border-bottom">
                      <h4>My Courses </h4>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="videoviews">
                          <Link to="/networking-courses">
                            <img src="../src/assets/images/courses/video1.png" className="img-fluid" alt />
                          </Link >
                          <div className="card-body">
                            <Link to="/networking-courses">
                              <h6>Web Programming</h6>
                            </Link >
                            <ul className="course-list nav">
                              <li><i className="ri-time-fill" /> 10 hr 07 min</li>
                              <li><i className="ri-calendar-fill" /> 18/04/2024</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="videoviews">
                          <Link to="/networking-courses">
                            <img src="../src/assets/images/courses/video2.jpg" className="img-fluid" alt />
                          </Link >
                          <div className="card-body">
                            <Link to="/networking-courses">
                              <h6>Building Successful Business</h6>
                            </Link >
                            <ul className="course-list nav">
                              <li><i className="ri-time-fill" /> 10 hr 07 min</li>
                              <li><i className="ri-calendar-fill" /> 18/04/2024</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="videoviews">
                          <Link to="/networking-courses">
                            <img src="../src/assets/images/courses/video3.jpg" className="img-fluid" alt />
                          </Link >
                          <div className="card-body">
                            <Link to="/networking-courses">
                              <h6>English Pro Course</h6>
                            </Link >
                            <ul className="course-list nav">
                              <li><i className="ri-time-fill" /> 10 hr 07 min</li>
                              <li><i className="ri-calendar-fill" /> 18/04/2024</li>
                            </ul>
                          </div>
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

export default MyCourses
