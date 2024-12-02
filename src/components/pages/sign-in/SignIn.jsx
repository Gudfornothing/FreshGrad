import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import MentorDashboard from '../mentor-trainer/MentorDashboard';
import Background from 'hero-slider/dist/components/Slide/Background';

const SignIn = () => {
  const [username, setUsername]=useState('')
  const [password, setPassword] = useState('')

  function FormHandler(e){
e.preventDefault()
console.log(`Username : ${username}  Password : ${password}`);

  }


  const navigate =useNavigate()
  function MentorDash(){
    navigate("/mentor-dashboard")
  }
  
  function RecruitorDashboard (){
    navigate('/recruitor-dashboard')
  }
  function StudentDashboard(){
navigate("/dashboard")
  }
  return (
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
                    alt="Logo" 
                  />
                </Link>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
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
                    <form  className="browser-default right position-relative">
                      <input 
                        id="search-input" 
                        placeholder="Search" 
                        type="text" 
                        className="browser-default search-field" 
                        name="q" 
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
                            <li><Link className="grey-text" to="#">Google</Link></li>
                            <li><Link className="grey-text" to="#">Apple</Link></li>
                            <li><Link className="grey-text" to="#">Microsoft</Link></li>
                            <li><Link className="grey-text" to="#">Github</Link></li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="others-options login__signup gap-2 d-flex align-items-center">
                    <div className="optional-item">
                      <Link to="/signin" className="default-btn two rounded-pill">Sign In</Link>
                    </div>
                    <div className="optional-item">
                      <Link to="/signup" className="defaultsignin rounded-pill">Sign up</Link>
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
                  <Link to="/signin" className="default-btn two rounded-pill">Sign In</Link>
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="defaultsignin rounded-pill">Sign up</Link>
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
                  className="img-fluid w-100" 
                  alt="login-banner" 
                />
              </div>
            </div>

            <div className="col-lg-6 d-flex p-0">
              <div className="user-all-form userlogin position-relative">
                <div className="login_bottom">
                  <img src="/src/assets/images/login-bottom.png" alt="login-bottom" />
                </div>
                <div className="contact-form">
                  <img 
                    src="/src/assets/images/logos/logo-full.png" 
                    className="logo_login rounded-pill" 
                    alt="Logo" 
                  />

                  <h3 className="user-title"> Log In to your Account</h3>
                  <p>Welcome back! Select method to log in:</p>

                  <form id="contactForms" className="mt-4" onSubmit={FormHandler}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-floating form-group">
                          <input 
                            type="text" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Username/ Email ID" value={username} onChange={(e)=>setUsername(e.target.value)} 
                            required
                          />
                          <label htmlFor="floatingInput">Username/ Email ID</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating form-group">
                          <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            value={password} onChange={(e)=> setPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="floatingPassword">Password</label>
                        </div>
                      </div>
                      <div className="col-lg-12 form-condition">
                        <div className="agree-label">
                          <input type="checkbox" id="chb1" />
                          <label htmlFor="chb1">
                            Remember Me 
                            <Link className="forget" to="/forgot-password">Forgot Password?</Link>
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                      <button type='submit' style={{backgroundColor: 'lightblue' , color: 'black'}}>Login</button>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                        < button onClick={StudentDashboard}><h2>Sign in Directly to student</h2> </button>
                        < button onClick={RecruitorDashboard}><h2>Sign in Directly to Recruitor</h2> </button>
                        < button onClick={MentorDash}><h2>Sign in Directly to Mentor</h2> </button>
                        <h6 className="mt-4 text-center fw-normal text-muted">
                          Don’t have an account? 
                          <Link className="fw-bold" to="/signup">Create an account</Link>
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
  );
};

export default SignIn;
