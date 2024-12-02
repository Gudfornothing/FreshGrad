import React from 'react'
import { Link } from 'react-router-dom'
const RecruitorStep = () => {
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
                  <Link to="/recruitor-dashboard">
                    Dashboard
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="my-team">My Team</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/recruitor-list">Candidate profile</Link >
                </li>
                <li className="nav-item">
                  <Link to="/my-jobs">My Job</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/interview-guide-details">Interview Guide</Link >
                </li>
              </ul>
              <div className="others-options gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/job-post" className="default-btn two p-2 px-3 rounded-pill">Job Post</Link >
                </div>
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
                      <Link to="/profile" className="nav-link-item">
                        <i className="ri-pencil-line" /> Edit Profile
                      </Link >
                      <Link to="/profile" className="nav-link-item">
                        <i className="flaticon-user" />
                        View Profile
                      </Link >
                      <Link to="/profile" className="nav-link-item">
                        <i className="ri-notification-line" />
                        Notification
                      </Link >
                      <Link to="/profile" className="nav-link-item">
                        <i className="ri-settings-2-line" />
                        Setting
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
              <Link to="./signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="./signin" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header_space" />
  <div className="stepbg">
    <div className="client_filter-job pt-1 pb-0">
      <div className="stepsForm">
        <form method="post" id="msform">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="sf-steps">
                  <h5 className="default-btn w-100 text-white m-0 py-3 px-4">Recruiter</h5>
                  <div className="left-slid-filter space-box-two shadow-none">
                    <div className="sf-steps-content">
                      <div className="joblisttitle sf-active">
                        <span>1</span>
                        <Link className="list-icons">
                          <h5>Basic Details</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>2</span>
                        <Link className="list-icons">
                          <h5>Application Details</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>3</span>
                        <Link className="list-icons">
                          <h5>Salary Range/Year</h5>
                        </Link>
                      </div>
                    <div>
  <div className="joblisttitle">
    <span>4</span>
    <Link className="list-icons">
      <h5>Skills</h5>
    </Link>
  </div>
  <div className="joblisttitle">
    <span>5</span>
    <Link className="list-icons">
      <h5>University Projects</h5>
    </Link>
  </div>
</div>

                <div>
  <div className="joblisttitle">
    <span>5</span>
    <Link className="list-icons">
      <h5>University Projects</h5>
    </Link>
  </div> */{'}'}
  {'{'}/* <div className="joblisttitle">
    <span>6</span>
    <Link className="list-icons">
      <h5>Professional experience</h5>
    </Link>
  </div>
  <div className="joblisttitle">
    <span>7</span>
    <Link className="list-icons">
      <h5>Other</h5>
    </Link>
  </div>
</div>

                     <div className="joblisttitle">
  <span>7</span>
  <Link className="list-icons">
    <h5>Provide all certifications name </h5>
  </Link>
</div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative">
                  <div className="sf-steps-form sf-radius">
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Basic Details</h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Opportunity Title</label>
                              <input type="text" name="uname" placeholder="Title" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Enter Your Organisation *</label>
                              <input type="text" name="uname" placeholder="Your Organisation" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Website URL </label>
                              <span className="small">The URL can be your organization's website or an opportunity-related
                                URL.</span>
                              <input type="text" name="uname" placeholder defaultValue="https://" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Categories</label>
                              <select className="form-control">
                                <option>Business Plan</option>
                                <option>Camps</option>
                                <option>Case Study</option>
                                <option>Coding Challenge</option>
                                <option>College Festiva</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Skills to be Accessed</label>
                              <input type="text" id="newTag" />
                              <ul id="tagList">
                              </ul>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">About Opportunity *</label>
                              <textarea id="text_area" maxLength={1500} name="message" className="form-control mb-0" cols={30} rows={7} required data-error="Write your message" placeholder style={{height: 100}} defaultValue={""} />
                              <span id="count">100 to 1500</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Application Details</h4>
                        </div>
                        <hr />
                        <div className="professional-sp">
                          <div className="form-group">
                            <label className="fieldlabels">Application Start Date &amp; Time *</label>
                            <input type="datetime" name="uname" placeholder="date" />
                          </div>
                        </div>
                        <div className="col-12 col-md-12">
                          <div className="form-group">
                            <label className="fieldlabels">Application End Date &amp; Time *</label>
                            <input type="date" name="uname" placeholder="date" />
                          </div>
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Salary Range/Year </h4>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="d-flex gap-2">
                                <div>
                                  <select style={{width: 100}}>
                                    <option>INR</option>
                                    <option>USA</option>
                                  </select>
                                </div>
                                <input type="number" placeholder="Enter salary" className="form-control" name defaultValue />
                                <input type="number" placeholder="Enter salary" className="form-control" name defaultValue />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                   <ul className="sf-content m-0">
  <div className="find-com-box p-0">
    <div className="professional-sp">
      <h4>Provide all certifications name </h4>
      <h6>Fill all form field to go to next step</h6>
    </div>
    <hr />
    <div className="professional-sp">
      <div className="form-group">
        <label className="fieldlabels">Certification</label>
        <input type="text" name="uname" placeholder="Certification" />
        class="add2 default-btn cursor-pointer p-0 rounded px-3"&gt;Add
        +
      </div>
      <div className="items2 mb-3" />
    </div>
  </div>
</ul>

                  </div>
                  <div className="sf-steps-navigation d-flex justify-content-between">
                    <button id="sf-prev" type="button" className="btn btn-light">Previous</button>
                    <span id="sf-msg" className="sf-msg-error" />
                    <button id="sf-next" type="button" className="btn default-btn">Next</button>
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

export default RecruitorStep
