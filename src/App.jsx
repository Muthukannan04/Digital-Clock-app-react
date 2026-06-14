import {useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currenttime,setCurrentTime]=useState(new Date());
  useEffect(()=>{
      const timer =setInterval(()=>{
        setCurrentTime(new Date());
      },1000);
      return ()=>{
        clearInterval(timer)
      }
  },[])

  const FormatHour =(hour)=>{
    return hour === 0 ? 12 : hour > 12 ? hour -12 :hour;
  }

  const FormatZero =(num)=>{
    return num < 10 ? `0${num}` : num;
  }

  const formatDate = (date) => {
    const options={ weekday : "long", year : "numeric", month : "long", day : "numeric"}
  return date.toLocaleDateString(undefined,options);
}

  return (
    <>
      <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">
        {FormatZero(FormatHour(currenttime.getHours()))} :
        {FormatZero(currenttime.getMinutes())} :
        {FormatZero(currenttime.getSeconds())} 
        {
          currenttime.getHours()>=12?" PM" : " AM"
        }
      </div>
      <div className="date">
       {formatDate(currenttime)}
      </div>
      </div>
         
    </>
  )
}

export default App
