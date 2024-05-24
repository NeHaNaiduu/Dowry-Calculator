import React from 'react'

function Education() {
  return (
    <div>
        <p>Education : </p>
        <input type="radio" name='education' id='education'></input>
        <label htmlFor="education">School</label>
        <input type="radio" name='education' id='education'></input>
        <label htmlFor="education">Degree/College</label>
        <input type="radio" name='education' id='education'></input>
        <label htmlFor="education">Masters</label>
        <input type="radio" name='education' id='education'></input>
        <label htmlFor="education">PhD</label>
        <input type="radio" name='education' id='education'></input>
        <label htmlFor="education">Other</label>
    </div>
  )
}

export default Education