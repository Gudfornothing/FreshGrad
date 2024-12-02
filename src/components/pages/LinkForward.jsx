import React from 'react'
import { BrowserRouter,Routes,Link,Route } from 'react-router-dom'
import MainPage from './home/MainPage'
import Contactus from './contact us/Contactus'
import NetworkingCourses from './course-details/NetworkingCourses'
import ForgotOtp from './forgot-otp/ForgotOtp'
import ForgotPassword from './forgot-password/ForgotPassword'
import MentorSignUp from './mentor-signUp/MentorSignUp'
import Jobs from './jobs/Jobs'
import Mentor from './student/Mentor'
import Booking from './mentor-trainer/Booking'
import CoachingCenter from './mentor-trainer/CoachingCenter'
import MentorDashboard from './mentor-trainer/MentorDashboard'
import MentorProfile from './mentor-trainer/MentorProfile'
import MentorStep from './mentor-trainer/MentorStep'
import ProfileM from './mentor-trainer/ProfileM'
import UpcomingSession from './mentor-trainer/UpcomingSession'
import NewPassword from './new password/NewPassword'
import Otp from './otp/Otp'
import PrivacyPolicy from './privacy-policy/PrivacyPolicy'
import Profile from './profile/Profile'
import Recruitor from './recruiter/Recruitor'
import AllProfile from './recruitor_hiring/AllProfile'
import InterviewGuide from './recruitor_hiring/InterviewGuide'
import InterviewGuideDetails from './recruitor_hiring/InterviewGuideDetails'
import JobPost from './recruitor_hiring/JobPost'
import MyJobs from './recruitor_hiring/MyJobs'
import MyTeam from './recruitor_hiring/MyTeam'
import NewProfile from './recruitor_hiring/NewProfile'
import ProfileR from './recruitor_hiring/ProfileR'
import RecruitorDashboard from './recruitor_hiring/RecruitorDashboard'
import RecruitorInterviewing from './recruitor_hiring/RecruitorInterviewing'
import RecruitorList from './recruitor_hiring/RecruitorList'
import RecruitorStep from './recruitor_hiring/RecruitorStep'
import RecruitorManager from './recruitor-manager/RecruitorManager'
import SignIn from './/sign-in/SignIn'
import SignUp from './sign-up/SignUp'
import StudentStep from './student-step/StudentStep'
import TermsAndConditions from './termsAndCondtions/TermsAndConditions'
import TrainerMentors from './trainer-mentors/TrainerMentors'
import TrainerDetails from './trainerDetails/TrainerDetails'

import AppliedJobs from './student/AppliedJobs'
import CourseVedio from './student/CourseVedio'
import Dashboard from './student/Dashboard'
import EditProfile from './student/EditProfile'
import Resume from './student/Resume'
import ResumeStudent from './student/ResumeStudent'
import SessionComplete from './student/SessionComplete'
import TrainingProgram from './training-program/TrainingProgram'
import MyCourses from './student/MyCourses'
import TrainingProgramStudent from './student/TrainingProgramStudent'
import StudentJobs from './student/StudentJobs'

const LinkForward = () => {

  return (
    <div>
      <Routes>
      <Route path="/" element={<MainPage/>} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/networking-courses" element={<NetworkingCourses />} />
        <Route path="/forgot-otp" element={<ForgotOtp/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/mentorSignup" element={<MentorSignUp/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/mentor" element={<Mentor/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/coaching-center" element={<CoachingCenter/>} />
        <Route path="/mentor-dashboard" element={<MentorDashboard/>} />
        <Route path="/mentor-profile" element={<MentorProfile/>} />
        <Route path="/mentor-step" element={<MentorStep/>} />
        <Route path="/profile-m" element={<ProfileM/>} />
        <Route path="/upcoming-session" element={<UpcomingSession/>} />
        <Route path="/new-password" element={<NewPassword/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/recruitor" element={<Recruitor/>} />
        <Route path="/all-profile" element={<AllProfile/>} />
        <Route path="/interview-guide" element={<InterviewGuide/>} />
        <Route path="/interview-guide-details" element={<InterviewGuideDetails/>} />
        <Route path="/job-post" element={<JobPost/>} />
        <Route path="/my-jobs" element={<MyJobs/>} />
        <Route path="/my-team" element={<MyTeam/>} />
        <Route path="/new-profile" element={<NewProfile/>} />
        <Route path="/profile-r" element={<ProfileR/>} />
        <Route path="/recruitor-dashboard" element={<RecruitorDashboard/>} />
        <Route path="/recruitor-interviewing" element={<RecruitorInterviewing/>} />
        <Route path="/recruitor-list" element={<RecruitorList/>} />
        <Route path="/recruitor-step" element={<RecruitorStep/>} />
        <Route path="/recruitor-manager" element={<RecruitorManager/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/student-step" element={<StudentStep/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
        <Route path="/trainer-mentors" element={<TrainerMentors/>} />
        <Route path="/trainer-details" element={<TrainerDetails/>} />
        <Route path="/training-program" element={<TrainingProgram/>} />
        <Route path="/applied-jobs" element={<AppliedJobs/>} />
        <Route path="/course-vedio" element={<CourseVedio/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="" element={<EditProfile/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/resume-student" element={<ResumeStudent/>} />
        <Route path="/session-complete" element={<SessionComplete/>} />
        <Route path="/my-courses" element={<MyCourses/>} />
        <Route path="/training-program-student" element={<TrainingProgramStudent/>} />
        <Route path="/student-jobs" element={<StudentJobs/>} />
        
      </Routes>
    </div>
  )
}

export default LinkForward
