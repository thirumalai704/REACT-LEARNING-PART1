import React from 'react'
import Christmas from './Christmas';
import NewYear from './NewYear';

const ConditionalRendering = () => {

    let status = false ;

    let city = "delhi";

    let age = 20 ;

    let date = "25-dec";
    
    // ! if else
    // if (status==true) {

    //     return (
    //     <h2>user is Online</h2>
    //   )
      
    // } else {

    //   return (
    //     <h2>user is offline</h2>
    //   )
      
    // }

    //! if else if to check multiple condition

    // if (city=="Delhi") {

    //   return(
    //     <>
    //     <h1>Delhi</h1>
    //     <p>Delhi, India's capital, is a sprawling metropolis blending ancient history with modern dynamism, known as the "City of Cities" for its mix of Old Delhi's Mughal heritage (Red Fort, Humayun's Tomb) and New Delhi's British-era architecture (India Gate, Parliament)</p>
    //     </>
       
    //   )
      
    // } 
    // else if (city=="chennai") {

    //   return(
    //     <>
    //     <h1>chennai</h1>
    //     <p>Chennai is famous for its rich South Indian culture, vibrant arts (especially Carnatic music & Bharatanatyam dance), historic temples with Dravidian architecture, the vast Marina Beach.</p>
    //     </>
       
    //   )
      
    // } 
    // else if (city=="Karnataka") {

    //   return(
    //     <>
    //     <h1>Karnataka</h1>
    //     <p>From the awe-inspiring ruins of the ancient city of Hampi to the intricately-chiselled temples of Pattadakal to the majestic temples of Belur and Halebidu, every stone bears witness to the architectural prowess and spiritual fervour of bygone eras..</p>
    //     </>
       
    //   )
      
    // } 
    
    // else {

    //   return (
    //     <h1>City is not matched</h1>
    //   )
      
    // }


    // ! switch case 

    // switch (city) {
    //   case "chennai":
    //        return (
    //     <>
    //     <h1>chennai</h1>
    //     <p>Chennai is famous for its rich South Indian culture, vibrant arts (especially Carnatic music & Bharatanatyam dance), historic temples with Dravidian architecture, the vast Marina Beach.</p>
    //     </>
    //        )

    //     case "delhi" :
    //       return(
    //     <>
    //     <h1>Delhi</h1>
    //     <p>Delhi, India's capital, is a sprawling metropolis blending ancient history with modern dynamism, known as the "City of Cities" for its mix of Old Delhi's Mughal heritage (Red Fort, Humayun's Tomb) and New Delhi's British-era architecture (India Gate, Parliament)</p>
    //     </>
       
    //   )  
      
    //   default :
    //   return (
    //     <h1>City is not matched</h1>
    //   )
      
    // }

    // ! short circuting

    // return (
    //   <>
    //   <h1>Short Circuting</h1>
    //   <p> {age > 18 && <p>You are eligible to vote</p> }  </p>
    //   </>
    // )
   
    // ! ternary operator

  // return (
  //   <>
  //    <h2>Status : {status == true ? "User is Online" : "User is offline" } </h2>
  //   </>
  // )

    return (
    <>
     <h2>{date == "25-dec" ? <Christmas/> : <NewYear/> } </h2>
    </>
  )
}

export default ConditionalRendering