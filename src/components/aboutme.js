import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import capture from '../components/img/blog.jpg';



class About extends Component {
  render() {
    return(
      <div style={{ backgroundColor: 'rgba(161, 107, 123, 0.579)'}}>
      <Card shadow={5} style={{Width: '450', margin: 'auto'}}>
            <CardTitle expand style={{height: '295px', background: `url(${capture}) center / cover`}} ></CardTitle>
            <CardText style={{height: '150px'}}>
              <b>Don't Send That Email!</b> IBM Watson based tone/emotion analyzer for emails. Created by Lambda Labs Project Team. Stack consisted of React, Express, Stripe, Postgresql, Axios, Watson
            </CardText>
            <CardActions border>
           
             Todays Musing
              
            </CardActions>
          
          </Card>
          </div>
    )
  }
}

export default About;
