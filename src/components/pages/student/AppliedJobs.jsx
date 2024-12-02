import React from 'react'
import { Link } from 'react-router-dom'
const AppliedJobs = () => {
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
                  <Link className="nav-link active" to="/jobs">Jobs</Link >
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
  <div className="recruiter_list pb-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-2">
          <ul className="nav nav-pills tabs_signup hiredpppp justify-content-start gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/student-jobs">All Jobs</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/applied-jobs">Applied</Link >
            </li>
          </ul>
        </div>
        <div className="col-12">
          <form>
            <div className="searchlocation">
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/search-icon.svg" alt />
                </div>
                <div className="input-field">
                  <div className="ca-search-form-container">
                    <div className="ca-search-input-container">
                      <div className="ca-search-typewriter-container">
                        <span id="ca-typewriter-here" />
                      </div>
                      <input type="text" id="ca-search-input" className="ca-search-input" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/location-icon.svg" alt />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="USA, Florida" className="form-control" required />
                </div>
              </div>
              <div className="input-field ad121">
                <input type="submit" defaultValue="Search" className="submit_btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="left_recruiterlists row">
        <div className="col-md-4 col-lg-4">
          <div className="sticky-header">
            <div className="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <div className="card_rec position-relative">
                  <Link to="#" className="btn-sm alert alert-success rounded-pill position-absolute top-0 end-0 py-1"><i className="ri-check-double-line" /> Applied</Link >
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title"><i className="ri-community-line" /> V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <div className="card_rec position-relative">
                  <Link to="#" className="btn-sm alert alert-success rounded-pill position-absolute top-0 end-0 py-1"><i className="ri-check-double-line" /> Applied</Link >
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title"><i className="ri-community-line" /> V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png" className alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <Link to="#" className="default-btn bg-success rounded py-1"><i className="ri-check-double-line h6 mb-1 me-2" /> Applied</Link >
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-time-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Application Deadline </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-eye-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Impressions </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-calendar-2-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Calendar </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Job Description</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png" className alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <Link to="#" className="default-btn bg-success rounded py-1"><i className="ri-check-double-line h6 mb-1 me-2" /> Applied</Link >
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-time-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Application Deadline </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-eye-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Impressions </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-calendar-2-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Calendar </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Job Description</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
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

export default AppliedJobs
