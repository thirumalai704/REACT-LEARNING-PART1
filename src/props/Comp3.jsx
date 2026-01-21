import React from 'react'

const Comp3 = (props) => {
    console.log(props);
    
    let {festivel} = props ;

    console.log(festivel);
    
    let {name , date , dish} = festivel;
  return (  
    <>
    <h1>Comp3</h1>
    <h2>It's {name} on {date} , so I will be making {dish}</h2>
    </>
   
  )
}

export default Comp3