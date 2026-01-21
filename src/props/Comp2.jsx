import React from 'react'

const Comp2 = (props) => {

    console.log(props);

        let {rainbow} = props 

        let [r1,r2,r3,r4,r5,r6,r7] =   rainbow
    
  return (
    <>
    <h1>Comp2 Component</h1>
    <h1>Rainbow Color</h1>
    <ul>
        <li>{r1}</li>
        <li>{r2}</li>
        <li>{r3}</li>
        <li>{r4}</li>
        <li>{r5}</li>
        <li>{r6}</li>
        <li>{r7}</li>
    </ul>
    
    </>
  )
}

export default Comp2