import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import './index.css';

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
          backgroundColor: '#004667',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '100px',
            textAlign: 'center',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '10px',
            paddingTop: '10px',
            width: '50vw',
            color: '#ccc',
            borderBottom: '1px solid #7C95AA'
          }}>
            Who am I?
          </h1>
          <div style={{
              marginTop: '20px',
              textAlign: 'left',
              paddingLeft: '20px',
              paddingRight: '20px',
              paddingBottom: '10px',
              paddingTop: '10px',
              width: '85vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ccc',
              zIndex: '1'
            }}>
            <h3>This section is currently under maintenance.</h3>
            <p><i>Check back later!</i></p>
            <Link to="/page-2/" style={{color: "#7C95AA"}}>
              <button className='blue-button-1' style={{
                  width: '15vw',
                  height: '10vh',
                  background: '#00947A',
                  color: '#ccc',
                  border: 'none',
                  borderRadius: '50px'
                }}>
                Go to page 2
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
