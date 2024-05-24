import { useState } from 'react';
import Result from './Result';
import './App.css'
import Age from './Components/age';
import Profession from './Components/profession';
import Salary from './Components/salary';
import Education from './Components/education';
import House from './Components/house';
import Location from './Components/location';

function App() {

const[start,setStart]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    setStart(true)
  }

  return (
    <>
      {!start && (
        <div className='main-wrapper'>
          <h1 className='main-heading'>How much dowry are you worth?</h1>
      <form className='wrapper' onSubmit={handleSubmit}>
        <Age/>
        <Profession/>
        <Salary/>
        <Education/>
        <House/>
        <Location/>
        <button type='submit' className='submit-btn'>Calculate Dowry Amount</button>
      </form>
        </div>
      )}
      {start && <Result/>}
    </>
  )
}

export default App
