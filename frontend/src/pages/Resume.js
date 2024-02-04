import React from 'react';
import ResumePOR from '../components/ResumePOR';
import ResumeEducation from '../components/ResumeEducation';
import ResumeProject from '../components/ResumeProject';
import ResumeTechnicalSkills from '../components/ResumeTechnicalSkills';
import ResumeExperience from '../components/ResumeExperience'
const Resume = () => {
    // return (
        // <div className="page resumePage">
        //     <h1>Portfolio</h1>
        //     <div className="mainContainer">
        //         <div className="section1">
        //             <ResumeEducation />
        //             <ResumeTechnicalSkills />
        //             <ResumeProject />
        //         </div>
        //         <div className="section2">
        //             <ResumeExperience/>
        //             <ResumePOR />
        //         </div>
        //     </div>
        // </div>
    // );
     let width = window.innerWidth;
     if (width > 768) {
       return (
         <div className="page resumePage">
           <h1>Portfolio</h1>
           <div className="mainContainer">
             <div className="section1">
               <ResumeEducation />
               <ResumeProject />
               <ResumePOR />
             </div>
             <div className="section2">
               <ResumeExperience />
               <ResumeTechnicalSkills />
             </div>
           </div>
         </div>
       );
     } else {
       return (
         <div className="page resumePage">
           <h1>Portfolio</h1>
           <div className="mainContainer">
             <div className="section1">
               <ResumeEducation />
               <ResumeTechnicalSkills />
               <ResumeExperience />
             </div>
             <div className="section2">
               <ResumeProject />
               <ResumePOR />
             </div>
           </div>
         </div>
       );
     }
};

export default Resume;
