import React, { Component } from 'react';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import About from '../components/about/about';
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
    window.addEventListener('scroll', this.handleScroll);
    setTimeout(() => {
        this.setState({pageLoaded: true});
      }, 500);
  }

  handleScroll() {
    if (document.getElementById('parallax').scrollY > window.innerHeight / 5) {
      document.getElementById('parallax').scroll(0, window.innerHeight);
    }
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
