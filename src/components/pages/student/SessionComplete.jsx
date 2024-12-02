import React from 'react'
import { Link } from 'react-router-dom'
const SessionComplete = () => {
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
                  <Link className="nav-link active" to="/training-program">Training Program</Link >
                </li>
               <li className="nav-item">
  <Link className="nav-link" to="/coaching-center">Coaching Center</Link >
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
  <style dangerouslySetInnerHTML={{__html: "\n.right_fullscreen {\n    position: absolute;\n    z-index: 1;\n    font-size: 20px;\n    right: 10px;\n    top: 10px;\n}\n\n.tabs_item.panel.panel-default.panel-fullscreen .courses-details-accordion {\n    margin: 0;\n}\n\n.tabs_item.panel.panel-default .ri-fullscreen-exit-line {\n    display: none;\n}\n\n.tabs_item.panel.panel-default.panel-fullscreen .ri-fullscreen-exit-line {\n    display: block;\n}\n\n.tabs_item.panel.panel-default.panel-fullscreen .ri-fullscreen-line {\n    display: none;\n}\n\n\n.tabs_item.panel.panel-default.panel-fullscreen .gallery-boxes .gal-descrip {\n    height: calc(100vh - 0vh);\n}\n\n.tabs_item.panel.panel-default.panel-fullscreen .gal-tabs {\n    text-align: center;\n    background: linear-gradient(0deg, #2f2f2f70, transparent);\n    float: left;\n    width: 100%;\n    padding: 12px 20px;\n    position: absolute;\n    bottom: 0;\n}\n\n.tabs_item.panel.panel-default.panel-fullscreen .courses-items video {\n    height: calc(100vh - 20vh);\n}\n\n.tabs_item.panel.panel-default .gal-tabs {\n    margin-top: 10px;\n}\n\n.tabs_item.panel-fullscreen {\n    display: block;\n    z-index: 9999;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    overflow: auto;\n}\n\n\n.headingnotes1 {\n    color: darkslategray;\n    font-weight: bold;\n    font-size: 1.1em;\n}\n\n.heading-tow {\n    color: rgb(7, 117, 117);\n    font-weight: bold;\n}\n\n\n.printing:after {\n    content: \"|\";\n    color: #0f0;\n    animation: blink 0.66s steps(3, start) infinite;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n" }} />
  <div className="courses-area py-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-lg-3">
          <div className="inner-banner inner-banner-bg">
            <div className="inner-title p-3">
              <h4 className="text-white">Networking Courses</h4>
              <p className="text-white small">Unlocking the Power of Asynchronous Task Processing with
                Python Celery</p>
            </div>
          </div>
          <div className="bg_gradient p-3 rounded mb-3 gap-3 align-items-center">
            <div className="instructors-details-contents w-100">
              <div className="d-flex gap-3">
                <img width={60} className="rounded-pill" src="../src/assets/images/instructors/instructors-img2.jpg" alt />
                <div>
                  <p className="mt-2 mb-0">Mentor</p>
                  <h5 className="mb-0">Tony Stark</h5>
                </div>
              </div>
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
          <div className="courses-details-area pb-70">
            <div className="courses-details-contact">
              <div className="tabs_item panel panel-default">
                <div className="courses-details-tab-content position-relative">
                  <div className="courses-details-accordion">
                    <div className="gallery-boxes m-0">
                      <div className="gal-box galcurr">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3"><span className="ri-shield-user-line" />
                            Introduction to the course</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3"><span className="ri-play-circle-line" /> Number of classes</h5>
                          <div className="courses-items p-2">
                            <video width="100%" controls>
                              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
                              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
                            </video>
                            <div className="contend pt-2">
                              <h6> Networking</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3">Basics in Education</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3"><span className="ri-file-text-line" /> Number of Notes</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3">Session 5</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3">Session 6</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                      <div className="gal-box">
                        <Link to="#" className="right_fullscreen panel-fullscreen" role="button" title="Toggle fullscreen"><i className="ri-fullscreen-line" /><i className="ri-fullscreen-exit-line" /></Link >
                        <div className="gal-descrip">
                          <h5 className="border-bottom pb-3">Session 7</h5>
                          <div className="card-instrutors screen print p-4 pt-0">
                            <h4 className="headingnotes1">Basics in Education</h4>
                            <h6>Textbook for B. Ed. Course</h6>
                            <h5 className="heading-tow">Textbook Development Team</h5>
                            <h6>Contributors</h6>
                            <p>Chanchal Goel, Lecturer, District Institute of Education and
                              Training, Pitampura, New Delhi (e-mail:achanchalgupta@
                              rediffmail.com) – Chapter 7</p>
                            <p>Daya Pant, Professor and Head, Department of Educational
                              Psychology and Foundations, National Council of Educational
                              Research and Training, New Delhi (e-mail:head_depfe@
                              rediffmail.com) – Chapter 10</p>
                            <p>G.L. Arora, Professor and Head (Retd.), Department of
                              Teacher Education, National Council of Educational Research
                              and Training, New Delhi (e-mail:arorag1@rediffmail.com)
                              Chapter – 2</p>
                            <p>Girishwar Misra, Professor, Department of Psychology,
                              University of Delhi, Delhi (e-mail: misragirishwar@gmail.
                              com) Chapter – 11</p>
                            <h6>Editor</h6>
                            <p>Ashok K. Srivastava, Professor and Head, Division of
                              Educational Research, National Council of Educational
                              Research and Training, New Delhi (e-mail:ashokksrivastava@
                              yahoo.com)</p>
                            <h6>Reviewer</h6>
                            <p>Bharati Baveja, Professor, Department of Education,
                              University of Delhi, Delhi (e-mail:bharatibaveja@gmail.com)
                            </p>
                            <h5 className="heading-tow">Acknowledgement</h5>
                            <p>A number of scholars contributed towards the development
                              of the textbook. The planning meeting was held in January
                              2010. The following scholars contributed towards the
                              planning of the book: Professor M. Sen Gupta, Gurgaon;
                              Professor M.D. Usha Devi, ISEC, Bangalore; Professor H.K.
                              Senapati, RIE Bhubaneswar; Professor G.L. Arora, Gurgaon;
                              Dr. Minal Narawane, Pune; Professor A.K. Mishra, NERIE,
                              Shillong; Professor A.K. Srivastava, NCERT; and Dr. N.K.
                              Gupta, NCERT.</p>
                            <h5 className="heading-tow">Contents</h5>
                            <p>Foreword</p>
                            <p>1. Concept and Meaning of Education</p>
                            <p>2. Goals of Education </p>
                            <p>3. Processes and Modes of Education</p>
                            <p>4. Knowledge: Meaning and Facets </p>
                            <p>5. Process of Knowing </p>
                            <p>6. Organisation of Knowledge in Schools</p>
                            <p>7. Teacher Autonomy and Accountability </p>
                            <p>8. Learner Autonomy </p>
                            <p>9. Values: Concept and Context </p>
                            <p>10. Education and Values </p>
                            <p>11. Values in the Emerging Social Context </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gal-tabs">
                      <Link to="javascript:;" className="prv">Prev</Link >
                      <span className="galcount" />/<span className="galtotal" />
                      <Link to="javascript:;" className="nxt">Next</Link >
                    </div>
                    <ul className="accordion accordion_guide">
  <li className="accordion-item">
    <Link className="accordion-title active" to="javascript:void(0)">
      <i className="ri-add-fill" />
      <span className="ri-shield-user-line" /> Introduction to the course
    </Link >
    <div className="accordion-content show">
      <div className="card-instrutors p-4 pt-0">
        <p>
          Sed porttitor lectus nibh. Donec rutrum congue leo eget
          malesuada.
          Praesent sapien
          massa,
          convallis a
          pellentesque egestas Curabitur arcu erat, accumsan id
          imperdiet et,
          porttitor at
          sem.
          Cras
          ultricies ligula sed
          magna dictum porta. Vestibulum ante ipsum primis in faucibus
          orci
          luctus
          et ultrices
          posuere
          cubilia.
        </p>
        <p>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet
          dui.
          Vestibulum ac
          diam
          sit
          amet quam
          vehicula elementum sed sit amet dui. Curabitur non nulla sit
          amet
          nisl
          tempus
          convallis
          quis
          ac lectus.
        </p>
      </div>
    </div>
  </li>
  <li className="accordion-item">
    <Link className="accordion-title" to="javascript:void(0)">
      <i className="ri-add-fill" />
      <span className="ri-play-circle-line" /> Number of classes
    </Link >
    <div className="accordion-content">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5 className="heading-tow"> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li className="accordion-item">
    <Link className="accordion-title" to="javascript:void(0)">
      <i className="ri-add-fill" />
      <span className="ri-file-text-line" /> All Videos
    </Link >
    <div className="accordion-content">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="courses-items p-2">
            <video width="100%" controls>
              <source src="../src/assets/images/video-home.mp4" type="video/mp4" />
              <source src="../src/assets/images/video-home.mp4" type="video/ogg" />
            </video>
            <div className="contend pt-2">
              <h5> Networking</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li className="accordion-item">
    <Link className="accordion-title" to="javascript:void(0)">
      <i className="ri-add-fill" />
      <span className="ri-file-text-line" /> Number of Notes
    </Link >
    <div className="accordion-content">
      <embed src="../src/assets/images/pdf.pdf" width="100%" height="500px" />
    </div>
  </li>
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

export default SessionComplete
