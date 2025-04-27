import React from 'react'
import '../styles/BodyData.css'
import goldRates from './Datas'
import gold from '../assets/gold.svg'
import silver from '../assets/silver.svg'

function BodyData() {

  const goldData = goldRates[0];

  return (
    <div className='main-bodycontainer'>
      <div className="body-background">
        <div className="data-columns">

          <div className="g-data">
            <img src={gold} alt="gold-icon" className='gold-icon-svg'/>
            <p>Gold 24k /1g - {`Rs.${goldData.twentyFourKGold}`}</p>
          </div>

          <div className="g-data">
            <img src={gold} alt="gold-icon" className='gold-icon-svg'/>
            <p>Gold 22k /1g - {`Rs.${goldData.twentyTwoKGold}`}</p>
          </div>

          <div className="g-data">
            <img src={gold} alt="gold-icon" className='gold-icon-svg'/>
            <p>Gold 18k /1g - {`Rs.${goldData.eighteenKGold}`}</p>
          </div>

          <div className="g-data">
            <img src={gold} alt="gold-icon" className='gold-icon-svg'/>
            <p>Gold 14k /1g - {`Rs.${goldData.fourteenKGold}`}</p>
          </div>

          <div className="g-data">
            <img src={silver} alt="silver-icon" className='gold-icon-svg'/>
            <p>Platinum /1g - {`Rs.${goldData.platinum}`}</p>
          </div>

          <div className="g-data">
            <img src={silver} alt="silver-icon" className='gold-icon-svg'/>
            <p>Silver /1g - {`Rs.${goldData.silver}`}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BodyData
