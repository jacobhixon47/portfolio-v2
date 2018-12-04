/** @jsx jsx */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Button from '../button/button';
import { MdMenu } from 'react-icons/md';
import Nav from '../nav/nav';
import Contact from '../contact/contact';
import {jsx, css} from '@emotion/core';

const leftSidebarStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 60px;
  background-color: #ddd;
  z-index: 99;
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
          <link  rel="stylesheet" href='https://fonts.googleapis.com/css?family=Pacifico'/>
        </Helmet>
        <Nav handleMouseDown={this.handleMouseDown} navVisible={this.state.navVisible} />
        <Contact />
        <div css={leftSidebarStyle} />
        <div css={rightSidebarStyle} />
        {this.props.children}
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
