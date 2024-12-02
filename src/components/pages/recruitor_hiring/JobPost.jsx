import React from 'react'
import { Link } from 'react-router-dom'
const JobPost = () => {
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
                  <Link className="nav-link" to="my-team">My Team</Link >
                </li>
                <li className="nav-item">
                  <Link to="/recruitor-list">Candidate profile</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/my-jobs">My Jobs</Link >
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
          </Link >
        </div>
      </div>
    </div>
  </div>
</div>

              <div className="col-md-8 mx-auto">
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
                              <label className="fieldlabels">Upload Logo</label>
                              <section className="bg-diffrent">
                                <div className="file-upload-contain">
                                  <input id="multiplefileupload" type="file" hidden accept=".jpg,.gif,.png" />
                                </div>
                              </section>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Job Title *</label>
                              <input type="text" name="uname" placeholder="Title" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Job Location</label>
                              <input type="text" name="uname" placeholder="Location" />
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
                              <p className="small">The URL can be your organization's website or an opportunity-related
                                URL.</p>
                              <input type="text" name="uname" placeholder defaultValue="https://" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Skills to be Accessed </label>
                              <p className="small">List required skills to attract participants with matching abilities or
                                engage eager individuals seeking to improve these skills.</p>
                              <input type="text" id="newTag" />
                              <ul id="tagList">
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <select>
                                <option>Select Expertise</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                                <option>Expert</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <div className="d-flex gap-2">
                                <div className="w-100">
                                  <label className="fieldlabels">Application Start date</label>
                                  <input type="date" name="name" placeholder="start date" />
                                </div>
                                <div className="w-100">
                                  <label className="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Employment type</label>
                              <select className="form-controls">
                                <option>Select</option>
                                <option selected>Full time </option>
                                <option>Part-time</option>
                                <option>Freelance</option>
                                <option>Trainee </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Salary Range/Year</label>
                              <div className="d-flex gap-2">
                                <div>
                                  <select style={{width: 100}}>
                                    <option>INR</option>
                                    <option>USA</option>
                                  </select>
                                </div>
                                <input type="number" placeholder="Crunt Enter salary" className="form-control" name defaultValue />
                                <input type="number" placeholder="Expertise salary" className="form-control" name defaultValue />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Job Description *</label>
                              <textarea id="text_area" maxLength={1500} name="message" className="form-control mb-0" cols={30} rows={7} required data-error="Write your message" placeholder style={{height: 100}} defaultValue={"This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!\n                          Guidelines:\n                          Mention all the guidelines like eligibility, format, etc.\n                          Inter-college team members allowed or not.\n                          Inter-specialization team members allowed or not.\n                          The number of questions/ problem statements.\n                          Duration of the rounds.\n                          Rules:\n                          Mention the rules of the competition."} />
                              <span id="count">100 to 1500</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div className="sf-steps-navigation d-flex justify-content-between">
                    <button id="sf-prev" type="button" className="btn btn-light">Previous</button>
                    <span id="sf-msg" className="sf-msg-error" />
                    <button id="sf-next" type="button" className="btn default-btn">Submit</button>
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

export default JobPost
