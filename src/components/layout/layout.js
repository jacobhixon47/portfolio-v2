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
      navVisible: false,
      headerAnimated: false,
      prevScrollTop: 0
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let header = document.getElementById('main-header');
    let title = document.getElementById('main-title');
    let prevScrollTop = this.state.prevScrollTop;
    let scrollTop = window.pageYOffset || document.scrollTop;

    if (prevScrollTop < scrollTop && scrollTop < window.innerHeight) {
      title.classList.add('title-slide-right');
      this.setState({ headerAnimated: true, prevScrollTop: scrollTop });
    // } else if (prevScrollTop < scrollTop && scrollTop >= window.innerHeight * 1 && this.state.headerAnimated) {
    //   // header.classList.remove('fixed');
  } else if (prevScrollTop > scrollTop && scrollTop < window.innerHeight / 2.2) {
      // header.classList.add('fixed');
      this.setState({ headerAnimated: false, prevScrollTop: scrollTop });
      title.classList.remove('title-slide-right');
    }
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked menu");
    console.log("nav visible: " + this.state.navVisible);
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({ navVisible: !this.state.navVisible });
  };

  render() {
    return (
      <div style={{padding: '0', margin: '0', backgroundColor: 'linear-gradient(-60deg, blue 5%, purple 80%)'}}>
        <Helmet
        title="Jacob Hixon — Web Developer"
        meta={[
          { name: 'description', content: 'Web' },
          { name: 'keywords', content: 'web, developer' },
        ]}
        />
        <Header handleMouseDown={this.handleMouseDown}>
          <h1 style={{fontSize: '100px'}}>HELLO.</h1>
        </Header>
        <Nav handleMouseDown={this.handleMouseDown} navVisible={this.state.navVisible} />
        {this.props.children}
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
