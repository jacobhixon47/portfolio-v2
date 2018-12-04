import React, { Component } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import About from '../components/about';
import './index.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      prevScrollTop: 0,
      parallax: false
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

  }

  handleScroll() {

  }

  render() {
    return (
      <Layout>
          <Header pageLoaded={this.state.pageLoaded}/>
          <About />
      </Layout>
    );
  }
}

export default IndexPage;
