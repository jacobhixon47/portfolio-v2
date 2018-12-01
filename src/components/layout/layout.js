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
        <Nav handleMouseDown={this.handleMouseDown} navVisible={this.state.navVisible} />
        <div id='left-sidebar' />
        <div id='right-sidebar'>
          <Contact />
        </div>
        {this.props.children}
      </div>
    );
  }
}
// Layout.propTypes = {
//   children: PropTypes.obj,
// }
export default Layout;
