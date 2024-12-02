import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'

const TrainingProgram = () => {
  return (
    <div>
      <div>
    <HeaderComponent/>
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
                    <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill"  />
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
    
  <div className="header_space" />
  <div className="courses-area py-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <div className="courses-page-sidebar pr-20">
            <div className="courses-page-side-bar-widget">
              <h3 className="title">Categories List</h3>
              <ul className="courses-page-content">
                <li>
                  <Link to="#" className="text-info">Networking</Link >
                </li>
                <li>
                  <Link to="#">Cybersecurity</Link >
                </li>
                <li>
                  <Link to="#">Cloud</Link >
                </li>
                <li>
                  <Link to="#">Ui/Ux Design</Link >
                </li>
              </ul>
            </div>
          </div>
          <div className="bg_gradient p-3 rounded mb-3 gap-3 align-items-center">
            <div className="text-center">
              <img src="../src/assets/images/profile1.jpg" width={155} height={140} className="rounded-pill"  />
            </div>
            <div className="instructors-details-contents w-100 text-center">
              <h3 className="mb-0">Networking Courses </h3>
              <h6 className="sub-title mb-2">3 Chapters left to reach Leavel 4</h6>
              <hr />
              <ol className="progress hireprocessview coursestrash" data-steps={5}>
                <li className="active">
                  <span className="step"><span><i className="ri-check-double-line" /></span></span>
                  <div className="headinghire">
                    <h6>Level 1</h6>
                    <p>Introduction to the course</p>
                  </div>
                </li>
                <li className="active">
                  <span className="step"><span><i className="ri-check-double-line" /></span></span>
                  <div className="headinghire">
                    <h6>Level 2</h6>
                    <p>Number of classes</p>
                  </div>
                </li>
                <li className="active">
                  <span className="step"><span><i className="ri-check-double-line" /></span></span>
                  <div className="headinghire">
                    <h6>Level 3</h6>
                    <p>Total Videos</p>
                  </div>
                </li>
                <li className="active">
                  <span className="step"><span><i className="ri-video-upload-fill" /></span></span>
                  <div className="headinghire">
                    <h6>Level 4</h6>
                    <p>Number of Notes</p>
                  </div>
                </li>
                <li className="done">
                  <span className="step"><span><i className="ri-git-repository-private-fill" /></span></span>
                  <div className="headinghire">
                    <h6>Level 5</h6>
                    <p>Introduction to the course</p>
                  </div>
                </li>
                <li className="done">
                  <span className="step"><span><i className="ri-git-repository-private-fill" /></span></span>
                  <div className="headinghire">
                    <h6>Level 6</h6>
                    <p>Introduction to the course</p>
                  </div>
                </li>
                <li className="done">
                  <span className="step"><span><i className="ri-git-repository-private-fill" /></span></span>
                  <div className="headinghire">
                    <h6>Level 7</h6>
                    <p>Introduction to the course</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <div className="inner-banner inner-banner-bg p-4">
            <div className="inner-title">
              <h3>Networking Courses</h3>
              <p className="text-white">Unlocking the Power of Asynchronous Task Processing with
                Python Celery</p>
            </div>
          </div>
          <div className="courses-details-area pt-20 pb-70">
            <div className="row">
              <div className="col-lg-8">
                <div className="scourse_meta mt-2">
                  <div className="smeta">
                    <img src="../src/assets/images/networking.png" height={70} width={50} className="rounded-pill" alt="author" />
                    <div className="smeta_text">
                      <span>Instructor:</span>
                      <p>
                        <Link to="#">Tony Stark</Link >
                      </p>
                    </div>
                  </div>
                  <div className="smeta">
                    <span>Category:</span>
                    <p>
                      Web Development
                    </p>
                  </div>
                  <div className="smeta">
                    <span>Last Update:</span>
                    <p>
                      13 March, 2024
                    </p>
                  </div>
                </div>
                <div className="courses-details-contact">
                  <div className="tab courses-details-tab">
                    <ul className="tabs">
                      <li>
                        Overview
                      </li>
                      <li>
                        Curriculum
                      </li>
                      <li>
                        Instructor
                      </li>
                      <li>
                        Reviews
                      </li>
                    </ul>
                    <div className="tab_content current active">
                      <div className="tabs_item current">
                        <div className="courses-details-tab-content">
                          <div className="courses-details-into">
                            <h3>Description</h3>
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id
                              enim. Praesent
                              sapien massa, convallis a pellentesque nec, egestas non
                              nisi. Curabitur aliquet quam id dui posuere blandit.
                              Donec rutrum congue
                              leo eget malesuada. Vivamus magna justo, lacinia
                              eget consectetur sed, convallis at tellus. Cras
                              ultricies ligula sed
                              magna dictum porta. Vivamus suscipit tortor eget felis
                              porttitor
                              volutpat. Nulla quis lorem ut libero malesuada feugiat.
                              Vestibulum ante
                              ipsum primis in faucibus orci luctus ultrices posuere.
                            </p>
                            <p>
                              Donec sollicitudin molestie malesuada. Cras ultricies
                              ligula sed magna
                              dictum porta. Curabitur arcu erat, accumsan id imperdiet
                              et, porttitor at sem. Curabitur non nulla sit amet nisl
                              tempus convallis
                              quis ac lectus. Vivamus suscipit tortor felis porttitor
                              volutpat.
                              Curabitur non nulla sit amet nisl tempus convallis quis
                              ac lectus. Proin
                              eget tortor risus. Vivamus suscipit tortor eget.
                            </p>
                          </div>
                          <div className="courses-details-into">
                            <h3>Requirements</h3>
                            <p>
                              Donec sollicitudin molestie malesuada. Cras ultricies
                              ligula sed magna
                              dictum porta. Curabitur arcu erat, accumsan id imperdiet
                              et, porttitor at sem. Curabitur non nulla sit amet nisl
                              tempus convallis
                              quis ac lectus. Vivamus suscipit tortor felis porttitor
                              volutpat. Curabitur non nulla sit amet nisl tempus
                              convallis quis ac
                              lectus. Proin eget tortor risus. Vivamus suscipit tortor
                              eget
                              felis porttitor volutpat.
                            </p>
                            <ul className="courses-details-list">
                              <li>Praesent sapien massa, convallis a pellentesque nec,
                                egestas non
                                nisi.</li>
                              <li>Curabitur aliquet quam id dui posuere blandit.</li>
                              <li>Vivamus magna justo, lacinia eget consectetur sed,
                                convallis at
                                tellus.</li>
                            </ul>
                            <p>
                              Donec sollicitudin molestie malesuada. Cras ultricies
                              ligula sed magna
                              dictum porta. Vivamus suscipit tortor eget felis
                              porttitor
                              volutpat. Donec velit neque, auctor sit amet aliquam
                              vel, ullamcorper
                              sit amet ligula. Curabitur aliquet quam id dui posuere.
                            </p>
                          </div>
                          <div className="courses-details-into">
                            <h3>What you'll learn</h3>
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id
                              enim. Praesent
                              sapien massa, convallis a pellentesque nec, egestas non
                              nisi. Curabitur aliquet quam id dui posuere blandit.
                              Donec rutrum congue
                              leo eget malesuada. Vivamus magna justo, lacinia
                              eget consectetur sed, convallis at tellus.
                            </p>
                            <p>
                              Donec sollicitudin molestie malesuada. Cras ultricies
                              ligula sed magna
                              dictum porta. Curabitur arcu erat, accumsan id imperdiet
                              et, porttitor at sem. Curabitur non nulla sit amet nisl
                              tempus convallis
                              quis ac lectus. Vivamus suscipit tortor felis porttitor
                              volutpat.
                              Curabitur non nulla sit amet nisl tempus convallis quis
                              ac lectus. Proin
                              eget tortor risus. Vivamus suscipit tortor eget.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="courses-details-tab-content">
                          <div className="courses-details-accordion">
                            <ul className="accordion">
                              <li className="accordion-item">
                                <Link className="accordion-title active" to="javascript:void(0)">
                                  <i className="ri-add-fill" />
                                  Introduction
                                </Link >
                                <div className="accordion-content show">
                                  <div className="accordion-content-list">
                                    <div className="accordion-content-left">
                                      <i className="ri-file-text-line" />
                                      Introduction to the course
                                    </div>
                                  </div>
                                  <div className="accordion-content-list">
                                    <div className="accordion-content-left">
                                      <i className="ri-profile-line" />
                                      Number of classes
                                    </div>
                                    <div className="accordion-content-right">
                                      <div className="tag">20 Class</div>
                                    </div>
                                  </div>
                                  <div className="accordion-content-list">
                                    <div className="accordion-content-left">
                                      <i className="ri-play-circle-line" />
                                      Total Videos
                                    </div>
                                    <div className="accordion-content-right">
                                      <div className="tag">10 Video</div>
                                    </div>
                                  </div>
                                  <div className="accordion-content-list">
                                    <div className="accordion-content-left">
                                      <i className="ri-file-text-line" />
                                      Number of Notes
                                    </div>
                                    <div className="accordion-content-right">
                                      <div className="tag">30 Notes</div>
                                    </div>
                                  </div>
                                  <div className="accordion-content-list">
                                    <div className="accordion-content-left">
                                      <i className="ri-time-line" />
                                      Duration
                                    </div>
                                    <div className="accordion-content-right">
                                      <div className="tag">3 Months</div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="courses-details-tab-content">
                          <div className="courses-details-instructor">
                            <h3>About the instructor</h3>
                            <div className="details-instructor">
                              <img src="../src/assets/images/courses/instructors4.jpg" alt="instructor" />
                              <h3>Lauren Handerson</h3>
                              <span>iOS Developer &amp; UI Designer</span>
                            </div>
                            <ul className="course-list">
                              <li> <i className="ri-star-fill" />5 (30+ rating)</li>
                              <li><i className="ri-vidicon-fill" /> 67 lectures</li>
                              <li><i className="ri-time-fill" /> 10 hr 07 min</li>
                            </ul>
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id
                              enim. Praesent
                              sapien massa, convallis a pellentesque nec, egestas non
                              nisi. Curabitur aliquet quam id dui posuere blandit.
                              Donec rutrum congue
                              leo eget malesuada. Vivamus magna justo, lacinia
                              eget consectetur sed, convallis at tellus.
                            </p>
                            <p>
                              Donec sollicitudin molestie malesuada. Cras ultricies
                              ligula sed magna
                              dictum porta. Curabitur arcu erat, accumsan id imperdiet
                              et, porttitor at sem. Curabitur non nulla sit amet nisl
                              tempus convallis
                              quis ac lectus. Vivamus suscipit tortor felis porttitor
                              volutpat.
                              Curabitur non nulla sit amet nisl tempus convallis quis
                              ac lectus. Proin
                              eget tortor risus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="courses-details-tab-content">
                          <div className="courses-details-review-form">
                            <h3>Customer Reviews</h3>
                            <div className="review-title">
                              <div className="rating">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                              </div>
                              <p>Based on 3 reviews</p>
                              <Link to="/networking-courses" className="default-btn btn-right">Write a
                                Review <span /></Link >
                            </div>
                            <div className="review-comments">
                              <div className="review-item">
                                <div className="content">
                                  <img src="../src/assets/images/courses/instructors1.jpg" alt="Images" />
                                  <div className="content-dtls">
                                    <h4>Heather Joanne </h4>
                                    <span>15 Jan, 2022 AT 06:30 PM</span>
                                  </div>
                                </div>
                                <div className="rating">
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-half-fill" />
                                </div>
                                <h3>Good</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                  sed do eiusmod tempor incididunt ut labore et
                                  dolore magna
                                  aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation.
                                </p>
                                <Link to="" className="review-report-link">Report as
                                  Inappropriate</Link >
                              </div>
                              <div className="review-item">
                                <div className="content">
                                  <img src="../src/assets/images/courses/instructors2.jpg" alt="Images" />
                                  <div className="content-dtls">
                                    <h4>Penelope Rachel</h4>
                                    <span>15 Jan, 2022 AT 06:30 PM</span>
                                  </div>
                                </div>
                                <div className="rating">
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-half-fill" />
                                </div>
                                <h3>Good</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut
                                  enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <Link to="/networking-courses" className="review-report-link">Report as
                                  Inappropriate</Link >
                              </div>
                              <div className="review-item">
                                <div className="content">
                                  <img src="../src/assets/images/courses/instructors3.jpg" alt="Images" />
                                  <div className="content-dtls">
                                    <h4>Leonard Richard</h4>
                                    <span> 15 Jan, 2022 AT 06:30 PM</span>
                                  </div>
                                </div>
                                <div className="rating">
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-fill" />
                                  <i className="ri-star-half-fill" />
                                </div>
                                <h3>Good</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut
                                  enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <Link to="/networking-courses" className="review-report-link">Report as
                                  Inappropriate</Link >
                              </div>
                            </div>
                            <div className="review-form">
                              <div className="contact-wrap-form">
                                <div className="contact-form">
                                  <h4>Write a Review</h4>
                                  <form id="contactForm">
                                    <div className="row">
                                      <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                          <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                                        </div>
                                      </div>
                                      <div className="col-lg-6 col-sm-6">
                                        <div className="form-group">
                                          <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-sm-12">
                                        <div className="form-group">
                                          <input type="text" name="website" className="form-control" required data-error="Your website" placeholder="Your Website" />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                          <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message.." defaultValue={""} />
                                        </div>
                                      </div>
                                      <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                          Post A Comment
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
                </div>
              </div>
              <div className="col-lg-4">
                <div className="courses-details-sidebar m-0">
                  <img src="../src/assets/images/networking.png" className="w-100" height={200} alt="Courses" />
                  <div className="content">
                    <div className="course-sidebar">
                      <h3>Course Features</h3>
                      <ul className="scourse_list">
                        <li>
                          <span className="cside-label">
                            <i className="ri-time-fill" /> Duration
                          </span>
                          <span className="cside-value">
                            3 Months
                          </span>
                        </li>
                        <li>
                          <span className="cside-label">
                            <i className="ri-profile-line" /> Class
                          </span>
                          <span className="cside-value">
                            20
                          </span>
                        </li>
                        <li>
                          <span className="cside-label">
                            <i className="ri-shield-user-fill" /> Student’s
                          </span>
                          <span className="cside-value">
                            150
                          </span>
                        </li>
                        <li>
                          <span className="cside-label">
                            <i className="ri-video-fill" /> Video
                          </span>
                          <span className="cside-value">
                            10
                          </span>
                        </li>
                        <li>
                          <span className="cside-label">
                            <i className="ri-bar-chart-grouped-fill" /> Skill Level
                          </span>
                          <span className="cside-value">
                            Advanced
                          </span>
                        </li>
                        <li className="m-0">
                          <span className="cside-label">
                            <i className="ri-global-line" /> Language
                          </span>
                          <span className="cside-value">
                            English
                          </span>
                        </li>
                      </ul>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          I agree that I will not cheat, and I will complete it by myself
                        </label>
                      </div>
                      <div className="text-center">
                        <Link to="/dashboard" className="default-btn">Book Course</Link >
                      </div>
                    </div>
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

    
  )
}

export default TrainingProgram
