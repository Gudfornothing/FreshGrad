import React from 'react'
import { Link } from 'react-router-dom'
import RecruitorHeaderComponent from './RecruitorHeaderComponent'
const RecruitorDashboard = () => {
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
        <div className="others-options">
          <div className="navbar-category">
            <div className="dropdown category-list-dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButtoncategory" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="assets/images/profile1.jpg" height={50} width={50} className="rounded-pill"  />
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
  <div className="header_space" />
  <div className="enrolled-area-two py-5 pt-3 bg-light">
    <div className="container">
      <div className="row">
        <div className="Dashboard1 col-md-12">
          <h3>Dashboard</h3>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="mb-3">
            <div className="card btn-gradient-121 widget-flat">
              <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
              <div className="card-body">
                <div className="float-end">
                  <i className="mdi ri-profile-line widget-icon" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Number of Customers">Profile Requested</h5>
                <h3 className="mt-2 mb-0">36,254</h3>
              </div> {/* end card-body*/}
              <p className="px-3 py-2 mb-0 text-muted border-top">
                <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card*/}
          </div>
          <div className="mb-3">
            <div className="card widget-flat btn-gradient-success">
              <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
              <div className="card-body">
                <div className="float-end">
                  <i className="mdi widget-icon bg-success-lighten ri-eye-line" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Number of Orders">Profile Views</h5>
                <h3 className="mt-2 mb-0">5,543</h3>
              </div> {/* end card-body*/}
              <p className="px-3 py-2 mb-0 text-muted border-top">
                <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card*/}
          </div> {/* end col*/}
          <div className="mb-3">
            <div className="card widget-flat btn-gradient-danger">
              <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
              <div className="card-body">
                <div className="float-end">
                  <i className="mdi widget-icon bg-success-lighten ri-eye-line" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Average Revenue">View Training Program</h5>
                <h3 className="mt-2 mb-0">6,254</h3>
              </div> {/* end card-body*/}
              <p className="px-3 py-2 mb-0 text-muted border-top">
                <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card*/}
          </div> {/* end col*/}
          <div className="mb-3">
            <div className="card widget-flat btn-gradient-info">
              <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
              <div className="card-body">
                <div className="float-end">
                  <i className="mdi widget-icon ri-command-line" />
                </div>
                <h5 className="text-muted fw-normal mt-0" title="Growth">Profile Interview</h5>
                <h3 className="mt-2 mb-0">78548</h3>
              </div> {/* end card-body*/}
              <p className="px-3 py-2 mb-0 text-muted border-top">
                <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div> {/* end card*/}
          </div> {/* end col*/}
        </div> {/* end col*/}
        <div className="col-md-9 mb-3">
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card widget-flat">
                <h4 className="graphtitles">Profile Requested</h4>
                <div className="charthhe" id="chartContainer" style={{height: 240, width: '100%'}} />
              </div> {/* end card*/}
            </div>
            <div className="col-md-6 mb-3">
              <div className="card widget-flat">
                <h4 className="graphtitles">Profile Views</h4>
                <div className="charthhe" id="chartContainer2" style={{height: 240, width: '100%'}} />
              </div> {/* end card*/}
            </div>
            <div className="col-md-6 mb-3">
              <div className="card widget-flat">
                <h4 className="graphtitles">Training Program</h4>
                <div className="charthhe" id="chartContainer3" style={{height: 240, width: '100%'}} />
              </div> {/* end card*/}
            </div>
            <div className="col-md-6 mb-3">
              <div className="card widget-flat">
                <h4 className="graphtitles">Profile Interview</h4>
                <div className="charthhe" id="chartContainer4" style={{height: 240, width: '100%'}} />
              </div> {/* end card*/}
            </div>
          </div>
        </div> {/* end col*/}
      <div>
  <div className="col-md-4">
    <div className="card widget-flat">
      <div id="chartContainer5" style={{height: 270, width: '100%'}} />
    </div> 
  </div>
  <div className="col-md-4">
    <div className="card widget-flat">
      <div id="chartContainer6" style={{height: 290, width: '100%'}} />
    </div>
  </div>
</div>

        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card widget-flat btn-gradient-light">
            <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
            <div className="card-body">
              <div className="float-end">
                <i className="mdi widget-icon ri-user-unfollow-line" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Growth">Candidates Rejected</h5>
              <h3 className="mt-2 mb-0">784</h3>
            </div> {/* end card-body*/}
            <p className="px-3 py-2 mb-0 text-muted border-top">
              <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card widget-flat btn-gradient-dark">
            <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
            <div className="card-body">
              <div className="float-end">
                <i className="mdi widget-icon ri-user-search-line" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Growth">Hired Candidates/profiles</h5>
              <h3 className="mt-2 mb-0">5000</h3>
            </div> {/* end card-body*/}
            <p className="px-3 py-2 mb-0 text-muted border-top">
              <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card widget-flat btn-gradient-primary">
            <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
            <div className="card-body">
              <div className="float-end">
                <i className="mdi widget-icon ri-shield-user-line" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Growth">Candidates</h5>
              <h3 className="mt-2 mb-0">10000</h3>
            </div> {/* end card-body*/}
            <p className="px-3 py-2 mb-0 text-muted border-top">
              <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div> {/* end card*/}
        </div> {/* end col*/}
        <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
          <div className="card widget-flat btn-gradient-warning">
            <div className="bg-layerbg"><img src="../src/assets/images/circle.svg"  /></div>
            <div className="card-body">
              <div className="float-end">
                <i className="mdi widget-icon flaticon-student" />
              </div>
              <h5 className="text-muted fw-normal mt-0" title="Growth">Students University</h5>
              <h3 className="mt-2 mb-0">4578</h3>
            </div> {/* end card-body*/}
            <p className="px-3 py-2 mb-0 text-muted border-top">
              <span className="text-success me-2"><i className="ri-upload-cloud-line" /> 5.27%</span>
              <span className="text-nowrap">Since last month</span>
            </p>
          </div> {/* end card*/}
        </div> {/* end col*/}
      </div> {/* end row */}
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

export default RecruitorDashboard
