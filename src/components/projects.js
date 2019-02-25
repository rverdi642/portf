import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import DSTE from '../components/img/dste.PNG';
import conway from '../components/img/conways.JPG';
import django from '../components/img/django.png';
// import react from '../components/img/React-icon.png';
import Notes from '../components/img/app7.PNG';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid" style={{backgroundColor: 'rgba(235, 225, 228, 0.452)',marginTop: '75px'}}>
          {/* Project 1 */}
          <Card shadow={5} style={{Width: '450', margin: 'auto'}}>
            <CardTitle expand style={{height: '295px', background: `url(${DSTE}) center / cover`}} ></CardTitle>
            <CardText style={{height: '150px'}}>
              <b>Don't Send That Email!</b> IBM Watson based tone/emotion analyzer for emails. Created by Lambda Labs Project Team. Stack consisted of React, Express, Stripe, Postgresql, Axios, Watson
            </CardText>
            <CardActions border>
           
              <a className='btn' href="https://github.com/Lambda-School-Labs/dont-send-that-email">GitHub</a>
              <a className='btn' href="https://dont-send-that-email.netlify.com/">Live Demo</a>
              
            </CardActions>
          
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle expand style={{color: '#aff', height: '300px', background: `url(${conway}) center / cover`}} ></CardTitle>
            <CardText style={{height: '150px'}}>
            A very famous cellular automaton is John Conway's Game of Life. app. This game is a class of discrete model known as a Cellular Automaton, abbreviated CA.
            </CardText>
            <CardActions border>
              <a className='btn' href="https://github.com/rverdi642/Conways-Life">GitHub</a>
              <a className='btn' href="https://game-of-life-rlv.netlify.com/">Live Demo</a>
            </CardActions>
       
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle expand style={{color: '#fff', height: '207px', background: `url(${Notes}) center / cover`}} >Front End Project Week</CardTitle>
            <CardText>
              <p><b> Lambda Notes</b></p>
            <p>Display a list of notes</p>
            <p>Create a note with a title and content</p>
            <p>View an existing note</p>
            <p>Edit an existing note</p>
            <p>Delete an existing note</p>
            </CardText>
            <CardActions border>
            <a className='btn' href="https://github.com/rverdi642/front-end-project-week/tree/master/front-end-project-designs">GitHub</a>
            
           
            </CardActions>
     
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${django}) center / cover`}} >Django Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
            </CardActions>
          </Card>
         </div> 
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Future Develoment Stack</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Working through discovery</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{color: 'black', background: '#c9cacc'}}>React</Tab>
          <Tab style={{color: 'black', background: '#c9cacc'}}>Django</Tab>
          <Tab style={{color: 'black', background: '#c9cacc'}}>Future Development Stack</Tab>
          <Tab style={{color: 'black', background: '#c9cacc'}}>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
