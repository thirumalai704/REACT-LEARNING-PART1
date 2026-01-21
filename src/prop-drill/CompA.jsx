import React from 'react'
import CompB from './CompB'

const CompA = () => {

    let instrument = "Guitar" ;
  return (
    <>
    <h1>Comp1 send to CompB</h1>
    <CompB  instrument={instrument}/>
    </>
  )
}

export default CompA