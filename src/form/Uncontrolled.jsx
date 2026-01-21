import React, { useRef } from 'react'

const Uncontrolled = () => {

    // ! uncontrolled form means controlled by dom not react 
    let emailRef = useRef()
    let passRef =useRef()

    // ! e means synthetic event to controlled native event 
    
    let handleEvent = (e)=>{
        e.preventDefault()
        let a = emailRef.current.value
        let b = passRef.current.value
        console.log(a);
        console.log(b);
        console.log({email : a , password : b});
        
    }
  
  return (
    <>
    <form action="">
        <input ref={emailRef} type="email"  />
        <br />
        <input ref={passRef} type="password"  />
        <br />
        <button onClick={handleEvent}>submit</button>
    </form>
    </>
  )
}

export default Uncontrolled