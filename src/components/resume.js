import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Document, Page } from 'react-pdf/dist/entry.parcel';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import RLV from './img/RLV.jpg';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Resume extends Component {


  state = {
    file: pdfFile,
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }



  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                className="photo-img"
                src={RLV}
                alt="Richard Verdier"
                style={{height: '200px'}}
                 />
            </div>

            {/* <h2 style={{paddingTop: '2em'}}>Richard L. Verdier</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Expanding my technical depth in order to more effectively understand and mentor technical resources.
Recently graduated from a 7 month Front-End Web Developer program at Lambda School,that included a 5 week capstone program that resulted in an application that analyzed emails (or any text) for emotional tone analysis using the IBM Watson tone analyzer API. The technology stack components used were Front-End ( React, React Router, React Bootstrap, Axios, CSS ), for the Backend - (ExpressJS, NodeJS, Passport, Knex, Bcrypt  PostgresQL ).</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Location</h5>
            <p>Fort Worth, Texas 76137</p>
            <h5>Phone</h5>
            <p>(682) 559-0833</p>
            <h5>Email</h5>
            <p>rverdi643@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            {/* <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Lambda School"
              schoolDescription="Disciplined immersion coding school running for 7 months, 8 hours per day Monday - Friday"
               />

               <Education
                 startYear={1985}
                 endYear={2003}
                 schoolName="University of Houston Downtown College"
                 schoolDescription="78 hours pursuing a Bachelor of Science in Applied Mathematics. in conjunction with having attended Tarrant County Community College and Houston Community College"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2012}
              jobName="Lambda School"
              jobDescription="Expanding my technical depth in order to more effectively understand and mentor technical resources.
              Recently graduated from a 7 month Front-End Web Developer program at Lambda School,that included a 5 week capstone program that resulted in an application that analyzed emails (or any text) for emotional tone analysis using the IBM Watson tone analyzer API. The technology stack components used were Front-End ( React, React Router, React Bootstrap, Axios, CSS ), for the Backend - (ExpressJS, NodeJS, Passport, Knex, Bcrypt  PostgresQL )."
              />

              <Experience
                startYear={1998}
                endYear={2017}
                jobName="Atos Inc North America"
                jobTitle="Director - Tooling and Automation/ Applications Services– Siemens Partner"
                jobDescription="Led migration from CMO toolsets to FMO ATF & GSA global tools (monitoring - Nagios/ SCOM and patching -SCCM/ManageSoft)
                Responsible for delivering Vendor Security Bulletins to all servers in the North America landscape.
                Led 9 month migration from local CMO patch tool to global Atos tools
                Successfully managed the onboarding of Siemens acquisitions into the contracted landscape.
                Set client expectations on a continual basis versus their former environment
                Executed cross functionally based on project dependencies
                Manage offshore teams (MX & India) and remaining onshore staff
                Support both CMO and FMO tools until FMO migration complete
                Perform the necessary activities related to team and individual objective settings 
                Perform reporting activities related to those contracted for as well as internal status in the NAM weekly operational meeting
                Perform monthly financial reviews with account finance team
                Manage Atos Application Technical resources(Web/DBA/ATM) for contracted application support
                Negotiate non-standard agreements for application support varying from the standard offering
                Manage offshore/onshore resources for monitoring and Siemens security activities related to patching
                
                
                Manager Tooling and Automation – Arlington Shared Services
                Managed client monitoring new initiatives as wells as steady state.
                Developed internal tools and interfaces with a number of clients, in coordination with their internal tooling
                Migrated to Open Source tooling (Hyperic) as part of $1Mil. Cost saving effort.
                Team developed interfaces from CA USD 6.0 to various customer supported help desk request systems.
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
