import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Button from '../button/button';
import { MdMenu } from 'react-icons/md';
import Nav from '../nav/nav';
import Contact from '../contact/contact';

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
        ]}
        />
        <Nav handleMouseDown={this.handleMouseDown} navVisible={this.state.navVisible} />
        <Contact />
        <div id='left-sidebar' />
        <div id='right-sidebar' />
        {this.props.children}
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
