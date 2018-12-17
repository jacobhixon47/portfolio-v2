import React, { Component } from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import About from '../components/about';
import Projects from '../components/projects';
import Footer from '../components/footer';
import './index.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      prevScrollTop: 0,
      parallax: false
    }

    // this.handleScroll = this.handleScroll.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClickHeaderScrollButton = this.handleClickHeaderScrollButton.bind(this);
  }

  handleClickHeaderScrollButton() {
    window.scrollTo({
      top: (document.getElementById('about').offsetTop - 60),
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <Layout>
          <Header pageLoaded={this.state.pageLoaded}
                  handleClickHeaderScrollButton={this.handleClickHeaderScrollButton}
                  headerImage={this.props.data.headerImage}/>
          <About />
          <Projects />
          <Footer />
      </Layout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    headerImage: file(relativePath: { eq: "jellyfish.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
