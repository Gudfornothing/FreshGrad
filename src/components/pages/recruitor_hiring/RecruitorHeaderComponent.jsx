import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';  // Use react-bootstrap dropdown

const RecruitorHeaderComponent = () => {
  const userName = "FreshGrad"; // Example dynamic name (could be from context or props)

  return (
    <div>
      <div className="bg_nav-slid bg-white">
        <div className="navbar-area ledu-area otherpages-menu">
          <div className="mobile-responsive-nav">
            <div className="container">
              <div className="mobile-responsive-menu">
                <div className="logo">
                  <Link to="/">
                    <img src="../src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="desktop-nav nav-area">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light p-0">
                <Link className="navbar-brand" to="/">
                  <img src="../src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
                </Link>

                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav w-100 ms-5">
                    <li className="nav-item">
                      <Link to="/recruitor-dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/my-team">My Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/recruitor-list">Candidate Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/my-jobs">My Jobs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/interview-guide">Interview Guide</Link>
                    </li>
                  </ul>

                  <div className="others-options gap-2 d-flex align-items-center">
                    <div className="optional-item">
                      <Link to="/job-post" className="default-btn two p-2 px-3 rounded-pill">Job Post</Link>
                    </div>
                    <div className="optional-item">
                      <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="ri-notification-2-line" />
                      </button>
                    </div>
                    <div className="navbar-category">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt="Profile" />
                          {userName}  {/* Dynamic username */}
                          <i className="ri-arrow-down-s-line" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item ><Link to='/profile-r'>Edit Profile</Link></Dropdown.Item>
                          <Dropdown.Item ><Link to=''>View Profile</Link></Dropdown.Item>
                          <Dropdown.Item ><Link to=''>Notifications</Link></Dropdown.Item>
                          <Dropdown.Item ><Link to=''>Settings</Link></Dropdown.Item>
                          <Dropdown.Item ><Link to='/'>Logout</Link></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitorHeaderComponent;
