import React from 'react'

function Location() {
  return (
    <div>
        <p>Lives in : </p>
        <input type="radio" name='location' id='location'></input>
        <label htmlFor="location">India</label>
        <input type="radio" name='location' id='location'></input>
        <label htmlFor="location">Out of India</label>
    </div>
  )
}

export default Location