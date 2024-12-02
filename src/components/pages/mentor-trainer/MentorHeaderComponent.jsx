import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';  // Use react-bootstrap dropdown

const MentorHeaderComponent = () => {
  const userName = "FreshGrad";  // Example dynamic name (could be from context or props)

  return (
    <div>
      <div className="bg_nav-slid bg-white">
        <div className="navbar-area ledu-area otherpages-menu">
          {/* Mobile Navbar */}
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

          {/* Desktop Navbar */}
          <div className="desktop-nav nav-area">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light p-0">
                <Link className="navbar-brand" to="/">
                  <img src="../src/assets/images/logos/logo-full.png" className="logo-one rounded-pill" alt="Logo" />
                </Link>

                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav w-100 ms-5">
                    <li className="nav-item">
                      <Link to="/mentor-dashboard" className="nav-link active">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/mentor-profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/coaching-center" className="nav-link">Coaching Center</Link>
                    </li>
                  </ul>

                  {/* Navbar Options (Job Post, Notifications, Profile Dropdown) */}
                  <div className="others-options gap-2 d-flex align-items-center">
                    <div className="optional-item">
                      <button className="btn btn-primary rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="ri-notification-2-line" />
                      </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="navbar-category">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <img src="../src/assets/images/profile1.jpg" height={50} width={50} className="rounded-pill" alt="Profile" />
                          {userName}  {/* Dynamic username */}
                          <i className="ri-arrow-down-s-line" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item ><Link to='#'>Profile</Link></Dropdown.Item>
                          <Dropdown.Item ><Link to='#'>Booking Time Slot</Link></Dropdown.Item>
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

export default MentorHeaderComponent;
