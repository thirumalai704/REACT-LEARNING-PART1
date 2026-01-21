import React from 'react'

const Child = (props) => {

     let {setMessage}  = props ;

  return (
    <>
    <h1>Child : we can indirectly pass the data from child to parent</h1>
    <button onClick={()=> setMessage("have a nice day")}>change message</button> 
    </>
  )
}

export default Child