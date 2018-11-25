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
      padding: '50px',
      zIndex: '1'
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
  </Layout>
)

export default IndexPage
