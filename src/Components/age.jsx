import React from 'react'
import { PiGreaterThan } from "react-icons/pi";

function Age() {
  return (
    <div>
        <p>Age : </p>
        <input type="radio" name='age' id='age' ></input>
        <label htmlFor="age">18-24 years</label>
        <input type="radio" name='age' id='age'></input>
        <label htmlFor="age">25-30 years</label>
        <input type="radio" name='age' id='age'></input>
        <label htmlFor="age">31-35 years</label>
        <input type="radio" name='age' id='age'></input>
        <label htmlFor="age">36-40 years</label>
        <input type="radio" name='age' id='age'></input>
        <label htmlFor="age"><PiGreaterThan />40 years</label>
    </div>
  )
}

export default Age