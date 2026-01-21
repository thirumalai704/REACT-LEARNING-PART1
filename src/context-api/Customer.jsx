import { useContext }  from 'react'
import { context1 } from './NewContext';

const Customer = () => {

    let data = useContext(context1) 

    console.log(data);
    

  return (
    <>
    <h1>Customer</h1>
    <p>{data}</p>
    </>
  )
}

export default Customer