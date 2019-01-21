/** @jsx jsx */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Nav from './nav';
import ContactSidebar from './contactSidebar';
import {jsx, css} from '@emotion/core';

const leftSidebarStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 60px;
  background-color: #ddd;
  z-index: 99;
  @media (max-width: 768px) {
    display: none;
  }
`;

const rightSidebarStyle = css`
  top: 0;
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  width: 60px;
  left: calc(100vw - 60px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  z-index: 99;
  @media (max-width: 768px) {
    display: none;
  }
`;

const mainContentStyle = css`
  max-width: calc(100vw - 120px);
  max-height: calc(100vh - 60px);
  margin-top: 60px;
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
  }
`;

class Layout extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      navVisible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClickNavItem = this.handleClickNavItem.bind(this);
  }

  componentDidMount() {
    this.setState({ navVisible: !this.state.navVisible });
    setTimeout(() => {
      this.setState({ navVisible: !this.state.navVisible });
    }, 2500);
  }

  handleMouseDown() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.setState({ navVisible: !this.state.navVisible });
  };

  handleClickNavItem(item) {
    if (item === 'home') {
      window.scrollTo({
        top: .01,
        left: 0,
        behavior: 'smooth'
      });
    }
    if (this.state.navVisible) {
      if (item === 'about') {
        window.scrollTo({
          top: (document.getElementById('about').offsetTop - 80),
          left: 0,
          behavior: 'smooth'
        });
      } else if (item === 'projects') {
        window.scrollTo({
          top: (document.getElementById('projects').offsetTop - 80),
          left: 0,
          behavior: 'smooth'
        });
      } else if (item === 'contact') {
        window.scrollTo({
          top: (document.getElementById('projects').offsetTop + window.innerHeight),
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  render() {
    return (
      <div id='layout'>
        <Helmet
          title="Jacob Hixon — Web Developer"
          meta={[
            { name: 'description', content: 'Web' },
            { name: 'keywords', content: 'web, developer' },
          ]}>
          <link rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'
          />
          <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet" />
          <style>{'body {background-color: #ddd}'}</style>
        </Helmet>
        <Nav handleClickNavItem={this.handleClickNavItem}
              handleMouseDown={this.handleMouseDown}
              navVisible={this.state.navVisible} />
        <ContactSidebar />
        <div css={leftSidebarStyle} />
        <div css={rightSidebarStyle} />
        <div css={mainContentStyle}>
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
