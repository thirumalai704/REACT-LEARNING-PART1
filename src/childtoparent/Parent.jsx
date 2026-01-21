import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {

    let [message,setMessage] = useState("Good Morning");
  return (
    <>
    <h1>Parent : {message}</h1>
    <Child  setMessage={setMessage} />
    </>
  )
}

export default Parent