import React, { createContext } from 'react'

export let contextApi =  createContext()

const Context2 = (props) => {

    let Company = "xyz";

    let employee = 100;

  return (
    <contextApi.Provider value={{Company,employee}}>
         {props.children}
    </contextApi.Provider>
  )
}

export default Context2