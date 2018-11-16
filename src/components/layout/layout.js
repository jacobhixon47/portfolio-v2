import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../header/header';
import Button from '../button/button';
import Nav from '../nav/nav';

import { MdMenu } from 'react-icons/md';
import './layout.css';

class Layout extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navVisible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked menu");
    console.log("nav visible: " + this.state.navVisible);
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({navVisible: !this.state.navVisible });
  };

  render() {
    return (
      <div style={{padding: '0', margin: '0', maxHeight: '100vh'}}>
        <Helmet
        title="Jacob Hixon — Web Developer"
        meta={[
          { name: 'description', content: 'Web' },
          { name: 'keywords', content: 'web, developer' },
        ]}
        />
        <Button handleMouseDown={this.handleMouseDown}>
          <MdMenu />
        </Button>
        <Header />
        <div style={{
          margin: '0',
          maxHeight: '100vh',
          maxWidth: '100vw',
          padding: '0px',
        }}>
          <Nav handleMouseDown={this.handleMouseDown}
                navVisible={this.state.navVisible} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
