import React, { Component } from 'react';
import RLV from './img/RLV.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{backgroundColor: 'rgba(235, 225, 228, 0.452)', height: '500px', overflowY: 'scroll'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Searching....</h2>
            {/* <img
                className="photo-img"
                src={RLV}
                alt="Richard Verdier"
                style={{height: '200px'}}
                 /> */}
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Expanding my technical depth in order to more effectively understand and mentor technical resources.
Recently graduated from a 7 month Front-End Web Developer program at Lambda School,that included a 5 week capstone program that resulted in an application that analyzed emails (or any text) for emotional tone analysis using the IBM Watson tone analyzer API. The technology stack components used were Front-End ( React, React Router, React Bootstrap, Axios, CSS ), for the Backend - (ExpressJS, NodeJS, Passport, Knex, Bcrypt  PostgresQL ).</p>

          </Cell>
          <Cell col={6}>
            <h2 style={{width: '400px'}}>Let's Talk</h2>
            <hr style={{marginLeft: '100px'}}/>

            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemContent > */}
                  {/* <FontAwesomeIcon 
                icon={['fas', 'at']}
                class="space"
                /> */}
                    {/* <i className="fa fa-phone-square" aria-hidden="false"/> */}
                    {/* (682) 559-0833 */}
                  {/* </ListItemContent>
                </ListItem> */}



                <ListItem>
                  {/* <ListItemContent style={{marginLeft: '75px', fontSize: '30px', fontFamily: 'Anton'}}> */}
                  <ListItemContent style={{marginLeft: '75px', fontSize: '30px', fontFamily: 'Anton'}}>
                    {/* <icon className="fa fa-envelope" aria-hidden="true"/> */}
                    {/* rverdi643@gmail.com */}
                    <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="richard-verdier-2990b61"><a class="LI-simple-link" href='https://www.linkedin.com/in/richard-verdier-2990b61?trk=profile-badge'>Richard Verdier</a></div>
                  </ListItemContent>
                </ListItem>
              </List>

              <div>
              <form method="POST" action="https://formspree.io/rverdi643@gmail.com">
              <input className='input' type="email" name="email" placeholder="Your email" />
              <textarea className='text' name="message" placeholder="Message" />
              <button className='btn' type="submit">Send</button>
              </form>
              </div>

            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
