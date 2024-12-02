import React from 'react'
import { Link } from 'react-router-dom'
const MentorStep = () => {
  return (
    <div>
      <div>
  {/* <div id="preloader"> */}
    <div id="preloader-area">
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
      <div className="spinner" />
    {/* </div> */}
    <div className="preloader-section preloader-left" />
    <div className="preloader-section preloader-right" />
  </div>
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
                  <Link to="./training-program" className="nav-link">
                    Training Programs
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/recruitor-list" className="nav-link">
                    Recruiter
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="./trainer-mentors" className="nav-link active">
                    Mentorship</Link >
                </li>
                <li className="nav-item">
                  <Link to="./contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="./signin" className="default-btn two rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="./signup" className="defaultsignin rounded-pill">Sign up</Link >
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
                  <h5 className="default-btn w-100 text-white m-0 py-3 px-4">Mentors</h5>
                  <div className="left-slid-filter space-box-two shadow-none">
                    <div className="sf-steps-content">
                      <div className="joblisttitle sf-active">
                        <span>1</span>
                        <Link className="list-icons">
                          <h5>Become an FreshGrad Mentor!</h5>
                        </Link>
                      </div>
                     <div>
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
                          <h4>Become an FreshGrad Mentor!</h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-12 col-md-12 mb-3 text-center border-bottom pb-3">
                            <div className="form-group">
                              <label className="fieldlabels">Upload Profile image</label>
                              <div id="profile-upload">
                                <div className="hvr-profile-img"><input type="file" name="logo" id="getval" className="upload w180" title="Dimensions 180 X 180" /></div>
                                <i className="fa ri-camera-2-fill" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label className="fieldlabels">First Name</label>
                              <input type="text" name="uname" placeholder="First Name" defaultValue="OP" />
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="form-group">
                              <label className="fieldlabels">Last Name</label>
                              <input type="text" name="uname" placeholder="Last Name" defaultValue="Kumawat" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Verify email ID *</label>
                              <input type="email" name="uname" placeholder="Email ID" defaultValue="opfreshgrad@gmail.com" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group mb-3">
                              <label className="fieldlabels">Verify Phone Number *</label>
                              <input type="text" id="mobile_code" className="form-control" placeholder={7894567892} defaultValue={7894567890} name="name" />
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Linkedin Profile link </label>
                              <input type="text" name="uname" placeholder defaultValue="https://" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <h5>Location</h5>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label htmlFor="floatingInput">Country</label>
                              <div className="niceCountryInputSelector form-control" data-selectedcountry="US" data-showspecial="false" data-showflags="true" data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label htmlFor="floatingInput">State</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>Rajasthan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label htmlFor="floatingInput">City</label>
                              <select className="form-control">
                                <option>Select</option>
                                <option>Jaipur</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Profession</label>
                              <input type="text" id="newTag" className="m-1" />
                              <ul id="tagList">
                              </ul>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 mt-3">
                            <div className="form-group d-flex gap-4">
                              <div className="form-check radiobtnin0111">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Interviewer
                                </label>
                              </div>
                              <div className="form-check radiobtnin0111">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                  Trainer
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div></ul>
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

export default MentorStep
