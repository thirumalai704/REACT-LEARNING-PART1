import React, { useState } from 'react'

const Hoc = (WrappedComponent) => {
  
  return function Comp (){
    
    let [prize , setPrize] = useState(20);

    let increasePrice = ()=>
    {
        setPrize(prize + 20)
    }

    return <WrappedComponent increasePrice = {increasePrice} prize={prize} />
  }
}

export default Hoc