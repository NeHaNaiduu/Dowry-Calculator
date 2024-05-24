import React from 'react'
import CountUp from "react-countup"

function Result() {

  return (
    <div className='result-wrapper'>
    <div className='container'>
       <CountUp start={0} end={91202} duration={2} className='counter'></CountUp>
       <h1 className='title'>TOTAL DOWRY DEATHS</h1>
       <h2 className='description'>were reported in India(2001-2012)</h2>
       <h3>#shame</h3>
    </div>
    <div className='container'>
       <CountUp start={0} end={418} duration={2} className=' counter counter1'></CountUp>
       <p className='desc'>out of 21287 cases were</p>
       <h1 className='title1'>FALSE DOWRY CASES</h1>
       <h3>#fakefeminism</h3>
    </div>
    </div>
  )
}

export default Result