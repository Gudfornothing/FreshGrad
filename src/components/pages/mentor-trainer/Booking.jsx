import React from 'react'
import { Link } from 'react-router-dom'
const Booking = () => {
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
                <img src="../assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
              </Link >
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
                  <Link to="mentor-/dashboard" className="nav-link">
                    Dashboard
                  </Link >
                </li>
                <li className="nav-item">
                  <Link to="mentor-/profile">Profile</Link >
                </li>
                <li className="nav-item">
                  <Link to="coaching-center.html">Coaching Center</Link >
                </li>
              </ul>
              <div className="others-options gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-notification-2-line" /></button>
                </div>
                <div className="navbar-category">
                  <div className="dropdown category-list-dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="/src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt />
                      Freshgrad
                      <i className="ri-arrow-down-s-line" />
                    </button>
                    <div className="dropdown-menu profile_dropdown" aria-labelledby="dropdownMenuButtoncategory">
                      <Link to="/profile" className="nav-link-item">
                        Profile
                      </Link >
                      <Link to="booking.html" className="nav-link-item">
                        Booking time Slot
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
                    <img src="/src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt />
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
    </div>
  </div>
  <div className="header_space" />
  <div className="recruiter_list pb-5 pt-4">
    <div className="container-fluid">
      <div className="row">
        <table className="table tabledatews">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
              <td>
                <div className="timeslotbook skillstopic addtimes">
                  <div>10:00Am To 11:00Am</div>
                  <div>11:00Am To 12:00pm</div>
                  <div>12:00pm To 01:00Am</div>
                  <div>01:00Am To 02:00Am</div>
                  <div>02:00Am To 03:00Am</div>
                  <div>03:00Am To 04:00Am</div>
                  <div>04:00Am To 05:00Am</div>
                  <div>05:00Am To 06:00Am</div>
                  <div>06:00Am To 07:00Am</div>
                  <div>07:00Am To 08:00Am</div>
                  <div>08:00Am To 09:00Am</div>
                  <div>09:00Am To 10:00Am</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="#" className="btn default-btn btn-lg rounded">Save Section</Link >
        <div>
  <div className="col-md-6">
    <div className="blog-card blog-card-bg shadow p-3 rounded">
      <div className="content">
        <h3>Calendar</h3>
        <p>
          Once you 'Set Availability' you can view the Available Date and times on Times on this
          Calendar
        </p>
        <div className="calendardropdowns">
          <div id="demo" />
        </div>
        <div id="demo-timegrid" />
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="billing-details py-4">
      <h3 className="title">Set Availability</h3>
      <p>Select Time</p>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>From <span className="required">*</span></label>
            <input type="time" className="form-control" autocompleted />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>To <span className="required">*</span></label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="col-auto d-flex align-items-end">
          <div className="form-group">
            <Link to="#" className="btn btn-danger btn-lg rounded"><i className="ri-delete-bin-6-fill" /></Link >
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>From <span className="required">*</span></label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>To <span className="required">*</span></label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="col-auto d-flex align-items-end">
          <div className="form-group">
            <Link to="#" className="btn btn-danger btn-lg rounded"><i className="ri-delete-bin-6-fill" /></Link >
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>From <span className="required">*</span></label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label>To <span className="required">*</span></label>
            <input type="time" className="form-control" />
          </div>
        </div>
        <div className="col-auto d-flex align-items-end">
          <div className="form-group">
            <Link to="#" className="btn btn-primary btn-lg rounded"><i className="ri-add-circle-fill" /></Link >
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <Link to="#" className="btn btn-primary w-100 btn-lg">Save</Link >
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

    </div>
  )
}

export default Booking
