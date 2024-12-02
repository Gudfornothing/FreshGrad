import React from 'react'
import { Link } from 'react-router-dom'
import MentorHeaderComponent from './MentorHeaderComponent'
const MentorProfile = () => {
  return (
    <div>
   <MentorHeaderComponent/>   <div className="side-nav-responsive">
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
                    <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill"  />
                    Freshgrad
                    <i className="ri-arrow-down-s-line" />
                  </button>
                  <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                    <Link to="#" className="nav-link-item">
                      Profile
                    </Link >
                    <Link to="#" className="nav-link-item">
                      Mentor Booking
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
    
  <div className="header_space" />
  <div className="mentorprofile121 ptb-70 position-relative o-grid o-grid--wide js-stickyWrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instructors-details-img m-0">
            <div className="card-instrutors shadow position-relative bg-white p-4">
              <div className="mentersvies0121">
                <div className="position-relative menter_pro">
                  <img src="../src/assets/images/instructors/instructors-img2.jpg" className="rounded_01top" alt="Instructor" />
                </div>
                <div className="instructors-details-contents">
                  <div className>
                    <div className="comnam">
                      <h3>Ravi Sharma </h3>
                      <ul className="nav my-2 hkddda justify-content-between text-dark align-items-center">
                        <li className="me-2"><i className="ri-mail-line" /> ravifg@gmail.com
                        </li>
                        <li className="me-2"><i className="ri-phone-line" /> 1234567890</li>
                        <li className="me-2"><i className="ri-map-pin-fill" /> Thane, Mumbai,
                          Maharashtra</li>
                      </ul>
                      <h6>Web designer</h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="reviewsreat mb-3">
                          <span className="review"><i className="ri-star-fill text-warning" />5.0 (18
                            Reviews)</span>
                        </div>
                        <div>
                          <Link to="#"><i className="ri-linkedin-fill" /></Link >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="instructors-details-contents mt-3">
              <div className="card-instrutors shadow bg-white p-4">
                <h5>Skills</h5>
                <div className="skillstopic">
                  <div>Interviewer</div>
                  <div>Trainer</div>
                  <div>Interview Practice</div>
                  <div>Coaching</div>
                </div>
              </div>
            </div>
            <div className="instructors-details-contents mt-3">
              <div className="card-instrutors shadow bg-white p-4">
                <h5>About Mentor</h5>
                <p>
                  Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent
                  sapien
                  massa,
                  convallis a
                  pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at
                  sem.
                  Cras
                  ultricies ligula sed
                  magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices
                  posuere
                  cubilia.
                </p>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Vestibulum ac
                  diam
                  sit
                  amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl
                  tempus
                  convallis
                  quis
                  ac lectus.
                </p>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Vestibulum ac
                  diam
                  sit
                  amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl
                  tempus
                  convallis
                  quis
                  ac lectus.
                </p>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Vestibulum ac
                  diam
                  sit
                  amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl
                  tempus
                  convallis
                  quis
                  ac lectus.
                </p>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Vestibulum ac
                  diam
                  sit
                  amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl
                  tempus
                  convallis
                  quis
                  ac lectus.
                </p>
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                  Vestibulum ac
                  diam
                  sit
                  amet quam
                  vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl
                  tempus
                  convallis
                  quis
                  ac lectus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="courses-details-tab-content shadow p-3 sticky2 js-sticky">
            <div className="courses-details-review-form">
              <h3 className="m-0">What mentees say</h3>
              <div className="review-comments m-0">
                <div className="review-item mt-3 pe-0">
                  <div className="content">
                    <img src="../src/assets/images/courses/instructors1.jpg" alt="Images" />
                    <div className="content-dtls">
                      <h4>Heather Joanne </h4>
                      <span>15 Jan, 2022 AT 06:30 PM</span>
                    </div>
                    <div className="rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-half-fill" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div className="review-item pe-0">
                  <div className="content">
                    <img src="../src/assets/images/courses/instructors1.jpg" alt="Images" />
                    <div className="content-dtls">
                      <h4>Heather Joanne </h4>
                      <span>15 Jan, 2022 AT 06:30 PM</span>
                    </div>
                    <div className="rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-half-fill" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div className="review-item pe-0">
                  <div className="content">
                    <img src="../src/assets/images/courses/instructors1.jpg" alt="Images" />
                    <div className="content-dtls">
                      <h4>Heather Joanne </h4>
                      <span>15 Jan, 2022 AT 06:30 PM</span>
                    </div>
                    <div className="rating">
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-fill" />
                      <i className="ri-star-half-fill" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
              <div className="pagination-area mb-0">
                <Link to="#" className="prev page-numbers">
                  <i className="flaticon-left-arrow" />
                </Link >
                <span className="page-numbers current" aria-current="page">1</span>
                <Link to="#" className="page-numbers">2</Link >
                <Link to="#" className="page-numbers">3</Link >
                <Link to="#" className="next page-numbers">
                  <i className="flaticon-chevron" />
                </Link >
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
    
  )
}

export default MentorProfile
