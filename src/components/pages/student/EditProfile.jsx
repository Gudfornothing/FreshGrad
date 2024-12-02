import React from 'react'
import { Link } from 'react-router-dom'
const EditProfile = () => {
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
  <div className="stepbg">
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
                    <li className="list-group-item"><Link className="active" to="edit-/profile"> <i className="ri-shield-user-fill" /> My Profile</Link ></li>
                    <li className="list-group-item"><Link to="/dashboard"> <i className="ri-bookmark-fill" /> My Courses</Link >
                    </li>
                    <li className="list-group-item"><Link to="/resume-student"> <i className="ri-bookmark-fill" /> Resume</Link >
                    </li>
                    <li className="list-group-item"><Link to="/forgot-password"> <i className="ri-lock-password-fill" /> Reset Password</Link >
                    </li>
                    <li className="list-group-item"><Link to="#" className="logoutbtn2"> <i className="ri-logout-box-fill" />
                        LOGOUT</Link ></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative p-3 p-md-4 shadow-lg">
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
                        <input type="text" name="uname" placeholder="First Name" defaultValue="Omprakash" disabled />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="fieldlabels">Last Name</label>
                        <input type="text" name="uname" placeholder="Last Name" defaultValue="Kumawat" disabled />
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
                        <input type="text" name="uname" placeholder="https://in.linkedin.com/" defaultValue="https://in.linkedin.com/op34w" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <h5>Location</h5>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label htmlFor="floatingInput">Country</label>
                        <div className="niceCountryInputSelector form-control countryf451s" data-selectedcountry="US" data-showspecial="false" data-showflags="true" data-i18nall="All selected" data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback" />
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
                        <label className="fieldlabels">DOB</label>
                        <input type="date" name="uname" placeholder="DOB" defaultValue="DOB" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <label className="fieldlabels">Degree Name</label>
                        <input type="text" id="newTag" className="m-1" />
                        <ul id="tagList">
                        </ul>
                      </div>
                    </div>
                    <hr />
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <Link to="#" className="default-btn rounded px-5">Submit</Link >
                      </div>
                    </div>
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

export default EditProfile
