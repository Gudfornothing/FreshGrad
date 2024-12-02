import React from 'react'
import { Link } from 'react-router-dom'
import RecruitorHeaderComponent from './RecruitorHeaderComponent'
const AllProfile = () => {
  return (
    <div>
      <RecruitorHeaderComponent/>
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
    
  <div className="header_space" />
  <div className="recruiter_list pb-5 pt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ul className="nav tabs_signup hiredpppp justify-content-start gap-2 mb-3">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/new-profile">New Profile</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recruitor-interviewing">Interviewing</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recruitor-list">Hired</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="all-/profile">All</Link >
            </li>
          </ul>
          <div className="card">
            <div className="card-body shadow">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                  <label>Show</label>
                  <select className="form-select">
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
                <div className="form-group d-flex align-items-center gap-3">
                  <label>Search</label>
                  <input type="text" placeholder="Search" className="form-control" required />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-striped reusme-table mb-0">
                  <thead>
                    <tr>
                      <th>Sr.</th>
                      <th>Status</th>
                      <th>Job Title</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Rusume</th>
                      <th>Email ID</th>
                      <th>Phone Number</th>
                      <th>Training Program</th>
                      <th>Degree</th>
                      <th>University Name</th>
                      <th>Graduation Date:</th>
                      <th>Location</th>
                      <th>Work Authorization</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01.</td>
                      <td><span className="badge badge-gradient-success">Hired</span>
                      </td>
                      <td>Cybersecurity engineer</td>
                      <td>Ravi</td>
                      <td>Sharma</td>
                      <td><Link to="#">ravi_Sharama_resume.pdf</Link ></td>
                      <td><Link to="#"><u>ravi@gmail.com</u></Link ></td>
                      <td>+1 789456789</td>
                      <td>Networking</td>
                      <td>PHD</td>
                      <td>University</td>
                      <td>16/12/2024</td>
                      <td>Lorem Ipsum is simply dummy text</td>
                      <td>US Citizen</td>
                    </tr>
                    <tr>
                      <td>02.</td>
                      <td><span className="badge badge-gradient-danger">Rejected</span>
                      </td>
                      <td>Cybersecurity engineer</td>
                      <td>Ravi</td>
                      <td>Sharma</td>
                      <td><Link to="#">ravi_Sharama_resume.pdf</Link ></td>
                      <td><Link to="#"><u>ravi@gmail.com</u></Link ></td>
                      <td>+1 789456789</td>
                      <td>Networking</td>
                      <td>PHD</td>
                      <td>University</td>
                      <td>16/12/2024</td>
                      <td>Lorem Ipsum is simply dummy text</td>
                      <td>US Citizen</td>
                    </tr>
                    <tr>
                      <td>03.</td>
                      <td><span className="badge badge-gradient-warning">Interview</span>
                      </td>
                      <td>Cybersecurity engineer</td>
                      <td>Ravi</td>
                      <td>Sharma</td>
                      <td><Link to="#">ravi_Sharama_resume.pdf</Link ></td>
                      <td><Link to="#"><u>ravi@gmail.com</u></Link ></td>
                      <td>+1 789456789</td>
                      <td>Networking</td>
                      <td>PHD</td>
                      <td>University</td>
                      <td>16/12/2024</td>
                      <td>Lorem Ipsum is simply dummy text</td>
                      <td>US Citizen</td>
                    </tr>
                  </tbody>
                </table>
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
  </footer></div>

    
  )
}

export default AllProfile
