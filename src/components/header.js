import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <div
    style={{
      backgroundImage: 'linear-gradient(-60deg, blue 5%, purple 80%)',
      marginBottom: '1.45rem',
      marginTop:'0px',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:'0px 0px 7px black',
      maxHeight: '100vh',
      minHeight: '100vh'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h1 style={{ margin: 0, textAlign:'center', color: 'white' }}>Jacob Hixon</h1>
      <p style={{textAlign: 'center', color: '#dddddd'}}><i>Web Developer</i></p>
    </div>
  </div>
)

export default Header
