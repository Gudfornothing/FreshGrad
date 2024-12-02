import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const StudentStep = () => {

  const [race,setRace]=useState('')
  const [linkedin,setLinkedin]=useState('')
  const [firstName , setFirstName] = useState('')
  const [lastName , setLastName] = useState('')
  const [mobile , setMobile] = useState('')
  const [guidelines , setGuidelines] = useState(false)

  const [degree , setDegree] = useState('')
  const [university , setUniversity] = useState('')
  const [startdate , setStartdate] = useState('')
  const [endDate , setEndDate] = useState('')

  const [mDegree , setMdegree] = useState('')
  const [mUniversity , setMuniversity] = useState('')
  const [mStartdate , setMstartdate] = useState('')
  const [mEndDate , setMendDate] = useState('')

  const [phd , setPhd] = useState('')
  const [phdUniversity , setPhdUnviversity] = useState('')
  const [phdStartdate , setPhdStartDate] = useState('')
  const [phdEndDate , setPhdEndDate] = useState('')

  const [certification , setCertification] = useState('')
  const [cDate , setCdate] = useState('')
  const [organization , setOrganization] = useState('')

  const [skills , setSkills] = useState('')
  const [expertise , setExpertise] = useState('')
  const [year , setYear] = useState('')

  const [projectTitle , setProjectTitle] = useState('')
  const [webLink , setWebLink] = useState('')
  const [role , setRole] = useState('')
  const [projectDate , setProjectDate] = useState('')
  const [endProjectDate , setEndProjectDate] = useState('')
  const [stillWorking , setStillWorking] = useState(false)
  
  const [profTitle , setProfTitle] = useState('')
  const [profType , setProftype] = useState('')
  const [profCompanyName , setProfCompanyName] = useState('')
  const [profLocation , setProfLocation] = useState('')
  const [profLocationType , setProfLocationType] = useState('')
  const [profCurrentWork , setProfCurrentWork] = useState('')
  const [profStartDate , setProfStartDate] = useState('')
  const [profEndDate , setProfEndDate] = useState('')
  const [profIndustry , setProfIndustry] = useState('')

  const [dob , setDob] = useState('')
  const [allow , setAllow] = useState(false)

  const [allCertificate , setAllCertificate] = useState('')

  function handleForm(e){
    e.preventDefault()
    console.log(`Race:${race} LinkedIn:${linkedin} FirstName:${firstName} LastName:${lastName} Mobile:${mobile} Guidelines:${guidelines} Degree:${degree} University:${university} Start:${mStartdate} End:${mEndDate} PHD:${phd} Phd University:${phdUniversity} Start:${phdStartdate} ENd:${phdEndDate} Certification:${certification} Certif Date:${cDate} Organization${organization} skills:${skills} Expertise:${expertise} Year:${year} Project Title:${projectTitle}  Website Link:${webLink} Role:${role} Project date${projectDate} EndDAte:${endProjectDate} StillWorking:${stillWorking} Professional title:${profTitle} Type:${profType} COmpany${profCompanyName} Location:${profLocation} Current:${profCurrentWork} Start:${profStartDate} End:${profEndDate} Industry:${profIndustry} DOB:${dob} Allow:${allow} All Certificate${allCertificate}`);
    
    
  }

  return (
    <div>
      <div>
  {/* <div id="preloader"> */}
    <div id="preloader-area">
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
  </div>
  <div className="bg_nav-slid bg-white">
    <div className="navbar-area ledu-area otherpages-menu">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <Link to="/">
                <img src="/src/assets/images/logos/logo-full.png" height={50} className="logo-one rounded-pill" alt="logo" />
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
                  <Link to="/training-program" className="nav-link">
                    Training Programs
                  </Link >
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
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link >
                </li>
              </ul>
             <div className="nav-widget-form me-3 d-none d-md-none d-lg-block">
  <form className="browser-default right position-relative">
    <input id="search-input" placeholder="Search" type="text" className="browser-default search-field" name="q" defaultValue autoComplete="off" aria-label="Search box" />
    <label htmlFor="search-input"><i className="ri-search-line" /></label>
    <i className="material-icons">cancel</i>
    <div className="search-popup">
      <div className="search-content">
        <ul className="popup-list">
          <li ><Link className="grey-text" to="#">Google</Link ></li>
          <li ><Link className="grey-text" to="#">Apple</Link ></li>
          <li ><Link className="grey-text" to="#">Microsoft</Link ></li>
          <li ><Link className="grey-text" to="#">Github</Link ></li>
        </ul>
      </div>
    </div>
  </form> 
</div>

              <div className="others-options login__signup gap-2 d-flex align-items-center">
                <div className="optional-item">
                  <Link to="/signin" className="defaultsignin rounded-pill">Sign In</Link >
                </div>
                <div className="optional-item">
                  <Link to="/signup" className="default-btn two rounded-pill">Sign up</Link >
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
              <Link to="/signin" className="default-btn two rounded-pill">Sign In</Link >
            </div>
            <div className="optional-item">
              <Link to="/signin" className="defaultsignin rounded-pill">Sign up</Link >
            </div>
          </div>
          <div className="container">
  <div className="side-nav-inner">
    <div className="side-nav justify-content-center align-items-center">
      <div className="side-item">
        <form className="search-form">
          <input type="search" className="form-control" placeholder="Search courses" />
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
  <div className="stepbg">
    <div className="client_filter-job pt-1 pb-0">
      <div className="stepsForm">
        <form method="post" id="msform" onSubmit={handleForm}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="sf-steps">
                  <h5 className="default-btn w-100 text-white m-0 py-3 px-4">All Steps</h5>
                  <div className="left-slid-filter space-box-two shadow-none">
                    <div className="sf-steps-content">
                      <div className="joblisttitle sf-active">
                        <span>1</span>
                        <Link className="list-icons">
                          <h5>Linkedin Profile</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>2</span>
                        <Link className="list-icons">
                          <h5>Education</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>3</span>
                        <Link className="list-icons">
                          <h5>Certification</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>4</span>
                        <Link className="list-icons">
                          <h5>Skills</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>5</span>
                        <Link className="list-icons">
                          <h5>University Projects</h5>
                        </Link>
                      </div>
                     <div className="joblisttitle">
  <span>5</span>
  <Link className="list-icons">
    <h5>University Projects</h5>
  </Link>
</div>

                      <div className="joblisttitle">
                        <span>6</span>
                        <Link className="list-icons">
                          <h5>Professional experience</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
                        <span>7</span>
                        <Link className="list-icons">
                          <h5>Other</h5>
                        </Link>
                      </div>
                      <div className="joblisttitle">
  <span>7</span>
  <Link className="list-icons">
    <h5>Provide all certifications name </h5>
  </Link>
</div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 d-flex">
                <div className="flexdr position-relative">
                  <div className="sf-steps-form sf-radius">
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Linkedin Profile </h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-12 col-md-12">
  <div className="form-group">
    <label className="fieldlabels" >Ethnicity/Race</label>
    <select className="form-controls" value={race} onChange={(e)=> setRace(e.target.value)}>
      <option value={''}>Select</option>
      <option value="American Indian" >American Indian </option>
      <option value="Alaska Native">Alaska Native</option>
      <option value="Asian">Asian</option>
      <option value="Black">Black </option>
      <option value="African American">African American</option>
      <option value="Indian">Indian</option>
      <option value="Hispanic">Hispanic</option>
      <option value="Native Hawaiian">Native Hawaiian </option>
    </select>
  </div>
</div>

                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Linkedin Profile Url</label>
                              <input type="text" name="uname" placeholder="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"  value={linkedin} onChange={(e)=> setLinkedin(e.target.value)}/>
                            </div>
                          </div>
                         <div>
  <div className="col-md-6">
    <div className="form-group">
      <label className="fieldlabels">First Name: *</label>
      <input type="text" name="fname" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label className="fieldlabels">Last Name: *</label>
      <input type="text" name="lname" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
    </div>
  </div>
  <div className="col-md-12 mb-3">
    <div className="form-group">
      <label className="fieldlabels w-100">Contact No.: *</label>
      <input type="text" id="mobile_code" className="form-control" placeholder="Phone Number" name="name" value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
    </div>
  </div>
</div>

                          <div className="col-lg-12 form-condition">
                            <div className="agree-label d-flex gap-2">
                              <input type="checkbox" id="chb1" className="termcheck" value={guidelines} onChange={(e)=> setGuidelines(e.target.checked)} />
                              <label htmlFor="chb1" className="small text-muted">
                                All your information is collected, stored and processed as per our data
                                processing guidelines. By signing up on FreshGard, you agree to our <Link to="#">Privacy
                                  Policy</Link > and <Link to="#">Terms of Use</Link >
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Bachelor Degree</h4>
                        </div>
                        <hr />
                        <div className="professional-sp">
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Bachelor Degree <span className="text-danger fw-bold">*
                                </span></label>
                              <div className="mb-3">
                                <input type="text" className="m-0" name="name" placeholder="Degree Name" value={degree} onChange={(e)=> setDegree(e.target.value)}/>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name" value={university} onChange={(e)=> setUniversity(e.target.value)}/>
                              <div className="d-flex w-100 gap-2">
                                <div className="w-100">
                                  <label className="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date" value={startdate} onChange={(e)=> setStartdate(e.target.value)}/>
                                </div>
                                <div className="w-100">
                                  <label className="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date"value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="float-right mb-3">
                            <Link to="javascript:void(0)" id="add" className="add2 default-btn cursor-pointer p-0 rounded px-3 py-2">Add +</Link >
                          </div>
                          <hr />
                          <div className="col-12 col-md-12">
                            <div className="professional-sp">
                              <h4>Master Degree</h4>
                            </div>
                            <div className="form-group">
                              <label className="fieldlabels">Master Degree</label>
                              <input type="text" name="name" placeholder="Master Degrees" value={mDegree} onChange={(e)=> setMdegree(e.target.value)}/>
                              <label className="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name"value={mUniversity} onChange={(e)=> setMuniversity(e.target.value)} />
                              <div className="d-flex gap-2">
                                <div className="w-100">
                                  <label className="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date"value={mStartdate} onChange={(e)=> setMstartdate(e.target.value)} />
                                </div>
                                <div className="w-100">
                                  <label className="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date" value={mEndDate} onChange={(e)=> setMendDate(e.target.value)}/>
                                </div>
                              </div>
                            </div>
                            <div className="float-right mb-3">
                              <Link to="javascript:void(0)" id="add" className="add2 default-btn cursor-pointer p-0 rounded px-3 py-2">Add +</Link >
                            </div>
                          </div>
                          <hr />
                          <div className="col-12 col-md-12">
                            <div className="professional-sp">
                              <h4>PHD Degree</h4>
                            </div>
                            <div className="form-group">
                              <label className="fieldlabels">PHD</label>
                              <input type="text" name="uname" placeholder="PHD" value={phd} onChange={(e)=> setPhd(e.target.value)}/>
                            </div>
                            <div className="form-group">
                              <label className="fieldlabels">University Name</label>
                              <input type="text" name="name" placeholder="University Name" value={phdUniversity} onChange={(e)=> setPhdUnviversity(e.target.value)}/>
                              <div className="d-flex gap-2">
                                <div className="w-100">
                                  <label className="fieldlabels">Start date</label>
                                  <input type="date" name="name" placeholder="start date" value={phdStartdate} onChange={(e)=> setPhdStartDate(e.target.value)}/>
                                </div>
                                <div className="w-100">
                                  <label className="fieldlabels">End date</label>
                                  <input type="date" name="name" placeholder="end date" value={phdEndDate} onChange={(e)=> setPhdEndDate  (e.target.value)}/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp d-flex align-items-center justify-content-between">
                          <div>
                            <h4>Certifications: (Optionals) </h4>
                            <h6>Fill all form field to go to next step</h6>
                          </div>
                          <div className="float-right mb-3">
                            <Link to="javascript:void(0)" id="add" className="btn-lg default-btn py-2 px-3 cursor-pointer rounded">Add Certification +</Link >
                          </div>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="fieldlabels">Certification</label>
                              <input type="text" name="uname" placeholder="Certification" value={certification} onChange={(e)=> setCertification(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="fieldlabels">Date</label>
                              <input type="date" name="uname" placeholder="Expire Date"value={cDate} onChange={(e)=> setCdate(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Organization</label>
                              <input type="text" name="uname" placeholder="Organization" value={organization} onChange={(e)=> setOrganization(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Skills Updates</h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp">
                          <label className="fieldlabels">Skills</label>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" className="m-0" name="uname" placeholder="Skills" value={skills} onChange={(e)=> setSkills(e.target.value)}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <select value={expertise} onChange={(e)=> setExpertise(e.target.value)}>
                                  <option value="">Select Expertise</option>
                                  <option value="Beginner">Beginner</option>
                                  <option value="Intermediate">Intermediate</option>
                                  <option value="Advanced">Advanced</option>
                                  <option value="Expert">Expert</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-4">
  <div className="form-group">
    <select value={year} onChange={(e)=> setYear(e.target.value)}>
      <option value="">Select Year</option>
      <option value="1+ Year">1+ Year</option>
      <option value="2+ Year">2+ Year</option>
      <option value="3+ Year"> 3+ Year</option>
      <option value="4+ Year">4+ Year</option>
    </select>
  </div>
</div>

                          </div>
                          <hr />
                          <div className="items2 mb-3" />
                          <Link to="javascript:void(0)" className="default-btn rounded">Add
                            +</Link >
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>University Projects </h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <div className="professional-sp row">
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label className="fieldlabels">Project title</label>
                              <input type="text" className="m-0" name="uname" placeholder="Project title" value={projectTitle} onChange={(e)=>setProjectTitle(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label className="fieldlabels">Website Link</label>
                              <input type="text" className="m-0" name="uname" placeholder="Project" value={webLink} onChange={(e)=>setWebLink(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <label className="fieldlabels">What was your role?</label>
                              <input type="text" className="m-0" name="uname" placeholder="Projects" value={role} onChange={(e)=>setRole(e.target.value)}/>
                            </div>
                          </div>
                          <hr />
                          <div className="col-md-4">
                            <div className=" mb-3" />
                            <Link to="javascript:void(0)" className="default-btn rounded">Add
                              +</Link >
                          </div>
                         <div className="col-12">
  <div className="form-group">
    <label className="fieldlabels">Date From</label>
  </div>
</div>

                        <div>
  <div className="col-12 col-md-4">
    <div className="form-group">
      <input type="date" className="m-0" name="date" placeholder="date" value={projectDate} onChange={(e)=>setProjectDate(e.target.value)} />
    </div>
  </div>
  <div className="col-12 col-md-1 text-center my-auto">
    <h6 className="md-0">TO</h6>
  </div>
  <div className="col-12 col-md-4">
    <div className="form-group">
      <input type="date" name="date_to" id="project_date_to" className="form-control m-0" value={endProjectDate} onChange={(e)=>setEndProjectDate(e.target.value)}/>
    </div>
  </div>
  <div className="col-lg-3 my-auto form-condition">
    <div className="agree-label d-flex gap-2">
      <input type="checkbox" id="chb1" className="termcheck"  value={stillWorking} onChange={(e)=>setStillWorking(e.target.checked)}/>
      <label htmlFor="chb1" className="small text-muted">
        Still Working
      </label>
      
    </div>
  </div>
</div>

                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Professional experience </h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Title*</label>
                              <input type="text" placeholder="retall sales manager" className="form-control" value={profTitle} onChange={(e)=>setProfTitle(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Employment type</label>
                              <select className="form-controls" value={profType} onChange={(e)=>setProftype(e.target.value)}>
                                <option value="">Select</option>
                                <option value="Full time">Full time </option>
                                <option value="Part-time">Part-time</option>
                                <option value="Freelance">Freelance</option>
                                <option value="Trainee">Trainee </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Company name*</label>
                              <input type="text" placeholder="Microsoft" className="form-control" value={profCompanyName} onChange={(e)=>setProfCompanyName(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Location*</label>
                              <input type="text" placeholder="London, united kingdom" className="form-control" value={profLocation} onChange={(e)=>setProfLocation(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Location type*</label>
                              <div className="d-flex gap-4">
                                <div className="form-check checkiform">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={profLocationType} onChange={(e)=>setProfLocationType(e.target.value)}/>
                                  <label className="form-check-label" htmlFor="flexRadioDefault1" value="On-Site">
                                    On-site
                                  </label>
                                </div>
                                <div className="form-check checkiform">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Hybrid" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Hybrid
                                  </label>
                                </div>
                                <div className="form-check checkiform">
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="Work from Home" />
                                  <label className="form-check-label" htmlFor="flexRadioDefault3">
                                    Work from Home
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <div className="agree-label d-flex gap-2">
                                  <input type="checkbox" id="chb1" className="termcheck" value={profCurrentWork} onChange={(e)=>setProfCurrentWork(e.target.value)}/>
                                  <label htmlFor="chb1" className="small text-muted">
                                    I am currently working in this role
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex gap-2">
                              <div className="w-100">
                                <label className="fieldlabels">Start date</label>
                                <input type="date" name="name" placeholder="start date" value={profStartDate} onChange={(e)=>setProfStartDate(e.target.value)}/>
                              </div>
                              <div className="w-100">
                                <label className="fieldlabels">End date</label>
                                <input type="date" name="name" placeholder="end date"value={profEndDate} onChange={(e)=>setProfEndDate(e.target.value)} />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">Industry*</label>
                              <input type="text" placeholder="Information Technology" className="form-control" value={profIndustry} onChange={(e)=>setProfIndustry(e.target.value)}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                    <ul className="sf-content m-0">
                      <div className="find-com-box p-0">
                        <div className="professional-sp">
                          <h4>Other </h4>
                          <h6>Fill all form field to go to next step</h6>
                        </div>
                        <hr />
                        <div className="professional-sp row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="fieldlabels">DOB</label>
                              <input type="date" name="phno_2" placeholder="dob" value={dob} onChange={(e)=>setDob(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <div className="agree-label d-flex gap-2">
                                <input type="checkbox" id="Consent" className="termcheck" value={allow} onChange={(e)=>setAllow(e.target.checked)} />
                                <label htmlFor="Consent" className="small text-muted">
                                  We will help you to find a job if you complete successfully training program so please consent this form. "I authorize FreshGrad to submit my profiles/resume and contact details to other companies."
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                <ul className="sf-content m-0">
  <div className="find-com-box p-0">
    <div className="professional-sp">
      <h4>Provide all certifications name </h4>
      <h6>Fill all form field to go to next step</h6>
    </div>
    <hr />
    <div className="professional-sp">
      <div className="form-group">
        <label className="fieldlabels">Certification</label>
        <input type="text" name="uname" placeholder="Certification" value={allCertificate} onChange={(e)=>setAllCertificate(e.target.value)}/>
       
      </div>
      <div className="items2 mb-3" />
    </div>
  </div>
</ul>

                  </div>
                  <div className="sf-steps-navigation d-flex justify-content-between">
                    <button id="sf-prev" type="button" className="btn btn-light">Previous</button>
                    <span id="sf-msg" className="sf-msg-error" />
                    <button id="sf-next" type="submit" className="btn default-btn">Next</button>
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

export default StudentStep
