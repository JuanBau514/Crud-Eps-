import React from 'react'
import Top from '../Body-Section/Top-section/Top'
import Listening from '../Body-Section/Listing-Section/Listening'
import Activity from '../Body-Section/Activity-Section/Activity'
import './body.css'

const Body = () => {
  return (
    <div className='mainContent'>
      <Top/>
      <div className='="bottom flex'>
        <Listening />
        <Activity />
      </div>
    </div>
  )
}

export default Body
