import React from 'react'
import './body.css'
import Top from './Top-section/Top'
import Listing from './Activity-Section/Activity.jsx'
import Activity from './Listing-Section/Listening.jsx'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top />

      <div className='bottom flex'>
        <Listing />
        <Activity />
      </div>
    </div>
  )
}

export default Body
