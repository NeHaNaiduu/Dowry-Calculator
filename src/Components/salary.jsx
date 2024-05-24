import React from 'react'
import { PiGreaterThan } from "react-icons/pi";

function Salary() {
  return (
    <div>
        <p>Monthly Salary : </p>
        <input type="radio" name='salary' id='salary'></input>
        <label htmlFor="salary">Less than 10,000</label>
        <input type="radio" name='salary' id='salary'></input>
        <label htmlFor="salary">10,000-50,000</label>
        <input type="radio" name='salary' id='salary'></input>
        <label htmlFor="salary">50,000-1 lakh</label>
        <input type="radio" name='salary' id='salary'></input>
        <label htmlFor="salary">1-2 lakh</label>
        <input type="radio" name='salary' id='salary'></input>
        <label htmlFor="salary"><PiGreaterThan />2 lakh</label>
    </div>
  )
}

export default Salary