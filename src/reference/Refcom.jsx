import React, { useRef } from 'react'

//! ref used to target the jsx element 

const Refcom = () => {

  let h1Ref = useRef()
  let pRef = useRef()

  let changeColor = ()=>
  {
    h1Ref.current.style.color = "red" ;
    h1Ref.current.style.textTransform = "uppercase" ;
    pRef.current.style.color = "blue" ;

  }
  
  return (
    <>
    <h2 ref={h1Ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorum.</h2>
    <p ref={pRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <button onClick={changeColor}>Change color</button>
    </>
  )
}

export default Refcom