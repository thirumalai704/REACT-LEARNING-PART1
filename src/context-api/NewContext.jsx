// !  create the context 
// !  wrap the conusmer component inside provider
// !  send the data using 'value' prop


import { createContext } from "react";


export let context1 = createContext();

import React from 'react'
import Customer from "./Customer";

const NewContext = () => {
  return (
    <context1.Provider value="data from context provider">
       <Customer/>
    </context1.Provider>
  )
}

export default NewContext

