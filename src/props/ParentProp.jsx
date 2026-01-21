import React from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3';
import Comp4 from './Comp4';

const ParentProp = () => {
    let rainbow = ["Red","Yellow","Indigo","Orange","Blue","Green","Violet"];
    let festivel = {
      name : " christmas",
      date : "dec-25",
      dish : "cake"
    };

    let product = {
      name : "pen",
      price : 10 ,
      category : "stationary"
    }
   
  return (
    <>
    <h1>ParentProp</h1>
    {/* <Comp1 student ="Nithish"  rollno={8} member={true} task={null} project={undefined} /> */}
    {/* <Comp2   rainbow = {rainbow}/>
    <Comp3 festivel={festivel}/> */}
    <Comp4 product={product}/>
    <Comp4 product={product}/>
    <Comp4 product={product}/>
    </>
  )
}

export default ParentProp