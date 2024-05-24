import React from 'react'

function House() {
  return (
    <div>
        <p>Do you own a house : </p>
        <input type="radio" name='house' id='house'></input>
        <label htmlFor="house">Yes</label>
        <input type="radio" name='house' id='house'></input>
        <label htmlFor="house">No</label>
    </div>
  )
}

export default House