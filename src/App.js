import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
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
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Richard Verdier</Link>} scroll>
            <Navigation>
                <Link to="/resume1">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Richard Verdier</Link>}>
            <Navigation>
              <Link to="/resume1">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
