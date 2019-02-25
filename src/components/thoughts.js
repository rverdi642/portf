import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import capture from '../components/img/blog.jpg';



class thoughts extends Component {
  render() {
    return(
      <div style={{ backgroundColor: 'rgba(161, 107, 123, 0.579)'}}>
      <Card shadow={5} style={{Width: '450', margin: 'auto'}}>
            <CardTitle expand style={{height: '295px', background: `url(${capture}) center / cover`}} >Today's Thought</CardTitle>
            <CardText style={{height: '250px',overflowY: 'scroll'}}>
           <p>Working on producing this site brought some interesting reflections, in particular various decisions
that "bubbled up":</p>
<ol>
<li>Build from scratch, or use Gatsby, Jekyll, or another hybrid </li> 
<l1>How much complexity? e.g. backend (DB, CORS, Knex, Express), or use a service w ButterCMS and graphQL</l1>
<li>For discrete functionality(e.g display a PDF), write from scratch or use an already available component</li>
<li>Which styling library e.g. Material Design, Semantic UI or some lite implementation
 of one of the aforementioned.</li>
<li>Time constraint?</li>

<p>All of the above resulted from me blending the role of designer and developer, and not keeping the 2 roles distinct.</p>
<br></br>
<p>Be a designer and then stop, then develop as if the designer is in a different location.</p>
<br></br>
<p>Then repaet the cycle as necessary</p>

</ol>
            </CardText>
            <CardActions border>
           
             Todays Musing
              
            </CardActions>
          
          </Card>
          </div>
    )
  }
}

export default thoughts;
