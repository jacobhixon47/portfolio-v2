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
    let subtitle = document.getElementById('header-subtitle');
    let subH2 = document.getElementById('header-sub-h2');
    let subH3 = document.getElementById('header-sub-h3');
    let scrollMsg = document.getElementById('scroll-msg');
    let prevScrollTop = this.state.prevScrollTop;
    let scrollTop = window.pageYOffset || document.scrollTop;

    if (prevScrollTop < scrollTop && scrollTop < window.innerHeight) {
      title.classList.add('title-slide-right');
      subtitle.classList.add('show');
      subtitle.classList.add('show');
      subH2.classList.add('show');
      subH3.classList.add('show');
      scrollMsg.classList.add('slide-left');

      this.setState({ headerAnimated: true, prevScrollTop: scrollTop });
    // } else if (prevScrollTop < scrollTop && scrollTop >= window.innerHeight * 1 && this.state.headerAnimated) {
    //   // header.classList.remove('fixed');
  } else if (prevScrollTop > scrollTop && scrollTop <= window.innerHeight / 4) {
      // header.classList.add('fixed');
      title.classList.remove('title-slide-right');
      subtitle.classList.remove('show');
      subH2.classList.remove('show');
      subH3.classList.remove('show');
      scrollMsg.classList.remove('slide-left');

      this.setState({ headerAnimated: false, prevScrollTop: scrollTop });
    }

  }

  handleMouseDown(e) {
    this.toggleMenu();
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
        <Header handleMouseDown={this.handleMouseDown}/>
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
