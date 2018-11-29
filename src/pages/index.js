import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerAnimated: false,
      prevScrollTop: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let prevScrollTop = this.state.prevScrollTop;
    let scrollTop = window.pageYOffset || document.scrollTop;

    if (prevScrollTop < scrollTop && scrollTop < window.innerHeight) {
      this.setState({ headerAnimated: true, prevScrollTop: scrollTop });
    } else if (prevScrollTop > scrollTop && scrollTop <= window.innerHeight / 4) {
      this.setState({ headerAnimated: false, prevScrollTop: scrollTop });
    }
  }

  render() {
    return (
      <Layout>
        <Header headerAnimated={this.state.headerAnimated}/>
        <div style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          margin: '0',
          backgroundColor: '#ddd',
          // backgroundImage: 'url(https://bit.ly/2TEnL1A)'
        }}>
          <div style={{
            height: '100vh',
            width: '100vw',
            margin: '0',
            top: '0',
            left: '0',
            background: '#394551',
            zIndex: '1',
            padding: '50px',
          }}>
            <h1 style={{
              fontSize: '100px',
              background: '#657787',
              textAlign: 'left',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingBottom: '10px',
              paddingTop: '10px',
              width: '50vw',
              color: '#ccc'
            }}>
            Who am I?
            </h1>
            <div style={{
              marginTop: '20px',
              background: '#657787',
              textAlign: 'left',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingBottom: '10px',
              paddingTop: '10px',
              width: '85vw',
              color: '#ccc'
            }}>
              <h3>This section is currently under maintenance.</h3>
              <p><i>Check back later!</i></p>
              <Link to="/page-2/">Go to page 2</Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
