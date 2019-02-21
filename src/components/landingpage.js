import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import RLV from './img/RLV.jpg';

class Landing extends Component {
  render() {
    return(
       <div style={{width: '100%', margin: 'auto'}}>
      
        <Grid className="landing-grid">
          <Cell col={12}>
          <img
                className="photo-img"
                src={RLV}
                alt="Richard Verdier"
                style={{height: '200px'}}
                 />

            <div className="banner-text">
              <h1>Software Engineer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Django | NodeJS | Express | Python</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
