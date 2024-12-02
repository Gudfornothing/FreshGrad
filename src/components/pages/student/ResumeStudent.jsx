import React from 'react'
import { Link } from 'react-router-dom'
const ResumeStudent = () => {
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
                  <Link to="/training-program-student">Training Program</Link >
                </li>
                

                <li className="nav-item">
                  <Link className="nav-link" to="/student-jobs">Jobs</Link >
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
                    <li className="list-group-item"><Link to="/dashboard"> <i className="ri-bookmark-fill" /> My Courses</Link >
                    </li>
                    <li className="list-group-item"><Link className="active" to="/resume-student"> <i className="ri-bookmark-fill" /> Resume</Link >
                    </li>
                    <li className="list-group-item"><Link to="/forgot-password"> <i className="ri-lock-password-fill" /> Reset Password</Link >
                    </li>
                    <li className="list-group-item"><Link to="#" className="logoutbtn2"> <i className="ri-logout-box-fill" />
                        LOGOUT</Link ></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative shadow-lg">
                  <div className="resumefile">
                    <page size="A4">
                      <div className="d-flex">
                        <div className="leftPanel">
                          <img src="../src/assets/images/profile1.jpg" />
                          <div className="details">
                            <div className="item bottomLineSeparator">
                              <h2>
                                CONTACT
                              </h2>
                              <div className="smallText">
                                <p>
                                  <i className="fa fa-phone contactIcon" aria-hidden="true" />
                                  (+33) 777 777 77
                                </p>
                                <p>
                                  <i className="fa fa-envelope contactIcon" aria-hidden="true" />
                                  <Link to="mailto:lorem@ipsum.com@gmail.com">
                                    lorem@ipsum.com
                                  </Link >
                                </p>
                                <p>
                                  <i className="fa fa-map-marker contactIcon" aria-hidden="true" />
                                  New York, USA
                                </p>
                                <p>
                                  <i className="fa fa-linkedin-square contactIcon" aria-hidden="true" />
                                  <Link to="#">
                                    in/loremipsum
                                  </Link >
                                </p>
                                <p className="lastParagrafNoMarginBottom">
                                  <i className="fa fa-skype contactIcon" aria-hidden="true" />
                                  <Link to="#">
                                    loremipsum
                                  </Link >
                                </p>
                              </div>
                            </div>
                            <div className="item bottomLineSeparator">
                              <h2>
                                SKILLS
                              </h2>
                              <div className="smallText">
                                <div className="skill">
                                  <div>
                                    <span>Accounting</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">14</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Word</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">3</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Powerpoint</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">3</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Accounting</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">2</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Marketing</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">2</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Photoshop</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">2</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>French</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">2</span>
                                    <span className="alignleft">years</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>English</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span className="alignright">1</span>
                                    <span className="alignleft">year</span>
                                  </div>
                                </div>
                                <div className="skill">
                                  <div>
                                    <span>Management</span>
                                  </div>
                                  <div className="yearsOfExperience">
                                    <span>1 year</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="item">
                              <h2>
                                EDUCATION
                              </h2>
                              <div className="smallText">
                                <p className="bolded white">
                                  Bachelor of Economics
                                </p>
                                <p>
                                  The University of Sydney
                                </p>
                                <p>
                                  2023 - 2042
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rightPanel">
                          <div>
                            <h3>
                              Jhon Doe
                            </h3>
                            <div className="smallText">
                              <h5>
                                Accountant
                              </h5>
                            </div>
                          </div>
                          <div>
                            <h3>
                              About me
                            </h3>
                            <div className="smallText">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis, justo sed
                                feugiat pulvinar., quam ipsum tincidunt enim, ac gravida est metus sit amet neque.
                                Curabitur ut arcu ut nunc finibus accumsan id id elit.
                              </p>
                              <p>
                                Vivamus non magna quis neque viverra finibus quis a tortor.
                              </p>
                            </div>
                          </div>
                          <div className="workExperience">
                            <h4>
                              Work experience
                            </h4>
                            <ul>
                              <li>
                                <div className="jobPosition">
                                  <span className="bolded">
                                    Accountant
                                  </span>
                                  <span>
                                    Jun 2014 - Sept 2015
                                  </span>
                                </div>
                                <div className="projectName bolded">
                                  <span>
                                    Accounting project name | Company name
                                  </span>
                                </div>
                                <div className="smallText">
                                  <p>
                                    Quisque rutrum mollis ornare. In pharetra diam libero, non interdum dui imperdiet
                                    quis. Quisque aliquam sapien in libero finibus sodales. Mauris id commodo metus. In
                                    in laoreet dolor.
                                  </p>
                                  <ul>
                                    <li>
                                      Integer commodo ullamcorper mauris, id condimentum lorem elementum sed. Etiam
                                      rutrum eu elit ut hendrerit. Vestibulum congue sem ac auctor semper. Aenean quis
                                      imperdiet magna. Sed eget ullamcorper enim. Vestibulum consequat turpis eu neque
                                      efficitur blandit sed sit amet neque. Curabitur congue semper erat nec blandit.
                                    </li>
                                  </ul>
                                  <p>
                                    <span className="bolded">Skills: </span>Accounting, Word, Powerpoint
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="jobPosition">
                                  <span className="bolded">
                                    Digital Marketing Expert
                                  </span>
                                  <span>
                                    Nov 2020 - Sept 2021
                                  </span>
                                </div>
                                <div className="projectName bolded">
                                  <span>
                                    Project name | Company name
                                  </span>
                                </div>
                                <div className="smallText">
                                  <p>
                                    Morbi rhoncus, tortor vel luctus tincidunt, sapien lacus vehicula augue, vitae
                                    ultrices eros diam eget mauris. Aliquam dictum nulla vel augue tristique bibendum.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas.
                                  </p>
                                  <ul>
                                    <li>
                                      <p>
                                        Phasellus ac accumsan ligula. Morbi quam massa, pellentesque nec nunc nec,
                                        consectetur gravida dolor. Mauris vulputate sagittis pellentesque. Donec luctus
                                        lorem luctus purus condimentum, id ultrices lacus aliquam.
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Quisque et lorem sagittis lacus lobortis euismod non id mi. Nulla sed tincidunt
                                        libero, placerat imperdiet magna. Quisque lectus quam, viverra eu congue ut,
                                        congue vitae metus. Sed in varius sapien. Cras et elementum tellus.
                                      </p>
                                    </li>
                                  </ul>
                                  <p>
                                    <span className="bolded">Skills: </span> Writing, Photoshop
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="jobPosition">
                                  <span className="bolded">
                                    Accountant
                                  </span>
                                  <span>
                                    Jun 2017 - May 2020
                                  </span>
                                </div>
                                <div className="projectName bolded">
                                  <span>
                                    Project name | Company name
                                  </span>
                                </div>
                                <div className="smallText">
                                  <p>
                                    Maecenas eget semper sapien. Sed convallis nunc egestas dui convallis dictum id nec
                                    metus. Donec vestibulum justo mauris, ac congue lacus tincidunt id. Vivamus rhoncus
                                    risus ac ex varius gravida. Donec eget ullamcorper ipsum.
                                  </p>
                                  <ul>
                                    <li>
                                      <p>
                                        Maecenas auctor euismod felis vel semper. Nulla facilisi. Quisque quis odio dui.
                                        Morbi venenatis magna quis libero mollis facilisis. Ut semper, eros eu dictum
                                        efficitur, ligula felis aliquet ante, sed commodo odio nisi a augue.
                                      </p>
                                    </li>
                                  </ul>
                                  <p>
                                    <span className="bolded">Skills: </span>Management, French
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </page>
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

export default ResumeStudent
