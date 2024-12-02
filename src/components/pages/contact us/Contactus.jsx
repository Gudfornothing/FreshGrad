import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Contactus = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]=useState('')
  const [email, setEmail]=useState('')
  const [number, setNumber]=useState('')
  const [organization, setOrganization]=useState('')
  const [subject, setSubject]=useState([])
  const [message, setMessage]=useState('')
  const [tc, setTc]=useState(false)

  


    function formHandle(e){
      e.preventDefault()
      console.log(`Name:${firstName} Lastname: ${lastName} Email: ${email} Number: ${number} Organization: ${organization} Subject: ${subject} Message: ${message} Terms & conditions: ${tc}`);
        }
 

  return (
    <div className="App">
  
  
  {/* <div id="preloader"> */}
    {/* <div id="preloader-area"> */}
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
  {/* </div> */}
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to='/' >
                <img src="/src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-nav nav-area">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light p-0">
            <Link className="navbar-brand" to="/">
              <img src="/src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
            </Link >
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
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="/trainer-mentors" className="nav-link">
                    Mentorship</Link >
                </li>
                
                
                <li className="nav-item">
                  <Link to="contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/signin" className="default-btn two rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="defaultsignin rounded-pill">Sign up</Link >
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="side-nav-responsive">
        <div className="container">
          <div className="mobilelogin gap-2 d-flex align-items-end">
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="header_space" />
  <div className="inner-banner contact_bgus inner-banner-bg ptb-100" style={{backgroundImage: 'url(/src/assets/images/inner-banner/banner2.png)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-8 my-auto">
          <div className="inner-title py-2">
            <Link to="#contactus" className="default-btn bg-white text-dark fw-bold rounded">Contact Us</Link >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="faq-area bg-light pt-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12 mx-auto">
          <div className="faq-accordion">
            <div className="courses-details-contact">
              <div className="tab courselfaq courses-details-tab">
                <ul className="tabs justify-content-center">
                  <li>
                    Student
                  </li>
                  <li>
                    Mentor
                  </li>
                  <li>
                    Recruiter
                  </li>
                </ul>
                <div className="section-title mb-45">
                  <h2>Frequently Asked Question</h2>
                </div>
                <div className="tab_content current active">
                  <div className="tabs_item current">
                    <ul className="accordion">
                      <li className="accordion-item p-3">
                        <Link  className="accordion-title active" >
                          <i className="ri-add-fill" />
                          How do we create course content?
                        </Link >
                        <div className="accordion-content show">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                            nonummy nibh sed
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                            ut wisi enim
                            veniam lorem dolore magna aliqua consectetuer adipiscing elit
                            diam nonummy nibh
                            sed
                            euismod tincidunt ut.
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item p-3">
                        <Link  className="accordion-title" >
                          <i className="ri-add-fill" />
                          How can i manage my account?
                        </Link >
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                            nonummy nibh sed
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                            ut wisi enim
                            veniam lorem dolore magna aliqua consectetuer adipiscing elit
                            diam nonummy nibh
                            sed
                            euismod tincidunt ut.
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item p-3">
                        <Link  className="accordion-title" >
                          <i className="ri-add-fill" />
                          What are the benefits of ledu learning?
                        </Link >
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                            nonummy nibh sed
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                            ut wisi enim
                            veniam lorem dolore magna aliqua consectetuer adipiscing elit
                            diam nonummy nibh
                            sed
                            euismod tincidunt ut.
                          </p>
                        </div>
                      </li>
                      <li className="accordion-item p-3">
                        <Link  className="accordion-title" >
                          <i className="ri-add-fill" />
                          Is support for learners included?
                        </Link >
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam
                            nonummy nibh sed
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                            ut wisi enim
                            veniam lorem dolore magna aliqua consectetuer adipiscing elit
                            diam nonummy nibh
                            sed
                            euismod tincidunt ut.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tabs_item">
                    <div className="courses-details-tab-content">
                      <ul className="accordion">
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title active" >
                            <i className="ri-add-fill" />
                            How do we create course content?
                          </Link >
                          <div className="accordion-content show">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            How can i manage my account?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            What are the benefits of ledu learning?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            Is support for learners included?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="courses-details-tab-content">
                      <ul className="accordion">
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title active" >
                            <i className="ri-add-fill" />
                            How do we create course content?
                          </Link >
                          <div className="accordion-content show">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            How can i manage my account?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            What are the benefits of ledu learning?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
                          </div>
                        </li>
                        <li className="accordion-item p-3">
                          <Link  className="accordion-title" >
                            <i className="ri-add-fill" />
                            Is support for learners included?
                          </Link >
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                              diam nonummy nibh sed
                              euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat ut wisi enim
                              veniam lorem dolore magna aliqua consectetuer adipiscing
                              elit diam nonummy nibh
                              sed
                              euismod tincidunt ut.
                            </p>
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
  </div>
  <div className="contact-widget-area pt-100 pb-5" id="contactus">
    <div className="container">
     <div className="row">
  <div className="col-md-4">
    <div className="contact-info-card">
      <i className="ri-map-pin-fill" />
      <h3>Our location </h3>
      <p>Ca 560 Bush St &amp; 20th Ave, Apt 5</p>
      <p>San Francisco,230909</p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="contact-info-card">
      <i className="ri-mail-fill" />
      <h3>Email us</h3>
      <p><Link to="#"><span className="__cf_email__">info@gmail.com</span></Link ></p>
      <p><Link to="#"><span className="__cf_email__">freshgrad@gmail.com</span></Link ></p>
    </div>
  </div>
  <div className="col-md-4">
    <div className="contact-info-card">
      <i className="ri-phone-fill" />
      <h3>Phone</h3>
      <p><Link to="tel:+44587154756">+44 587 154756</Link ></p>
      <p><Link to="tel:+44555514574">+44 5555 14574</Link ></p>
    </div>
  </div>
</div>

      <div className="row">
        <div className="col-md-4">
          <div className="contact-info-card contact_info me-0 me-lg-4">
            <i className="ri-map-pin-fill" />
            <h3>Our location </h3>
            <p>Ca 560 Bush St &amp; 20th Ave, Apt 5</p>
            <p>San Francisco,230909</p>
          </div>
          <div className="contact-info-card contact_info me-0 me-lg-4">
            <i className="ri-mail-fill" />
            <h3>Email us</h3>
            <p><Link to="#"><span className="__cf_email__">info@gmail.com</span></Link ></p>
            <p><Link to="#"><span className="__cf_email__">freshgrad@gmail.com</span></Link ></p>
          </div>
          <div className="contact-info-card contact_info me-0 me-lg-4">
            <i className="ri-phone-fill" />
            <h3>Phone</h3>
            <p><Link to="tel:+44587154756">+44 587 154756</Link ></p>
            <p><Link to="tel:+44555514574">+44 5555 14574</Link ></p>
          </div>
        </div> 
        <div className="col-md-12 col-lg-8 my-auto">
          <div className="section-title mb-3">
            <h2>Get In Touch With Us</h2>
          </div>
          <div className="contact-form p-0">
            <form id="contactForms" onSubmit={formHandle} className="formcontact">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-floating form-group">
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="name" className="form-control" required data-error="Please Enter Your Name"   />
                    <label className="mb-2" htmlFor="floatingInput">First Name</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating form-group">
                    <input type="text" name="name" value={lastName} onChange={(e)=>setLastName(e.target.value)} id="name" className="form-control" required data-error="Please Enter Your Name"  />
                    <label className="mb-2" htmlFor="floatingInput">Last Name</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating form-group">
                    <input type="email" name="email" id="email" className="form-control" required data-error="Please Enter Your Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label className="mb-2" htmlFor="floatingInput">Email ID</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating form-group phonefloting">
                    <label className="mb-2" htmlFor="floatingInput"  >Phone Number</label>
                    <input type="number" id="mobile_code" className="form-control" name="phone_number" required data-error="Please Enter Your number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-floating form-group">
                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please Enter Your Organization" value={organization} onChange={(e)=> setOrganization(e.target.value)} />
                    <label className="mb-2" htmlFor="floatingInput">Organization</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 mb-3">
                  <div className="d">
                    <label className="mb-1 fw-bold" >Subject</label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="subject" id="flexRadioDefault1" checked={subject === "Support"} value="Support" onChange={(e)=> setSubject(e.target.value)}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          Support
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="subject" id="flexRadioDefault2" checked={subject === "Partnership"}  value="Parternship" onChange={(e)=> setSubject(e.target.value)}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                          Partnership
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="subject" id="flexRadioDefault3" checked={subject === "Investor"} value='Investor' onChange={(e)=> setSubject(e.target.value)}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                          Investor
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="subject" id="flexRadioDefault4" checked={subject === "Feedback"} value="Feedback" onChange={(e)=> setSubject(e.target.value)}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                          Feedback
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-floating form-group">
                    <textarea id="text_area" maxLength={1500} name="message" className="form-control" cols={30} rows={7} required data-error="Write your message"   value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <label className="mb-2" htmlFor="floatingInput" >Message</label>
                    <span id="count">100 to 1500</span>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="agree-label">
                    <input type="checkbox" id="chb1" value={tc} onChange={(e)=>setTc(e.target.checked)} required data-error="Please agree to our t&c to continue"/>
                    <label htmlFor="chb1">
                      Accept <Link to="#">Terms &amp; Conditions</Link > And <Link to="#">Privacy
                        Policy.</Link >
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn">
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
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
  </footer>
</div>


  )
}

export default Contactus
