import  { useState } from 'react'

const CounterHoc = (WrappedComponent) => {

  return function Comp(){
     let [count , setCount] = useState(1)

    let countIncrease = ()=>
    {
        setCount(count+1)
    }
    return <WrappedComponent count={count}  countIncrease={countIncrease}/>
  }
}

export default CounterHoc