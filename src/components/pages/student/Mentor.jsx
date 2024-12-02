import React from 'react'
import { Link } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
const Mentor = () => {
  return (
    <div>
     <HeaderComponent/>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="dot-menu">
            {/* <div class="circle-inner">
                      <span class="ri-search-line"></span>
                  </div> */}
          </div>
          <div className="mobilelogin gap-2 d-flex align-items-center">
            <div className="others-options">
              <div className="navbar-category">
                <div className="dropdown category-list-dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill"  />
                    Freshgrad
                    <i className="ri-arrow-down-s-line" />
                  </button>
                  <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                    <Link to ="#" className="nav-link-item">
                      User Account center
                    </Link>
                    <Link to ="#" className="nav-link-item">
                      Hiring Dashboard
                    </Link>
                    <Link to ="#" className="nav-link-item">
                      Freshgrad Profile/Resume
                    </Link>
                    <Link to ="#" className="logoutbtn">
                      <i className="ri-logout-box-line" />
                      Logout
                    </Link>
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
        <div className="col-12 my-2">
          <ul className="nav nav-pills tabs_signup hiredpppp justify-content-start gap-2" id="pills-tab" role="tablist">
            {/* <li class="nav-item" role="presentation">
                      <Link  class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                          data-bs-target="#Coaching-Center" type="button" role="tab" aria-controls="Coaching-Center"
                          aria-selected="true">Coaching Center</Link>
                  </li> */}
            <li className="nav-item" role="presentation">
              <Link  className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Mentors</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link  className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-Upcoming" type="button" role="tab" aria-controls="pills-Upcoming" aria-selected="false">Upcoming</Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link  className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Complate section</Link>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <form>
            <div className="searchlocation m-0 mb-2">
              <div className="iconfield">
                <div className="icon_search">
                  <img src="/src/assets/images/icon/search-icon.svg"  />
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
                  <img src="/src/assets/images/icon/location-icon.svg"  />
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
      <div className="tab-content" id="pills-tabContent">
        {/* <div class="tab-pane fade show active" id="Coaching-Center" role="tabpanel" aria-labelledby="pills-home-tab"
              tabindex="0">
              <div class="left_recruiterlists row">
                  <div class="col-md-4 col-lg-4">
                      <div class="sticky-header">
                          <div class="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist"
                              aria-orientation="vertical">
                              <div class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                  data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                  aria-selected="true">
                                  <div class="card_rec position-relative">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="img-fluid rounded" alt="Instructor">
  
                                          </div>
                                          <div class="instructors-details-contents">
                                              <div class="">
                                                  <div class="comnam">
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title">Web designer</h6>
                                                  </div>
  
                                              </div>
                                              <p class="perographsv">
                                                  AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                  Delhi |
                                                  IIM
                                                  Lucknow
                                                  | ESCP Paris
                                              </p>
                                          </div>
                                      </div>
                                      <div class="skillstopic">
                                          <div>product Management</div>
                                          <div>Business Development</div>
                                          <div>Career Advice</div>
                                          <div>+3</div>
  
                                      </div>
                                  </div>
                              </div>
                              <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                  data-bs-target="#v-pills-profile" type="button" role="tab"
                                  aria-controls="v-pills-profile" aria-selected="false">
                                  <div class="card_rec position-relative">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative">
                                              <img src="/src/assets/images/instructors/instructors-img6.jpg"
                                                  class="img-fluid rounded" alt="Instructor">
  
                                          </div>
                                          <div class="instructors-details-contents">
                                              <div class="">
                                                  <div class="comnam">
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title">Web designer</h6>
                                                  </div>
  
                                              </div>
                                              <p class="perographsv">
                                                  AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                  Delhi |
                                                  IIM
                                                  Lucknow
                                                  | ESCP Paris
                                              </p>
                                          </div>
                                      </div>
                                      <div class="skillstopic">
                                          <div>product Management</div>
                                          <div>Business Development</div>
                                          <div>Career Advice</div>
                                          <div>+3</div>
  
                                      </div>
                                  </div>
                              </div>
                              <div class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                  data-bs-target="#v-pills-messages" type="button" role="tab"
                                  aria-controls="v-pills-messages" aria-selected="false">
                                  <div class="card_rec position-relative">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative">
                                              <img src="/src/assets/images/instructors/instructors-img3.jpg"
                                                  class="img-fluid rounded" alt="Instructor">
  
                                          </div>
                                          <div class="instructors-details-contents">
                                              <div class="">
                                                  <div class="comnam">
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title">Web designer</h6>
                                                  </div>
  
                                              </div>
                                              <p class="perographsv">
                                                  AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                  Delhi |
                                                  IIM
                                                  Lucknow
                                                  | ESCP Paris
                                              </p>
                                          </div>
                                      </div>
                                      <div class="skillstopic">
                                          <div>product Management</div>
                                          <div>Business Development</div>
                                          <div>Career Advice</div>
                                          <div>+3</div>
  
                                      </div>
                                  </div>
                              </div>
                              <div class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                  data-bs-target="#v-pills-settings" type="button" role="tab"
                                  aria-controls="v-pills-settings" aria-selected="false">
                                  <div class="card_rec position-relative">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="img-fluid rounded" alt="Instructor">
  
                                          </div>
                                          <div class="instructors-details-contents">
                                              <div class="">
                                                  <div class="comnam">
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title">Web designer</h6>
                                                  </div>
  
                                              </div>
                                              <p class="perographsv">
                                                  AVP of Revenue at Emeritus | Former Management Consultant | IIT
                                                  Delhi |
                                                  IIM
                                                  Lucknow
                                                  | ESCP Paris
                                              </p>
                                          </div>
                                      </div>
                                      <div class="skillstopic">
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
  
                  <div class="col-md-8 col-lg-8">
                      <div class="tab-content" id="v-pills-tabContent">
                          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                              aria-labelledby="v-pills-home-tab">
                              
                              <div class="instructors-details-img m-0">
                                  <div class="card-instrutors shadow position-relative bg-white p-4">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative menter_pro">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="rounded_01top" alt="Instructor">
  
                                          </div>
  
                                          <div class="instructors-details-contents mt-3">
                                              <div class="d-flex justify-content-between">
                                                  <div>
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title mb-2">Web designer</h6>
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
                                      <div class="instructors-details-contents mt-3">
                                          <div class="businessmen">
                                              <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                              <div><i class="ri-shield-user-fill"></i> Business And Management
                                              </div>
                                              <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                              <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                              <Link to ="#" class="default-btn rounded">Session Start</Link>
                                              <Link to ="#" class="default-btn rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">Session</Link> 
                                          </div>
  
                                      </div>
                                  </div>
  
                                 
                                  <div class="modal fade" id="exampleModal" tabindex="-1"
                                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog modal-lg">
                                          <div class="modal-content">
                                              <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">Metting Session
                                                      Date
                                                      and Time</h5>
                                                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                      aria-label="Close"></button>
                                              </div>
                                              <div class="modal-body">
                                                  <div class="calendar" id="calendar-2" data-mdb-monday-first="true">
                                                  </div>
                                                 
                                              </div>
                                              <div class="modal-footer">
  
                                                  <button type="button" class="default-btn rounded">Book
                                                      Session</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
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
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Topics</h5>
                                          <div class="skillstopic">
                                              <div>#Build a team</div>
                                              <div>#Change jobs</div>
                                              <div>#Foster team culture</div>
                                              <div>#Get a raise</div>
                                              <div>#Get your Resume/CV reviewed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Skills</h5>
                                          <div class="skillstopic">
                                              <div> #Product Consulting</div>
                                              <div>#Product Management</div>
                                              <div>#How to get high-impact jobs - VCs/Strategy</div>
                                              <div>#Career Advice</div>
                                              <div>#CAT Preparation</div>
  
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Education</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Work Experience</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
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
                          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                              aria-labelledby="v-pills-profile-tab">
                              <div class="instructors-details-img m-0">
                                  <div class="card-instrutors shadow position-relative bg-white p-4">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative menter_pro">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="rounded_01top" alt="Instructor">
  
                                          </div>
  
                                          <div class="instructors-details-contents mt-3">
                                              <div class="d-flex justify-content-between">
                                                  <div>
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title mb-2">Web designer</h6>
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
                                      <div class="instructors-details-contents mt-3">
  
  
                                          <div class="businessmen">
                                              <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                              <div><i class="ri-shield-user-fill"></i> Business And Management
                                              </div>
                                              <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                              <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                              <Link to ="#" class="default-btn rounded">Session Start</Link>
                                          </div>
  
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
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
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Topics</h5>
                                          <div class="skillstopic">
                                              <div>#Build a team</div>
                                              <div>#Change jobs</div>
                                              <div>#Foster team culture</div>
                                              <div>#Get a raise</div>
                                              <div>#Get your Resume/CV reviewed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Skills</h5>
                                          <div class="skillstopic">
                                              <div> #Product Consulting</div>
                                              <div>#Product Management</div>
                                              <div>#How to get high-impact jobs - VCs/Strategy</div>
                                              <div>#Career Advice</div>
                                              <div>#CAT Preparation</div>
  
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Education</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Work Experience</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
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
                          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                              aria-labelledby="v-pills-messages-tab">
                              <div class="instructors-details-img m-0">
                                  <div class="card-instrutors shadow position-relative bg-white p-4">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative menter_pro">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="rounded_01top" alt="Instructor">
  
                                          </div>
  
                                          <div class="instructors-details-contents mt-3">
                                              <div class="d-flex justify-content-between">
                                                  <div>
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title mb-2">Web designer</h6>
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
                                      <div class="instructors-details-contents mt-3">
  
  
                                          <div class="businessmen">
                                              <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                              <div><i class="ri-shield-user-fill"></i> Business And Management
                                              </div>
                                              <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                              <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                              <Link to ="#" class="default-btn rounded">Session Start</Link>
                                          </div>
  
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
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
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Topics</h5>
                                          <div class="skillstopic">
                                              <div>#Build a team</div>
                                              <div>#Change jobs</div>
                                              <div>#Foster team culture</div>
                                              <div>#Get a raise</div>
                                              <div>#Get your Resume/CV reviewed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Skills</h5>
                                          <div class="skillstopic">
                                              <div> #Product Consulting</div>
                                              <div>#Product Management</div>
                                              <div>#How to get high-impact jobs - VCs/Strategy</div>
                                              <div>#Career Advice</div>
                                              <div>#CAT Preparation</div>
  
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Education</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Work Experience</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
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
                          <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                              aria-labelledby="v-pills-settings-tab">
                              <div class="instructors-details-img m-0">
                                  <div class="card-instrutors shadow position-relative bg-white p-4">
  
                                      <div class="mentersvies0121">
                                          <div class="position-relative menter_pro">
                                              <img src="/src/assets/images/instructors/instructors-details.jpg"
                                                  class="rounded_01top" alt="Instructor">
  
                                          </div>
  
                                          <div class="instructors-details-contents mt-3">
                                              <div class="d-flex justify-content-between">
                                                  <div>
                                                      <h3>Kannav </h3>
                                                      <h6 class="sub-title mb-2">Web designer</h6>
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
                                      <div class="instructors-details-contents mt-3">
  
                                          <div class="businessmen">
                                              <div><i class="ri-briefcase-4-fill"></i> 9 years</div>
                                              <div><i class="ri-shield-user-fill"></i> Business And Management
                                              </div>
                                              <div><i class="ri-chat-voice-fill"></i>45 Bookings</div>
                                              <div><i class="ri-time-fill"></i>12.3 Hrs</div>
                                              <Link to ="#" class="default-btn rounded">Session Start</Link>
                                          </div>
  
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
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
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Topics</h5>
                                          <div class="skillstopic">
                                              <div>#Build a team</div>
                                              <div>#Change jobs</div>
                                              <div>#Foster team culture</div>
                                              <div>#Get a raise</div>
                                              <div>#Get your Resume/CV reviewed</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Skills</h5>
                                          <div class="skillstopic">
                                              <div> #Product Consulting</div>
                                              <div>#Product Management</div>
                                              <div>#How to get high-impact jobs - VCs/Strategy</div>
                                              <div>#Career Advice</div>
                                              <div>#CAT Preparation</div>
  
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Education</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>ESCP Business School, Paris, France</h6>
                                                  <span>MIM</span>
                                                  <p>2016 - 2017</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="instructors-details-contents mt-3">
                                      <div class="card-instrutors shadow bg-white p-4">
                                          <h5>Work Experience</h5>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
                                              </div>
                                              <div>
                                                  <h6>Head of Marketing</h6>
                                                  <span>Sunstone Eduversity</span>
                                                  <p>2021 - 2022</p>
                                              </div>
                                          </div>
                                          <div class="skillstopic_education">
                                              <div class="educationicon">
                                                  <img src="/src/assets/images/education.png" alt="">
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
          </div> */}
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
          <div className="left_recruiterlists row">
            <div className="col-md-4 col-lg-4">
              <div className="sticky-header">
                <div className="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img4.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
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
                  {/* Modal */}
                  <div className="modal fade" id="bookinterview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Metting Session
                            Date
                            and Time</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div id="demo" />
                          <div id="demo-timegrid" />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="default-btn rounded">Book
                            Session</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instructors-details-img m-0">
                    <div className="card-instrutors shadow position-relative bg-white p-4">
                      <div className="mentersvies0121">
                        <div className="position-relative menter_pro">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="rounded_01top" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav my-2 hkddda justify-content-between text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="reviewsreat mb-3">
                                  <span className="review"><i className="ri-star-fill text-warning" />5.0
                                    (18
                                    Reviews)</span>
                                </div>
                                <div className="reviewsreat">
                                  <Link to ="#" data-bs-toggle="modal" data-bs-target="#bookinterview" className="default-btn rounded">Book Now</Link>
                                </div>
                                <div>
                                  <Link to ="#"><i className="ri-linkedin-fill" /></Link>
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
                          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                          Praesent
                          sapien
                          massa,
                          convallis a
                          pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at
                          sem.
                          Cras
                          ultricies ligula sed
                          magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                          luctus et
                          ultrices
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
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="instructors-details-img m-0">
                    <div className="card-instrutors shadow position-relative bg-white p-4">
                      <div className="mentersvies0121">
                        <div className="position-relative menter_pro">
                          <img src="/src/assets/images/instructors/instructors-img4.jpg" className="rounded_01top" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav my-2 hkddda justify-content-between text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="reviewsreat mb-3">
                                  <span className="review"><i className="ri-star-fill text-warning" />5.0
                                    (18
                                    Reviews)</span>
                                </div>
                                <div className="reviewsreat">
                                  <Link to ="#" data-bs-toggle="modal" data-bs-target="#bookinterview" className="default-btn rounded">Book Now</Link>
                                </div>
                                <div>
                                  <Link to ="#"><i className="ri-linkedin-fill" /></Link>
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
                          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                          Praesent
                          sapien
                          massa,
                          convallis a
                          pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at
                          sem.
                          Cras
                          ultricies ligula sed
                          magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                          luctus et
                          ultrices
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
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <div className="instructors-details-img m-0">
                    <div className="card-instrutors shadow position-relative bg-white p-4">
                      <div className="mentersvies0121">
                        <div className="position-relative menter_pro">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="rounded_01top" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav my-2 hkddda justify-content-between text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="reviewsreat mb-3">
                                  <span className="review"><i className="ri-star-fill text-warning" />5.0
                                    (18
                                    Reviews)</span>
                                </div>
                                <div className="reviewsreat">
                                  <Link to ="#" data-bs-toggle="modal" data-bs-target="#bookinterview" className="default-btn rounded">Book Now</Link>
                                </div>
                                <div>
                                  <Link to ="#"><i className="ri-linkedin-fill" /></Link>
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
                          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                          Praesent
                          sapien
                          massa,
                          convallis a
                          pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at
                          sem.
                          Cras
                          ultricies ligula sed
                          magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                          luctus et
                          ultrices
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
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <div className="instructors-details-img m-0">
                    <div className="card-instrutors shadow position-relative bg-white p-4">
                      <div className="mentersvies0121">
                        <div className="position-relative menter_pro">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="rounded_01top" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav my-2 hkddda justify-content-between text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="reviewsreat mb-3">
                                  <span className="review"><i className="ri-star-fill text-warning" />5.0
                                    (18
                                    Reviews)</span>
                                </div>
                                <div className="reviewsreat">
                                  <Link to ="#" data-bs-toggle="modal" data-bs-target="#bookinterview" className="default-btn rounded">Book Now</Link>
                                </div>
                                <div>
                                  <Link to ="#"><i className="ri-linkedin-fill" /></Link>
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
                          Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada.
                          Praesent
                          sapien
                          massa,
                          convallis a
                          pellentesque egestas Curabitur arcu erat, accumsan id imperdiet et,
                          porttitor at
                          sem.
                          Cras
                          ultricies ligula sed
                          magna dictum porta. Vestibulum ante ipsum primis in faucibus orci
                          luctus et
                          ultrices
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-Upcoming" role="tabpanel" aria-labelledby="pills-Upcoming-tab" tabIndex={0}>
          <div className="left_recruiterlists row">
            <div className="col-md-4 col-lg-4">
              <div className="sticky-header">
                <div className="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home2" type="button" role="tab" aria-controls="v-pills-home2" aria-selected="true">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile2" type="button" role="tab" aria-controls="v-pills-profile2" aria-selected="false">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img4.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="interviewstudent m-0">
                    <h3>Mentor Books</h3>
                    <div className="slider_descd">
                      <div className="bg-light p-3">
                        <div className="firsthiresd">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="profileinterview position-relative p-3 d-md-flex gap-3">
                                <img width={40} className="rounded-pill" height={40} src="/src/assets/images/profile1.jpg"   />
                                <div>Interviewer:-
                                  <h6 className="m-0">Rahul Sharma</h6>
                                </div>
                              </div>
                              <div className="float-starts p-3 border-top">
                                <h6 className="mb-0">Section Book time date</h6>
                                <div className="skillstopic">
                                  <div><span className="fw-bold text-primary">Date:</span>10/05/2024
                                  </div>
                                  <div><span className="fw-bold text-primary">Time:</span>11:00am
                                    to 12:00am
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
                <div className="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="interviewstudent m-0">
                    <h3>Mentor Books</h3>
                    <div className="slider_descd">
                      <div className="bg-light p-3">
                        <div className="firsthiresd">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="profileinterview position-relative p-3 d-md-flex gap-3">
                                <img width={40} className="rounded-pill" height={40} src="/src/assets/images/profile1.jpg"   />
                                <div>Interviewer:-
                                  <h6 className="m-0">Rahul Sharma</h6>
                                </div>
                              </div>
                              <div className="float-starts p-3 border-top">
                                <h6 className="mb-0">Section Book time date</h6>
                                <div className="skillstopic">
                                  <div><span className="fw-bold text-primary">Date:</span>10/05/2024
                                  </div>
                                  <div><span className="fw-bold text-primary">Time:</span>11:00am
                                    to 12:00am
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
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
          <div className="left_recruiterlists row">
            <div className="col-md-4 col-lg-4">
              <div className="sticky-header">
                <div className="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home3" type="button" role="tab" aria-controls="v-pills-home3" aria-selected="true">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img2.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div>
                            <div className="comnam">
                              <h3>Ravi Sharma </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile3" type="button" role="tab" aria-controls="v-pills-profile3" aria-selected="false">
                    <div className="card_rec position-relative">
                      <div className="mentersvies0121">
                        <div className="position-relative">
                          <img src="/src/assets/images/instructors/instructors-img4.jpg" className="img-fluid rounded" alt="Instructor" />
                          <span className="live_user">Available</span>
                        </div>
                        <div className="instructors-details-contents">
                          <div >
                            <div className="comnam">
                              <h3>Sandesh Rajawat </h3>
                              <ul className="nav mentor4541s text-dark align-items-center">
                                <li className="me-2"><i className="ri-mail-line" />
                                  ravifg@gmail.com
                                </li>
                                <li className="me-2"><i className="ri-phone-line" />
                                  1234567890</li>
                                <li className="me-2"><i className="ri-map-pin-fill" /> Thane,
                                  Mumbai,
                                  Maharashtra</li>
                              </ul>
                              <h6>Web designer</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="skillstopic">
                          <div>Interviewer</div>
                          <div>Trainer</div>
                        </div>
                        <div>
                          <Link to ="#"><i className="ri-linkedin-fill" /></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* feedback */}
            <div className="modal fade" id="feedback" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Feedback</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <form method="post">
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-md-12">
                          <div className="form-group d-flex align-items-center gap-4">
                            <label>Star Ratting</label>
                            <div className="reviewsreat">
                              <div className="rate">
                                <input type="radio" id="star5" name="rate" defaultValue={5} />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" defaultValue={4} />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" defaultValue={3} />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" defaultValue={2} />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" defaultValue={1} />
                                <label htmlFor="star1" title="text">1 star</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="form-group mb-2 myteamform">
                            <lable>Feedback</lable>
                            <textarea placeholder="Message" className="form-control" defaultValue={""} />
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
            {/* feedback end */}
            <div className="col-md-8 col-lg-8">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home3" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="interviewstudent m-0">
                    <h3>Mentor Books</h3>
                    <div className="slider_descd">
                      <div className="bg-light p-3">
                        <div className="firsthiresd">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="d-md-flex justify-content-between gap-2">
                                <div className="profileinterview position-relative p-3 d-md-flex gap-3">
                                  <img width={40} className="rounded-pill" height={40} src="/src/assets/images/profile1.jpg" />
                                  <div>Interviewer:-
                                    <h6 className="m-0">Rahul Sharma</h6>
                                  </div>
                                </div>
                                <div className="profileinterview position-relative p-3 text-end gap-3">
                                  <Link to ="#" className="default-btn rounded" data-bs-toggle="modal" data-bs-target="#feedback">Feedback Upload</Link>
                                </div>
                              </div>
                              <div className="float-starts p-3 border-top">
                                <h6 className="mb-0">Section Book time date</h6>
                                <div className="skillstopic">
                                  <div><span className="fw-bold text-primary">Date:</span>10/05/2024
                                  </div>
                                  <div><span className="fw-bold text-primary">Time:</span>11:00am
                                    to 12:00am
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Meeting link</h6>
                                    <p className="text-primary">
                                      https://meet.google.com/odp-nvra-ycf
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Recorded link</h6>
                                    <p className="text-primary">
                                      https://meet.google.com/odp-nvra-ycf
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Star Ratting</h6>
                                    <div className="reviewsreat">
                                      <div className="rate">
                                        <i className="ri-star-fill text-warning" />
                                        <i className="ri-star-fill text-warning" />
                                        <i className="ri-star-fill text-warning" />
                                        <i className="ri-star-fill text-warning" />
                                        <i className="ri-star-fill text-warning" />
                                      </div>
                                    </div>
                                    <h6 className="mb-0">Feedback</h6>
                                    <p className="small">Lorem Ipsum is simply dummy
                                      text of the printing and typesetting
                                      industry. Lorem Ipsum has been the
                                      industry's standard dummy text ever since
                                      the 1500s, when an unknown printer took a
                                      galley of type and scrambled it to make a
                                      type specimen book.</p>
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Notes</h6>
                                    <div className="border rounded mt-3 p-3" data-bs-toggle="modal" data-bs-target="#pdfnots">
                                      <img src="/src/assets/images/courses/PDF.png" width={100}  />
                                      <h6>UI/UX Design</h6>
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
                <div className="tab-pane fade" id="v-pills-profile3" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="interviewstudent m-0">
                    <h3>Mentor Books</h3>
                    <div className="slider_descd">
                      <div className="bg-light p-3">
                        <div className="firsthiresd">
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="profileinterview position-relative p-3 d-md-flex gap-3">
                                <img width={40} className="rounded-pill" height={40} src="/src/assets/images/profile1.jpg"   />
                                <div>Interviewer:-
                                  <h6 className="m-0">Rahul Sharma</h6>
                                </div>
                              </div>
                              <div className="float-starts p-3 border-top">
                                <h6 className="mb-0">Section Book time date</h6>
                                <div className="skillstopic">
                                  <div><span className="fw-bold text-primary">Date:</span>10/05/2024
                                  </div>
                                  <div><span className="fw-bold text-primary">Time:</span>11:00am
                                    to 12:00am
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Meeting link</h6>
                                    <p className="text-primary">
                                      https://meet.google.com/odp-nvra-ycf
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Recorded link</h6>
                                    <p className="text-primary">
                                      https://meet.google.com/odp-nvra-ycf
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="float-starts border-top">
                                <div className="card card-body p-0">
                                  <div className="header0101 p-3 py-3">
                                    <h6 className="mb-0">Notes</h6>
                                    <div className="border rounded mt-3 p-3" data-bs-toggle="modal" data-bs-target="#pdfnots">
                                      <img src="/src/assets/images/courses/PDF.png" width={100}  />
                                      <h6>UI/UX Design</h6>
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
                {/* pdf popup */}
                <div className="modal fade" id="pdfnots" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Metting Session
                          Date
                          and Time</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <embed src="/src/assets/images/pdf.pdf" width="100%" height="2100px" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* pdf popup end */}
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
                <Link to ="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-fill" />
                </Link>
              </li>
              <li>
                <Link to ="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill" />
                </Link>
              </li>
              <li>
                <Link to ="https://www.pinterest.com/" target="_blank">
                  <i className="ri-instagram-line" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget ps-5">
            <h3>About us</h3>
            <ul className="footer-list">
              <li>
                <Link to ="#aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link to ="trainer-mentors.html">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to ="recruiter-hiring-manager.html">
                  Recruiter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-widget ps-5">
            <h3>Resources</h3>
            <ul className="footer-list">
              <li>
                <Link to ="../index.html">
                  Home
                </Link>
              </li>
              <li>
                <Link to ="contact-us.html">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to ="#">
                  Terms &amp; conditions
                </Link>
              </li>
              <li>
                <Link to ="#">
                  Privacy Policy
                </Link>
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
                  <span><Link to ="#"><span className="__cf_email__">freshgrad@gmail.com</span></Link></span>
                </div>
              </li>
              <li>
                <i className="ri-phone-fill" />
                <div className="content">
                  <h4>Phone:</h4>
                  <span><Link to ="tel:+11234567890">+1 1234567890</Link></span>
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

export default Mentor
