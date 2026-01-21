import { Fragment } from "react";

const Comp4 = (props)=>
{
   let { product } = props
   let {name , price , category} = product;
    return (
        <>
          <h1>Products</h1>
          <h3>Name : {name}</h3>
          <h3>Price :  {price}</h3>
          <h3>Type : {category}</h3>
        </>
    )
}

export default Comp4