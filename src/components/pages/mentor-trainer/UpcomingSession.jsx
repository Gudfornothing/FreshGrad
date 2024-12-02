import React from 'react'
import { Link } from 'react-router-dom'
import MentorDashboard from './MentorDashboard'

const UpcomingSession = () => {
  return (
    <div>
      
  <MentorDashboard/>
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
  <div className="recruiter_list pb-5 pt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ul className="nav tabs_signup hiredpppp justify-content-start gap-2 mb-3">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="coaching-center.html">Completed session</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="upcoming-session.html">Upcoming session</Link >
            </li>
          </ul>
        </div>
        <div className="col-12">
          <form>
            <div className="searchlocation">
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/search-icon.svg"  />
                </div>
                <div className="input-field">
                  <div className="ca-search-form-container">
                    <div className="ca-search-input-container">
                      <div className="ca-search-typewriter-container">
                        <span id="ca-typewriter-here">Searc</span>
                      </div>
                      <input type="text" id="ca-search-input" className="ca-search-input" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/location-icon.svg"  />
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
                  <div className="mentersvies0121">
                    <div className="position-relative">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="img-fluid rounded" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents">
                      <div className="d-md-flex justify-content-between gap-2">
                        <div className="comnam">
                          <h3>Kannav </h3>
                          <h6 className="sub-title">Web designer</h6>
                        </div>
                      </div>
                      <p className="perographsv">
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi |
                        IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="skillstopic">
                    <div>product Management</div>
                    <div>Business Development</div>
                    <div>Career Advice</div>
                    <div>+3</div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="position-relative">
                      <img src="../src/assets/images/instructors/instructors-img6.jpg" className="img-fluid rounded" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents">
                      <div className="d-md-flex justify-content-between gap-2">
                        <div className="comnam">
                          <h3>Kannav </h3>
                          <h6 className="sub-title">Web designer</h6>
                        </div>
                      </div>
                      <p className="perographsv">
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi |
                        IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="skillstopic">
                    <div>product Management</div>
                    <div>Business Development</div>
                    <div>Career Advice</div>
                    <div>+3</div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="position-relative">
                      <img src="../src/assets/images/instructors/instructors-img3.jpg" className="img-fluid rounded" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents">
                      <div className="d-md-flex justify-content-between gap-2">
                        <div className="comnam">
                          <h3>Kannav </h3>
                          <h6 className="sub-title">Web designer</h6>
                        </div>
                      </div>
                      <p className="perographsv">
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi |
                        IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="skillstopic">
                    <div>product Management</div>
                    <div>Business Development</div>
                    <div>Career Advice</div>
                    <div>+3</div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="position-relative">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="img-fluid rounded" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents">
                      <div className="d-md-flex justify-content-between gap-2">
                        <div className="comnam">
                          <h3>Kannav </h3>
                          <h6 className="sub-title">Web designer</h6>
                        </div>
                      </div>
                      <p className="perographsv">
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi |
                        IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="skillstopic">
                    <div>product Management</div>
                    <div>Business Development</div>
                    <div>Career Advice</div>
                    <div>+3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <div className="modal fade" id="feedback" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Meeting</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <form method="post">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group mb-2 myteamform">
                        <lable>Meeting link</lable>
                        <input type="text" name="name" placeholder="https://meet.google.com/odp-nvra-ycf" defaultValue="https://meet.google.com/odp-nvra-ycf" className="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-footer d-flex gap-3 p-3 border-top">
                  <button type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn default-btn w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal fade" id="completedmodal" tabIndex={-1} aria-labelledby="completedmodal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Meeting</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <form method="post">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group mb-2 myteamform">
                        <lable>Recorded link</lable>
                        <input type="text" name="name" placeholder="https://meet.google.com/odp-nvra-ycf" defaultValue="https://meet.google.com/odp-nvra-ycf" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group mb-2 myteamform">
                        <lable>Upload file</lable>
                        <input type="file" name="file"  className="form-control" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-footer d-flex gap-3 p-3 border-top">
                  <button type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn default-btn w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="modal fade" id="rejectmodal" tabIndex={-1} aria-labelledby="rejectmodal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Post Delete</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <form method="post">
                <div className="modal-body">
                  <h6>Are You Sure
                  </h6>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">No</button>
                  <button type="button" className="btn btn-primary">Yes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* modal end */}
        <div className="col-md-8 col-lg-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121">
                    <div className="position-relative menter_pro">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="rounded_01top" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents mt-3">
                      <div className="d-md-flex justify-content-between">
                        <div>
                          <h3>Kannav </h3>
                          <h6 className="sub-title mb-2">Web designer</h6>
                        </div>
                        <div className="bookbtnas d-flex align-items-center gap-2">
                          <Link to="#" className="btn btn-primary btn-sm rounded" data-bs-toggle="modal" data-bs-target="#feedback">Accept</Link >
                          <Link to="#" className="btn btn-success btn-sm rounded" data-bs-toggle="modal" data-bs-target="#completedmodal">Complate</Link >
                          <Link to="#" className="btn btn-danger btn-sm rounded" data-bs-toggle="modal" data-bs-target="#rejectmodal">Reject</Link >
                        </div>
                      </div>
                      <p>
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi | IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="instructors-details-contents mt-3">
                    <div className="businessmen">
                      <div><i className="ri-briefcase-4-fill" /> 9 years</div>
                      <div><i className="ri-shield-user-fill" /> Business And Management
                      </div>
                      <div><i className="ri-chat-voice-fill" />45 Bookings</div>
                      <div><i className="ri-time-fill" />12.3 Hrs</div>
                    </div>
                  </div>
                </div>
                <div className="card-instrutors rounded shadow position-relative mt-3 bg-white p-4">
                  <div className="card-body p-0">
                    <div className="d-md-flex justify-content-between align-items-start gap-5">
                      <div>
                        <h6>Avaliable Time</h6>
                      <div className="skillstopic mb-2">
  <div className="fw-bold bg-light text-primary">Date:</div>
  <div>10/05/2024</div>
</div>

                        <div className="skillstopic">
                          <div className="fw-bold bg-light text-primary">Time:</div>
                          <div>11:30PM</div>
                          <div>12:30PM</div>
                          <div>05:30AM</div>
                        </div>
                      </div>
                      <div className="bookbtnas">
                        <Link to="#" className="btn btn-primary rounded" data-bs-toggle="modal" data-bs-target="#bookinterview">Edit</Link >
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal */}
                <div className="modal fade" id="bookinterview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Metting Session
                          Time Select</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <div className="skillstopic addtimes">
                          <div className="fw-bold bg-light text-primary">Time:</div>
                          <div>11:30PM</div>
                          <div>12:30PM</div>
                          <div>05:30AM</div>
                        </div>
                        <div>
  <div id="demo" />
  <div id="demo-timegrid" />
</div>

                      </div>
                      <div className="modal-footer">
                        <button type="button" className="default-btn rounded">Book
                          Session</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>About</h5>
                  <p>
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                    Praesent sapien
                    massa,
                    convallis a
                    pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at
                    sem.
                    Cras
                    ultricies ligula sed
                    magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                    luctus
                    et ultrices
                    posuere
                    cubilia.
                  </p>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                    dui.
                    Vestibulum ac
                    diam
                    sit
                    amet quam
                    vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                    nisl
                    tempus
                    convallis
                    quis
                    ac lectus.
                  </p>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>Topics</h5>
                  <div className="skillstopic">
                    <div>#Build a team</div>
                    <div>#Change jobs</div>
                    <div>#Foster team culture</div>
                    <div>#Get a raise</div>
                    <div>#Get your Resume/CV reviewed</div>
                  </div>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>Skills</h5>
                  <div className="skillstopic">
                    <div> #Product Consulting</div>
                    <div>#Product Management</div>
                    <div>#How to get high-impact jobs - VCs/Strategy</div>
                    <div>#Career Advice</div>
                    <div>#CAT Preparation</div>
                  </div>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>Education</h5>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>ESCP Business School, Paris, France</h6>
                      <span>MIM</span>
                      <p>2016 - 2017</p>
                    </div>
                  </div>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>ESCP Business School, Paris, France</h6>
                      <span>MIM</span>
                      <p>2016 - 2017</p>
                    </div>
                  </div>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>ESCP Business School, Paris, France</h6>
                      <span>MIM</span>
                      <p>2016 - 2017</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>Work Experience</h5>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>Head of Marketing</h6>
                      <span>Sunstone Eduversity</span>
                      <p>2021 - 2022</p>
                    </div>
                  </div>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>Head of Marketing</h6>
                      <span>Sunstone Eduversity</span>
                      <p>2021 - 2022</p>
                    </div>
                  </div>
                  <div className="skillstopic_education">
                    <div className="educationicon">
                      <img src="../src/assets/images/education.png"  />
                    </div>
                    <div>
                      <h6>Head of Marketing</h6>
                      <span>Sunstone Eduversity</span>
                      <p>2021 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121">
                    <div className="position-relative menter_pro">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="rounded_01top" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents mt-3">
                      <div className="d-md-flex justify-content-between">
                        <div>
                          <h3>Kannav </h3>
                          <h6 className="sub-title mb-2">Web designer</h6>
                        </div>
                      </div>
                      <p>
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi | IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="instructors-details-contents mt-3">
                    <div className="businessmen">
                      <div><i className="ri-briefcase-4-fill" /> 9 years</div>
                      <div><i className="ri-shield-user-fill" /> Business And Management
                      </div>
                      <div><i className="ri-chat-voice-fill" />45 Bookings</div>
                      <div><i className="ri-time-fill" />12.3 Hrs</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>About</h5>
                    <p>
                      Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                      Praesent sapien
                      massa,
                      convallis a
                      pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at
                      sem.
                      Cras
                      ultricies ligula sed
                      magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                      luctus
                      et ultrices
                      posuere
                      cubilia.
                    </p>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui.
                      Vestibulum ac
                      diam
                      sit
                      amet quam
                      vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                      nisl
                      tempus
                      convallis
                      quis
                      ac lectus.
                    </p>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Topics</h5>
                    <div className="skillstopic">
                      <div>#Build a team</div>
                      <div>#Change jobs</div>
                      <div>#Foster team culture</div>
                      <div>#Get a raise</div>
                      <div>#Get your Resume/CV reviewed</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Skills</h5>
                    <div className="skillstopic">
                      <div> #Product Consulting</div>
                      <div>#Product Management</div>
                      <div>#How to get high-impact jobs - VCs/Strategy</div>
                      <div>#Career Advice</div>
                      <div>#CAT Preparation</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Education</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Work Experience</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121">
                    <div className="position-relative menter_pro">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="rounded_01top" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents mt-3">
                      <div className="d-md-flex justify-content-between">
                        <div>
                          <h3>Kannav </h3>
                          <h6 className="sub-title mb-2">Web designer</h6>
                        </div>
                      </div>
                      <p>
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi | IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="instructors-details-contents mt-3">
                    <div className="businessmen">
                      <div><i className="ri-briefcase-4-fill" /> 9 years</div>
                      <div><i className="ri-shield-user-fill" /> Business And Management
                      </div>
                      <div><i className="ri-chat-voice-fill" />45 Bookings</div>
                      <div><i className="ri-time-fill" />12.3 Hrs</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>About</h5>
                    <p>
                      Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                      Praesent sapien
                      massa,
                      convallis a
                      pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at
                      sem.
                      Cras
                      ultricies ligula sed
                      magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                      luctus
                      et ultrices
                      posuere
                      cubilia.
                    </p>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui.
                      Vestibulum ac
                      diam
                      sit
                      amet quam
                      vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                      nisl
                      tempus
                      convallis
                      quis
                      ac lectus.
                    </p>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Topics</h5>
                    <div className="skillstopic">
                      <div>#Build a team</div>
                      <div>#Change jobs</div>
                      <div>#Foster team culture</div>
                      <div>#Get a raise</div>
                      <div>#Get your Resume/CV reviewed</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Skills</h5>
                    <div className="skillstopic">
                      <div> #Product Consulting</div>
                      <div>#Product Management</div>
                      <div>#How to get high-impact jobs - VCs/Strategy</div>
                      <div>#Career Advice</div>
                      <div>#CAT Preparation</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Education</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Work Experience</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121">
                    <div className="position-relative menter_pro">
                      <img src="../src/assets/images/instructors/instructors-details.jpg" className="rounded_01top" alt="Instructor" />
                      <span className="live_user bg-secondary newuser">Upcoming</span>
                    </div>
                    <div className="instructors-details-contents mt-3">
                      <div className="d-md-flex justify-content-between">
                        <div>
                          <h3>Kannav </h3>
                          <h6 className="sub-title mb-2">Web designer</h6>
                        </div>
                        <div>
                          <Link to="#" className="default-btn rounded">Connect</Link >
                        </div>
                      </div>
                      <p>
                        AVP of Revenue at Emeritus | Former Management Consultant | IIT
                        Delhi | IIM
                        Lucknow
                        | ESCP Paris
                      </p>
                    </div>
                  </div>
                  <div className="instructors-details-contents mt-3">
                    <div className="businessmen">
                      <div><i className="ri-briefcase-4-fill" /> 9 years</div>
                      <div><i className="ri-shield-user-fill" /> Business And Management
                      </div>
                      <div><i className="ri-chat-voice-fill" />45 Bookings</div>
                      <div><i className="ri-time-fill" />12.3 Hrs</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>About</h5>
                    <p>
                      Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                      Praesent sapien
                      massa,
                      convallis a
                      pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                      porttitor at
                      sem.
                      Cras
                      ultricies ligula sed
                      magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                      luctus
                      et ultrices
                      posuere
                      cubilia.
                    </p>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                      dui.
                      Vestibulum ac
                      diam
                      sit
                      amet quam
                      vehicula elementum sed sit amet dui. Curabitur non nulla sit amet
                      nisl
                      tempus
                      convallis
                      quis
                      ac lectus.
                    </p>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Topics</h5>
                    <div className="skillstopic">
                      <div>#Build a team</div>
                      <div>#Change jobs</div>
                      <div>#Foster team culture</div>
                      <div>#Get a raise</div>
                      <div>#Get your Resume/CV reviewed</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Skills</h5>
                    <div className="skillstopic">
                      <div> #Product Consulting</div>
                      <div>#Product Management</div>
                      <div>#How to get high-impact jobs - VCs/Strategy</div>
                      <div>#Career Advice</div>
                      <div>#CAT Preparation</div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Education</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>ESCP Business School, Paris, France</h6>
                        <span>MIM</span>
                        <p>2016 - 2017</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Work Experience</h5>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
                      </div>
                    </div>
                    <div className="skillstopic_education">
                      <div className="educationicon">
                        <img src="../src/assets/images/education.png"  />
                      </div>
                      <div>
                        <h6>Head of Marketing</h6>
                        <span>Sunstone Eduversity</span>
                        <p>2021 - 2022</p>
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
                <Link to="./contactus">
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

export default UpcomingSession
