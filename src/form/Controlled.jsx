import React, { useState } from 'react'

const Controlled = () => {

    // ! 1. initialize the state 

    let [ email , setEmail  ] = useState("")
    let [password , setPassword] = useState("")


    //! state updation onchange

    let emailChange = (e)=>
    {
        console.log(e.target);

        setEmail(e.target.value)
        
    }

    let passwordChange = (e)=>
    {
        console.log(e.target);

        setPassword(e.target.value)   
    }

    let handelEvent = (e)=>{

           e.preventDefault()
           console.log(email , password);
           setEmail("")
           setPassword("")
    }



    //! 2. pass the value attribute to input field
  return (
    <>
    <form action="">
    <input type="email"  value={email} onChange={emailChange} />
    <br />
    <input type="password" value={password} onChange={passwordChange} />

    <br />

    <button onClick={handelEvent}>submit</button>

    </form>
   
    
    </>
  )
}

export default Controlled