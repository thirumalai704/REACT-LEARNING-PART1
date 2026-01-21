import React, { useState } from 'react'

const CounterApp = () => {

    let [count, setcount] = useState(0)
    let countIncrement = ()=>{

        setcount(count + 1)
    }

    let countDecrement = ()=>{

         if(count > 0){

           setcount(count - 1)
    }
    }

    let countReset = ()=>{

        setcount(0)
    }
  return (
    <>
       <h1>Counter App  {count}</h1>

       <button style={{marginRight:"20px", marginTop:"20px"}} onClick={countIncrement}>Incrememnt</button>
       <button style={{marginRight:"20px", marginTop:"20px"}} onClick={countDecrement}>decrement</button>
       <button style={{ marginTop:"20px"}}  onClick={countReset}>reset</button>
    </>
  )
}

export default CounterApp