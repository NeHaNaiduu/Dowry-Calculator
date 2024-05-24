import React from 'react'

function Profession() {
  return (
    <div>
        <p>Profession : </p>
        <input type="radio" name='profession' id='profession'></input>
        <label htmlFor="profession">Doctor</label>
        <input type="radio" name='profession' id='profession'></input>
        <label htmlFor="profession">Engineer</label>
        <input type="radio" name='profession' id='profession'></input>
        <label htmlFor="profession">Banker</label>
        <input type="radio" name='profession' id='profession'></input>
        <label htmlFor="profession">Lawyer</label>
        <input type="radio" name='profession' id='profession'></input>
        <label htmlFor="profession">Other</label>
    </div>
  )
}

export default Profession