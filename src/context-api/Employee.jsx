import React, { useContext } from 'react'
import { contextApi } from './Context2';



const Employee = () => {

     let data = useContext(contextApi);
    
        console.log(data);
    
        let {Company , employee} = data;
  return (
    <>
    <h2>Employee</h2>

    <h3>Company : {Company}</h3>
    <h3>No of emp : {employee}</h3>
    
    </>
  )
}

export default Employee