import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './Header'
import './layout.css'

const Layout = props => (
  <div>
    <Helmet
      title="The Gray Web Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    {props.children}
    </div>
  </div>
)
// Layout.propTypes = {
//   children: PropTypes.func,
// }
export default Layout
