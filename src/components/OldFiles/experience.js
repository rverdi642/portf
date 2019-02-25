import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell className='job' col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        
        <Cell className='parent' col={4}>
          <h5 style={{marginTop:'10px'}}>{this.props.jobTitle}</h5>
          {/* <p>{this.props.jobTitle}</p> */}
        </Cell>

        <Cell className='next' col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.jobDescription}</p>
        </Cell>

      </Grid>
    )
  }
}

export default Experience;
