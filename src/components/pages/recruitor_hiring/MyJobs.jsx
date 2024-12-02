import React from 'react'
import { Link } from 'react-router-dom'
import RecruitorHeaderComponent from './RecruitorHeaderComponent'
const MyJobs = () => {
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
  {/* notification  */}
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasRightLabel">Notification list</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body p-0">
      <div className="right boxshhd">
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Recent</h6>
          </div>
          <div className="box-body p-0">
            <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                <div className="small">Income tax sops on the cards, The bias in VC funding, and other top
                  news for you</div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">3d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="mb-2">We found a job at askbootstrap Ltd that you may be interested in
                  Vivamus imperdiet venenatis est...</div>
                <button type="button" className="btn btn-outline-success btn-sm">View Jobs</button>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">4d</div>
              </span>
            </div>
          </div>
        </div>
        <div className="box shadow-sm rounded bg-white mb-3">
          <div className="box-title border-bottom p-3">
            <h6 className="m-0">Earlier</h6>
          </div>
          <div className="box-body p-0">
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">
                DRM</div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.
                </div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" style={{}}>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">3d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png"  /></div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed.
                  Pellentesque non metus ullamcorper</div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">3d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan
                    (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                <button type="button" className="btn btn-outline-success btn-sm">Say congrats</button>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">4d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div>
                  <span className="font-weight-normal">Congratulate Mnadeep singh
                    (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                  <div className="small text-success"><i className="fa fa-check-circle" /> You sent Mandeep
                    a message</div>
                </div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">4d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">
                M</div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.
                </div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">3d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png"  /></div>
              <div className="font-weight-bold mr-3">
                <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed.
                  Pellentesque non metus ullamcorper</div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">3d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan
                    (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                <button type="button" className="btn btn-outline-success btn-sm">Say congrats</button>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">4d</div>
              </span>
            </div>
            <div className="p-3 d-flex align-items-center osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png"  />
              </div>
              <div className="font-weight-bold mr-3">
                <div>
                  <span className="font-weight-normal">Congratulate Mnadeep singh
                    (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                  <div className="small text-success"><i className="fa fa-check-circle" /> You sent Mandeep
                    a message</div>
                </div>
              </div>
              <span className="ml-auto mb-auto">
                <div className="btn-group">
                  <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-dots-vertical" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button"><i className="mdi mdi-delete" />
                      Delete</button>
                    <button className="dropdown-item" type="button"><i className="mdi mdi-close" /> Turn
                      Off</button>
                  </div>
                </div>
                <br />
                <div className="text-right text-muted pt-1">4d</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* notification list */}
  <div className="recruiter_list pb-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <form>
            <div className="searchlocation searchjobpost">
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/search-icon.svg"  />
                </div>
                <div className="input-field">
                  <div className="ca-search-form-container">
                    <div className="ca-search-input-container">
                      <div className="ca-search-typewriter-container">
                        <span id="ca-typewriter-here" />
                      </div>
                      <input type="text" id="ca-search-input" className="ca-search-input" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/email.svg"  />
                </div>
                <div className="input-field">
                  <input type="email" placeholder="Email id" className="form-control" required />
                </div>
              </div>
              <div className="iconfield">
                <div className="icon_search">
                  <img src="../src/assets/images/icon/location-icon.svg"  />
                </div>
                <div className="input-field">
                  <input type="text" placeholder="USA, Florida" className="form-control" required />
                </div>
              </div>
              <div className="input-field ad121">
                <input type="submit" defaultValue="Search" className="submit_btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="stepbgss">
                <div className="client_filter-job pt-1 pb-0">
                  <div className="stepsForm">
                    <form method="post" className="mt-0" id="msform">
                      <div className="flexdr position-relative">
                        <div className="sf-steps-form sf-radius">
                          <ul className="sf-content m-0">
                            <div className="find-com-box p-0">
                              <div className="professional-sp row">
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Upload
                                      Logo</label>
                                    <section className="bg-diffrent">
                                      <div className="file-upload-contain">
                                        <input id="multiplefileupload" type="file" hidden accept=".jpg,.gif,.png" />
                                      </div>
                                    </section>
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Job Title
                                      *</label>
                                    <input type="text" name="uname" placeholder="Title" />
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Job
                                      Location</label>
                                    <input type="text" name="uname" placeholder="Location" />
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Enter
                                      Your Organisation *</label>
                                    <input type="text" name="uname" placeholder="Your Organisation" />
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Website
                                      URL </label>
                                    <p className="small">The URL can be your
                                      organization's website or an
                                      opportunity-related
                                      URL.</p>
                                    <input type="text" name="uname"  defaultValue="https://" />
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Skills to
                                      be Accessed </label>
                                    <p className="small">List required
                                      skills to attract participants
                                      with matching abilities or
                                      engage eager individuals seeking
                                      to improve these skills.</p>
                                    <input type="text" id="newTag" />
                                    <ul id="tagList">
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <select>
                                      <option>Select Expertise
                                      </option>
                                      <option>Beginner</option>
                                      <option>Intermediate</option>
                                      <option>Advanced</option>
                                      <option>Expert</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <div className="d-flex gap-2">
                                      <div className="w-100">
                                        <label className="fieldlabels">Application
                                          Start date</label>
                                        <input type="date" name="name" placeholder="start date" />
                                      </div>
                                      <div className="w-100">
                                        <label className="fieldlabels">End
                                          date</label>
                                        <input type="date" name="name" placeholder="end date" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Employment
                                      type</label>
                                    <select className="form-controls">
                                      <option>Select</option>
                                      <option>Full time
                                      </option>
                                      <option>Part-time</option>
                                      <option>Freelance</option>
                                      <option>Trainee </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Salary
                                      Range/Year</label>
                                    <div className="d-flex gap-2">
                                      <div>
                                        <select style={{width: 100}}>
                                          <option>INR</option>
                                          <option>USA</option>
                                        </select>
                                      </div>
                                      <input type="number" placeholder="Crunt Enter salary" className="form-control"   />
                                      <input type="number" placeholder="Expertise salary" className="form-control"   />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-12">
                                  <div className="form-group">
                                    <label className="fieldlabels">Job
                                      Description *</label>
                                    <textarea id="text_area" maxLength={1500} name="message" className="form-control mb-0" cols={30} rows={7} required data-error="Write your message"  style={{height: 100}} defaultValue={"This field helps you to mention the details of the opportunity you are listing. It is better to include Rules, Eligibility, Process, Format, etc., in order to get the opportunity approved. The more details, the better!\n      Guidelines:\n      Mention all the guidelines like eligibility, format, etc.\n      Inter-college team members allowed or not.\n      Inter-specialization team members allowed or not.\n      The number of questions/ problem statements.\n      Duration of the rounds.\n      Rules:\n      Mention the rules of the competition."} />
                                    <span id="count">100 to 1500</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ul>
                        </div>
                        <div className="sf-steps-navigation d-flex justify-content-between">
                          <button id="sf-prev" type="button" className="btn btn-light">Previous</button>
                          <span id="sf-msg" className="sf-msg-error" />
                          <button id="sf-next" type="button" className="btn default-btn">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="left_recruiterlists row">
        <div className="col-md-4 col-lg-4">
          <div className="sticky-header">
            <div className="nav flex-column recruiter_all_lists nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <div className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                <div className="card_rec position-relative">
                  <div className="mentersvies0121">
                    <div className="companylogos position-relative">
                      <img src="../src/assets/images/company-building.png" className="img-fluid rounded" alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <div className="comnam">
                        <h3>Python Developer </h3>
                        <h6 className="sub-title">V2stech Solutions pvt. Ltd.</h6>
                      </div>
                      <p className="perographsv">
                        <i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="skillstopic">
                      <div>Engineering Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png"  alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-exchange-dollar-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">10 - 2000 USD/Hour </p>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-briefcase-4-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold"><span className="fw-normal">Job Type:</span>
                          Full Time </p>
                      </div>
                    </div>
                    <div className="align-items-center">
                      <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="default-btn py-2 rounded"><i className="ri-pencil-line editbtss" /> Edit</Link >
                      <Link to="#" className="default-btn bg-danger py-2 rounded"><i className="ri-delete-bin-line editbtss" />Post Delete</Link >
                    </div>
                  </div>
                </div>
              </div>
              <div className="instructors-details-contents mt-3">
                <div className="card-instrutors shadow bg-white p-4">
                  <h5>Skills</h5>
                  <div className="skillstopic">
                    <div> #Product Consulting</div>
                    <div>#Product Management</div>
                    <div>#How to get high-impact jobs - VCs/Strategy</div>
                    <div>#Career Advice</div>
                    <div>#CAT Preparation</div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Details</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png"  alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-time-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Application Deadline </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-eye-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Impressions </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-calendar-2-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Calendar </p>
                      </div>
                    </div>
                    <div className="align-items-center">
                      <Link to="/job-post" className="default-btn py-2 rounded"><i className="ri-pencil-line editbtss" /> Edit</Link >
                      <Link to="#" className="default-btn bg-danger py-2 rounded"><i className="ri-delete-bin-line editbtss" />Post Delete</Link >
                    </div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Details</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
                    </ul>
                  </div>
                </div>
                <div id="scrollspyHeading2" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>What are the important dates &amp; deadlines?</h5>
                    <div className="d-flex gap-3">
                      <div className="bg-light p-2"><i className="h4 m-0 ri-calendar-2-line" />
                      </div>
                      <div>
                        <p className="small m-0">Application Deadline</p>
                        <span className="small text-muted">31 Dec 24, 11:59 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png"  alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-time-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Application Deadline </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-eye-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Impressions </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-calendar-2-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Calendar </p>
                      </div>
                    </div>
                    <div className="align-items-center">
                      <Link to="/job-post" className="default-btn py-2 rounded"><i className="ri-pencil-line editbtss" /> Edit</Link >
                      <Link to="#" className="default-btn bg-danger py-2 rounded"><i className="ri-delete-bin-line editbtss" />Post Delete</Link >
                    </div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Details</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
                    </ul>
                  </div>
                </div>
                <div id="scrollspyHeading2" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>What are the important dates &amp; deadlines?</h5>
                    <div className="d-flex gap-3">
                      <div className="bg-light p-2"><i className="h4 m-0 ri-calendar-2-line" />
                      </div>
                      <div>
                        <p className="small m-0">Application Deadline</p>
                        <span className="small text-muted">31 Dec 24, 11:59 PM IST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <div className="instructors-details-img m-0">
                <div className="card-instrutors shadow position-relative bg-white p-4">
                  <div className="mentersvies0121 recruiter101s">
                    <div className="position-relative companylogo01">
                      <img src="../src/assets/images/company-building.png"  alt="Instructor" />
                    </div>
                    <div className="instructors-details-contents">
                      <h3>Python Developer</h3>
                      <p><Link to="#"><i className="ri-community-line" /> V2stech Solutions pvt.
                          Ltd.</Link ></p>
                      <p><i className="ri-map-pin-fill" /> Thane, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                  <div className="footerapplly border-top d-flex justify-content-between mt-3 pt-2">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-time-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Application Deadline </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-eye-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Impressions </p>
                        <span className="small text-muted">363</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="bg-light p-2"><i className="ri-calendar-2-line" /></div>
                      <div>
                        <p className="small m-0 fw-bold">Calendar </p>
                      </div>
                    </div>
                    <div className="align-items-center">
                      <Link to="/job-post" className="default-btn py-2 rounded"><i className="ri-pencil-line editbtss" /> Edit</Link >
                      <Link to="#" className="default-btn bg-danger py-2 rounded"><i className="ri-delete-bin-line editbtss" />Post Delete</Link >
                    </div>
                  </div>
                </div>
              </div>
              <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset={100} className="scrollspy-example" tabIndex={0}>
                <div id="scrollspyHeading1" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>Details</h5>
                    <h6>Eureka Outsourcing Solutions is hiring for the role of Customer Service
                      Representative! </h6>
                    <h6>Responsibilities:</h6>
                    <ul>
                      <li>Provide exceptional customer service via phone, email, and chat</li>
                      <li>Resolve customer inquiries and complaints promptly and efficiently
                      </li>
                      <li>Maintain accurate customer records and update information as needed
                      </li>
                      <li>Identify and escalate complex issues to the appropriate team</li>
                      <li>Provide product and service information to customers</li>
                      <li>Follow established customer service policies and procedures</li>
                      <li>Contribute to a positive and professional work environment</li>
                    </ul>
                    <h6>Requirements:</h6>
                    <ul>
                      <li>High school diploma or equivalent</li>
                      <li>Excellent communication and interpersonal skills</li>
                      <li>Strong problem-solving and analytical abilities</li>
                      <li>Proficient in Microsoft Office Suite</li>
                      <li>Ability to work independently and as part of a team</li>
                      <li>Positive attitude and willingness to learn</li>
                    </ul>
                  </div>
                </div>
                <div id="scrollspyHeading2" className="instructors-details-contents mt-3">
                  <div className="card-instrutors shadow bg-white p-4">
                    <h5>What are the important dates &amp; deadlines?</h5>
                    <div className="d-flex gap-3">
                      <div className="bg-light p-2"><i className="h4 m-0 ri-calendar-2-line" />
                      </div>
                      <div>
                        <p className="small m-0">Application Deadline</p>
                        <span className="small text-muted">31 Dec 24, 11:59 PM IST</span>
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

export default MyJobs
