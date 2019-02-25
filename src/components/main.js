import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Thoughts from './thoughts';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume1';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/thoughts" component={Thoughts} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume1" component={Resume} />
  </Switch>
)

export default Main;
