import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
  console.log(props);

  let {instrument} = props;
  
  return (
    <>
    <h1>CompB send to CompC</h1>
    <h2>{instrument}</h2>
    <CompC instrument={instrument}/>
    </>
  )
}

export default CompB