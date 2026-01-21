import React from 'react'
import { useState } from 'react'

const DisplayMessage = () => {

    let [message, setMessage] = useState("happy new year")

    let [istrue , setistrue] = useState(true);

    let hideMessage = ()=>
    {
       setistrue(false)
    }  
    
  return (
    <>
    <h1>Message : { istrue ? message : "" } </h1>
    <button  onClick={hideMessage}>button</button>
    </>
  )
}

export default DisplayMessage