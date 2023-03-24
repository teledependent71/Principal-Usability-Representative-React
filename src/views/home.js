import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Usability Representative</title>
        <meta
          property="og:title"
          content="Principal Usability Representative"
        />
      </Helmet>
    </div>
  )
}

export default Home
