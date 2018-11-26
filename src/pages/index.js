import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const IndexPage = () => (
  <Layout>
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      margin: '0',
      backgroundColor: '#ddd',
      backgroundImage: 'url(https://bit.ly/2TEnL1A)'
    }}>
      <div style={{
        height: '100vh',
        width: '100vw',
        margin: '0',
        top: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: '1',
        padding: '50px',
      }}>
        <h1 style={{
          fontSize: '100px',
          background: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'left',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '50vw'
        }}>
          Who am I?
        </h1>
        <div style={{
          background: 'rgba(150, 150, 150, 0.8)',
          textAlign: 'left',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '80vw',
          color: '#bbb'
        }}>
          <h3>This section is currently under maintenance.</h3>
          <p><i>Check back later!</i></p>
        </div>
        <div style={{
          marginTop: '20px',
          background: 'rgba(125, 125, 125, 0.8)',
          textAlign: 'left',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '65vw',
          color: '#bbb'
        }}>
          <h3>This section is currently under maintenance.</h3>
          <p><i>Check back later!</i></p>
        </div>
        <div style={{
          marginTop: '20px',
          background: 'rgba(100, 100, 100, 0.8)',
          textAlign: 'left',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '85vw',
          color: '#bbb'
        }}>
          <h3>This section is currently under maintenance.</h3>
          <p><i>Check back later!</i></p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
