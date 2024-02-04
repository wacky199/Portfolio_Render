import React from 'react';
import aboutMeImg from '../images/aboutMeIntro.svg';
const About = () => {
    return (
      <div className="page">
        <h1>Journey</h1>
        <div className="aboutPage">
          <div className="aboutMeIntro">
            <div className="aboutMeImg">
              <img src={aboutMeImg} alt="IntroLogo" />
            </div>
            <div>
              <h3 className="idea">
                “Do whatever you like, just don’t be lazy.”
              </h3>
            </div>
          </div>
          <h2>Programmer and self learner</h2>
          <p className="remark">
            Hi there, I'm Shivam, an IIT Indore graduate. College was a wild
            ride of exploration and discovery for me. Whether it was diving into
            technical realms or exploring the non-technical, I was always on the
            lookout for what truly sparked my interest. Then came the lockdown,
            and with it, a newfound love for programming and crafting software
            and web portals. What started as a curiosity quickly turned into a
            passion, and I count myself lucky to have stumbled upon this career
            path during those uncertain times.
            {/* Hello, my name is Shivam, an undergraduate student at IIT Indore. As
            everyone says, college life is all about learning and exploring, I
            did the same. I explored many things being it technical or
            non-technical. I always kept probing what I'm exactly into. During
            the lockdown, I bumped into programming and developing
            softwares and web portals and since then my journey to a new domain started. My
            exploration led me to something which eventually became my passion.
            I find myself fortunate enough to follow this route as my career
            path. */}
          </p>
        </div>
      </div>
    );
};

export default About;
