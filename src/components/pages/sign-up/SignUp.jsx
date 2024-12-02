import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
  RegionSelect,
  PhonecodeSelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";




const SignUp = () => {

  const [region, setRegion] = useState("");
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  


const [firstName , setFirstName] = useState('')
const [lastName , setLastName] = useState('')
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [cpassword , setCpassword] = useState('')
const [tc , setTc] = useState(false)

function formHandle(e){

e.preventDefault()
console.log(`Country : ${country} State: ${state} City: ${city} FirstName: ${firstName}  LastName: ${lastName} Email: ${email} Password: ${password}  ConfirmPassword: ${cpassword} T&C: ${tc}`);

}
const navigate =useNavigate()
  function StudentStep(){
    navigate("/student-step")
  }
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
                      <img
                        src="/src/assets/images/logos/logo-full.png"
                        height={50}
                        className="logo-one rounded-pill"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-nav nav-area">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light p-0">
                  <Link className="navbar-brand" to="/">
                    <img
                      src="/src/assets/images/logos/logo-full.png"
                      className="logo-one rounded-pill"
                      alt="Logo2"
                    />
                  </Link>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav w-100 ms-5">
                      <li className="nav-item">
                        <Link to="/training-program" className="nav-link">
                          Training Programs
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/recruitor-manager" className="nav-link">
                          Recruiter
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/trainer-mentors" className="nav-link">
                          Mentorship
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contactus" className="nav-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                    <div className="nav-widget-form me-3 d-none d-md-none d-lg-block">
                      <form className="browser-default right position-relative">
                        <input
                          id="search-input"
                          placeholder="Search"
                          type="text"
                          className="browser-default search-field"
                          name="q"
                          defaultValue
                          autoComplete="off"
                          aria-label="Search box"
                        />
                        <label htmlFor="search-input">
                          <i className="ri-search-line" />
                        </label>
                        <i className="material-icons">cancel</i>
                        <div className="search-popup">
                          <div className="search-content">
                            <ul className="popup-list">
                              <li >
                                <Link className="grey-text" to="#">
                                  Google
                                </Link>
                              </li>
                              <li >
                                <Link className="grey-text" to="#">
                                  Apple
                                </Link>
                              </li>
                              <li >
                                <Link className="grey-text" to="#">
                                  Microsoft
                                </Link>
                              </li>
                              <li >
                                <Link className="grey-text" to="#">
                                  Github
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="others-options login__signup gap-2 d-flex align-items-center">
                      <div className="optional-item">
                        <Link to="/signin" className="defaultsignin rounded-pill">
                          Sign In
                        </Link>
                      </div>
                      <div className="optional-item">
                        <Link to="/signup" className="default-btn two rounded-pill">
                          Sign up
                        </Link>
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
                    <Link to="/signin" className="defaultsignin rounded-pill">
                      Sign In
                    </Link>
                  </div>
                  <div className="optional-item">
                    <Link to="/signup" className="default-btn two rounded-pill">
                      Sign up
                    </Link>
                  </div>
                </div>
                <div className="container">
                  <div className="side-nav-inner">
                    <div className="side-nav justify-content-center align-items-center">
                      <div className="side-item">
                        <form className="search-form">
                          <input
                            type="search"
                            className="form-control"
                            placeholder="Search courses"
                          />
                          <button type="submit">
                            <i className="ri-search-line" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_space" />
        <div className="user-area p-0 p-md-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-none d-md-block d-lg-block p-0">
                <div className="user_login">
                  <img
                    src="/src/assets/images/login_2.gif"
                    className="imgk-fluid w-100"
                    alt="login-banner"
                  />
                </div>
              </div>
              <div className="col-lg-6 p-0 d-flex">
                <div className="user-all-form userlogin position-relative">
                  <div className="login_bottom">
                    <img src="/src/assets/images/login-bottom.png" />
                  </div>
                  <div className="contact-form m-0 py-0">
                    <img
                      src="/src/assets/images/logos/logo-full.png"
                      className="logo_login rounded-pill"
                      alt="Logo3"
                    />
                    <h3 className="user-title"> Sign up for an account</h3>
                    <ul className="nav tabs_signup justify-content-start gap-2">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/signup">
                          Student
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/recruitor">
                          Recruiter
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/mentorSignup">
                          Mentor
                        </Link>
                      </li>
                    </ul>
                    <form id="contactForms" className="mt-2" onSubmit={formHandle} >
                      <div className="row">
                        <div className="col-lg-12 mb-3 mt-3">
                          <h5>Location</h5>
                        </div>
                        <div className="col-lg-4">
  <div className="form-floating form-group">
  <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder=" Country"
        region={region}
      />
  </div>
</div>

<div className="col-lg-4">
  <div className="form-floating form-group">
  <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder=" State"
      />
  </div>
</div>

<div className="col-lg-4">
  <div className="form-floating form-group">
    <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder=" City"
      />
  </div>
</div>
 <div className="col-lg-6">
                          <div className="form-floating form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              value={firstName} onChange={(e)=> setFirstName(e.target.value)} required
                            />
                            <label htmlFor="floatingInput">First Name</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-floating form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              value={lastName} onChange={(e)=> setLastName(e.target.value)} required
                            />
                            <label htmlFor="floatingInput">Last Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-floating form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="floatingInput"
                              value={email} onChange={(e)=> setEmail(e.target.value)} required
                            />
                            <label htmlFor="floatingInput">University Email</label>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-floating form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="floatingInput"
                              value={password} onChange={(e)=> setPassword(e.target.value)} required
                            />
                            <label htmlFor="floatingInput">Password</label>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <div className="form-floating form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="floatingInput"
                              value={cpassword} onChange={(e)=> setCpassword(e.target.value)} required
                            />
                            <label htmlFor="floatingInput">Confirm Password</label>
                          </div>
                        </div>
                        <div className="col-lg-12 form-condition">
                          <div className="agree-label">
                            <input type="checkbox" id="chb1"  value={tc} onChange={(e)=> setTc(e.target.checked)} required />
                            <label htmlFor="chb1" className="small text-muted">
                              By signing up, you agree to our{" "}
                              <Link to="/terms-and-conditions">Privacy Policy</Link> and{" "}
                              <Link to="/privacy-policy">Terms of Use</Link>.
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                        
                          <button type="submit" className="default-btn w-100 rounded"> Sign up log </button>
                          <button onClick={StudentStep} className="default-btn w-100 rounded">
                            Sign Up Form 2 redirect
                          </button>
                          
                          <h6 className="mt-4 text-center fw-normal text-muted">
                            Already have an account?{" "}
                            <Link className="fw-bold" to="/signin">
                              Login
                            </Link>
                          </h6>
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
  );
};

export default SignUp;
