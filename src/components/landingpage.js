import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import RLV from './img/RLV.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bootstrap from "./img/bootstrap.png";
import javascript from "./img/javascript.png";
import css from "./img/css-logo-1.png";
import django from "./img/django.png";
import python from "./img/pythonLogo.png";
import react from "./img/React-icon.png";



class Landing extends Component {
  render() {
    return(
      <div>

          

       <div >

          

      
        <Grid className="landing-grid">

          {/* <div class="LI-profile-badge"  data-version="v1" 
          data-size="medium" data-locale="en_US" data-type="horizontal" 
          data-theme="dark" data-vanity="richard-verdier-2990b61"><a class="LI-simple-link" 
          href='https://www.linkedin.com/in/richard-verdier-2990b61?trk=profile-badge'>Richard Verdier</a></div> */}


          <Cell col={12}>

            <div className="banner-text">



              <h1>Software Engineer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Django | NodeJS | Express | Python</p>
          <img src={css} alt='CSS' height="42" width="42" />
          <img src={bootstrap} alt='bootstrap' height="42" width="42" />
          <img src={javascript} alt ='javascript' height="42" width="42" />
          <img src={react} alt='react' height="42" width="42" />
          <img src={django} alt='django' height="42" width="42" />                     
          <img src={python} alt='python' height="42" width="42" />                    
                              
                              


            </div>
          </Cell>
        </Grid>
        
      </div>

        <div className="social-links">

              {/* LinkedIn */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a>
              {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <icon className="fa fa-github-square" aria-hidden="true" /> */}
                <FontAwesomeIcon
                          icon={['fab', 'github']}
                          className="fa fa-github-square"
                          style={{color: 'black',height: '50px;'}}
                        />
              </a>

              {/* Youtube */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>

          </div>
      </div>
    )
  }
}

export default Landing;
