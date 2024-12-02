import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NetworkingCourses from   './src/components/pages/course-details/NetworkingCourses'
import MentorSignUp from './src/components/pages/mentor-signUp/MentorSignUp'
import CourseVedio from './src/components/pages/student/CourseVedio'
import Resume from './src/components/pages/student/Resume'
import Recruitor from './src/components/pages/recruiter/Recruitor'
import TrainingProgramStudnet from './src/components/pages/student/TrainingProgramStudent'
import Mentor from './src/components/pages/student/Mentor'
import Dashboard from './src/components/pages/student/Dashboard'
import HeaderComponent from './src/components/pages/student/HeaderComponent'
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileR from './src/components/pages/recruitor_hiring/ProfileR'
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
  RegionSelect,
  PhonecodeSelect
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";


const Trying = () => {


    

  const [region, setRegion] = useState("");
 
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div>
     
      
      <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
        region={region}
      />
     
      
      <h6>State</h6>
      <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
      <h6>City</h6>
      <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
      <h6>Language</h6>
      <LanguageSelect
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select Language"
      />
    </div>
  
  )
}

export default Trying
