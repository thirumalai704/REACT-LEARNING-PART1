import React from 'react'
import CounterHoc from './CounterHoc'

const Counter1 = (props) => {

    let {count ,countIncrease} = props
    console.log(count);
    console.log(countIncrease);

    
  return (
    <>
    <h1>Counter1</h1>
    <h2>{count}</h2>
    <button onClick={countIncrease}>count Incre</button>
    </>
  )
}

export default CounterHoc(Counter1)