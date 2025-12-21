// src/components/Projects.jsx
import React from 'react';
import '../styles/Projects.css';

const Projects = () => (
  <div>
    <h2>My Projects 💻📊</h2>

    {/* <div className="project-entry">
      <h3 className="project-header"></h3> 
      <p></p>
      <p></p>
    </div> */}

      <div className="project-entry">
      <h3 className="project-header">SecureBank – Systems Reliability Work Sample:</h3> 
      <p>
      <a href="https://github.com/adlanier/securebank-work-sample" target="_blank" rel="noopener noreferrer">SecureBank</a> is a banking-style web application used as a work sample for security hardening, validation fixes, session management, and transaction integrity. The project emphasizes root-cause analysis, production defect prioritization, and regression testing.
      </p>
      <p> <a href="https://github.com/adlanier/securebank-work-sample/blob/main/TECHNICAL_REPORT.md" target="_blank" rel="noopener noreferrer">Technical Report</a>: Written documentation describing the root cause of each issue, how each fix resolves the problem, and preventive measures to avoid regressions.</p>
      <p>
      Built with Next.js, TypeScript, tRPC, and SQLite.
      </p>
     </div>

     <div className="project-entry">
      <h3 className="project-header">Connections Academy School Staff Portal Migration:</h3> 
      <p>
      As a Software Engineering Intern on Pearson's CRM team, I led the rebuild of the School Staff Portal, the primary tool used by enrollment staff at Connections Academy which is Pearson's K-12 online school offering serving over 100,000 students in 31 states across 42 schools. The original system, built in native Salesforce, was rigid and costly, requiring full Salesforce licenses and lacked UI customization. The solution was to migrate its core functionality to Salesforce Experience Cloud, where I developed a scalable, external-facing portal using custom Lightning Web Components.
      This migration is projected to save over $100,000 annually in licensing costs and reduce alert resolution time by five days. This improvement allows caretakers to enroll students faster and creates additional revenue opportunities for Pearson.
       </p>
      <p>
      Built with Salesforce Experience Cloud, Apex, SOQL, JavaScript, HTML, CSS.
      </p>

    </div>

     <div className="project-entry">
      <h3 className="project-header">Pearson Online Academy Enrollment Experience Site:</h3> 
      <p>
      As a Software Engineering Intern on Pearson's CRM team, I worked on the Pearson Online Academy Enrollment Experience Site, aligning it with Pearson's Paved Road development strategy. 
      I was responsible for translating Figma designs into a fully responsive and accessible frontend for both homepage and cart flows within Salesforce's Experience Cloud using custom Lightning Web Components.
      </p>
      <p>
      Built with Salesforce Experience Cloud, Apex, SOQL, JavaScript, HTML, CSS and designed from Figma mockups. 
      </p>

    </div>
  
    <div className="project-entry">
      <h3 className="project-header">Bug2 Controller on LEGO EV3 Robot:</h3> 
      <p>
      Worked with a team of three to design and implement a Bug2 navigation controller on a LEGO Mindstorms EV3 robot. We integrated an ultrasonic sensor, touch sensor, and gyroscope for basic obstacle detection and wall following. We implemented a proportional (P) controller to manage wall-following behavior and applied differential drive kinematics to estimate the robot's position. We tested the robot in both Webots simulation and on physical hardware, iterating on our approach to improve navigation and handling of obstacles.
      </p>
      <p>
      Programmed the LEGO Mindstorms EV3 robot using Python and the Pybricks MicroPython API. 
      </p>

    </div>

 <div className="project-entry">
      <h3 className="project-header">Statify Mobile: <a href="https://www.youtube.com/watch?v=JC9rCsiIEI0" target="_blank" rel="noopener noreferrer">🎥</a></h3> 
      <p>
        <a href="https://github.com/adlanier/statifyMobile" target="_blank" rel="noopener noreferrer">Statify Mobile</a> is an interactive mobile application that challenges users to guess whether the monthly listeners of a randomly selected Spotify artist are higher or lower than another randomly selected Spotify artist.
      </p>
      <p>
      Built with React Native, Expo, Axios, Spotify API, Flask, Beautiful Soup. 
      </p>
    </div>

    <div className="project-entry">
      <h3 className="project-header">Statify:</h3>
      <p>
        <a href="https://statify-delta.vercel.app/" target="_blank" rel="noopener noreferrer">Statify</a> is an interactive web application that challenges users to guess whether the amount of monthly listeners of a randomly selected Spotify artist is higher or lower than another randomly selected Spotify artist. 
      </p>
      <p>
      Built with React, Flask, Axios, Spotify API, Beautiful Soup.
      </p>
    </div>

    <div className="project-entry">
      <h3 className="project-header">CS Experience Labs Coworking Webpage:        <a href="https://www.youtube.com/watch?v=zPVB2ZGEAJQ&ab_channel=TraceGlasby" target="_blank" rel="noopener noreferrer">🎥</a></h3>
      <p>
        Worked with a small team of programmers to enhance UNC’s <a href="https://github.com/tr4ce123/csxl-final-team-c6/tree/stage" target="_blank" rel="noopener noreferrer">CSXL Webpage</a> with a robust member management system that enables organizations to list members by term, manage requests, and offer open membership. We facilitated the ability to create exclusive events and improved the overall website functionality for student organizers to better foster community engagement.
      </p>
      <p><a href="https://github.com/tr4ce123/csxl-final-team-c6/blob/stage/docs/specs/organization-roster-spec.md">Organization Roster Technical Specification</a>: This document contains the technical specifications, this feature adds new API routes, new database tables, and new frontend components to the organization</p>
      <p>
      Built with Angular, FastAPI, Docker, Kubernetes, TypeScript, Python, PostgreSQL.
      </p>
    </div>
    </div>
  
);

export default Projects;

