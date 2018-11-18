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

  componentDidMount() {
    window.addEventListener('scroll', this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.scrollTop;
    const shrinkOn = 20;
    const header = document.getElementById('main-header');

    if (distanceY > shrinkOn) {
      header.classList.add('smaller');
    } else {
      header.classList.remove('smaller');
    }
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
      <div style={{padding: '0', margin: '0', zIndex: '1'}}>
        <Helmet
        title="Jacob Hixon — Web Developer"
        meta={[
          { name: 'description', content: 'Web' },
          { name: 'keywords', content: 'web, developer' },
        ]}
        />
        <Header handleMouseDown={this.handleMouseDown}/>
          <Nav handleMouseDown={this.handleMouseDown} navVisible={this.state.navVisible} />
          <div style={{minHeight: '10vh', padding: '10px', marginBottom: '10vh'}}/ >
          {this.props.children}
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
