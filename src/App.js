import React, { Component } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import splash from "./components/img/port-splash.jpg";
import RLV from './components/img/RLV.jpg';
import { Link } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faAt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faIgloo,
  faPlusCircle,
  faCopy,
  faTrash,
  faHome,
  faUser,
  faSignOutAlt,
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faAt,
  fab
);


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    {/* <Layout style={{background: `url(${splash}) center / cover`}}> */}
    <Layout >
        <Header transparent className="header-color"  title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Richard Verdier</Link>} scroll >
        
            <Navigation>
                <Link to="/resume1">Resume</Link>
                <Link to="/thoughts">Thoughts</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>

        </Header>
        <div className="mdl-card__media" style={{backgroundColor: 'transparent'}}>
        {/* <img
                className="photo-img"
                src={RLV}
                alt="Richard Verdier"
                style={{marginLeft:'25px',marginTop: '40px', height: '200px'}}
                 /> */} 
                 </div>
        <Drawer style={{backgroundColor: 'rgba(161, 107, 123, 0.579)'}} title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Richard Verdier</Link>}>
        {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="richard-verdier-2990b61"><a class="LI-simple-link" href='https://www.linkedin.com/in/richard-verdier-2990b61?trk=profile-badge'>Richard Verdier</a></div> */}
            <Navigation >
              <Link to="/resume1">Resume</Link>
              <Link to="/thoughts">Thoughts</Link>              
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer >
        {/* <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="richard-verdier-2990b61"><a class="LI-simple-link" href='https://www.linkedin.com/in/richard-verdier-2990b61?trk=profile-badge'>Richard Verdier</a></div> */}
        <Content style={{color: 'white'}} >
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
