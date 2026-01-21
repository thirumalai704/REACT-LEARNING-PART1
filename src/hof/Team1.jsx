import React from 'react'
import Hoc from './Hoc'

const Team1 = (props) => {

    let {prize,increasePrice} = props;


  return (
    <>
    <h1>Team1</h1>
    <h3>Prize : {prize}</h3>
    <button onClick={increasePrice} >Increase</button>
    </>
  )
}

export default Hoc(Team1)