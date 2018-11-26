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
          backgroundColor: '#bbb',
          textAlign: 'left',
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingBottom: '10px',
          paddingTop: '10px',
          width: '40vw'
        }}>
          Hi there!
        </h1>
        <h3>Welcome to your new Gatsby site.</h3>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
