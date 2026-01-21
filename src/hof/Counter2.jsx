import React from 'react'
import CounterHoc from './CounterHoc'

const Counter2 = (props) => {
    let {countIncrease ,count } = props
  return (
    <>
    <h1>Counter2</h1>
    <h2>{count}</h2>
    <button onMouseOver={countIncrease}>Hover Incre</button>
    </>
  )
}

export default CounterHoc(Counter2)
