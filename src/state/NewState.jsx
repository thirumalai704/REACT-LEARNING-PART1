import React from 'react'
import { useState } from 'react';

const NewState = () => {
  
     let [day, setDay] = useState("Friday");

     let changeDay = ()=>{
        setDay("Monday");
     }

     let [sport,setSport] = useState("Hockey");
     
     let [movie , setMovie] = useState({
        moviename : "Dragon",
        Actor : "pradeep",
        relesedate : "2025"
     })

     let {moviename,Actor,relesedate} = movie;

     let changemovie = ()=>
     {
        setMovie({
        moviename : "Leo",
        Actor : "Vijay",
        relesedate : "2022"
        })
     }


  return (
    <>
    <h3>Day : {day} </h3>
    <button onClick={changeDay}>ChangeDay</button>

    <h3>Sport : {sport}</h3>
    <button onClick={()=>setSport("Football") }>Change Sport</button>

    <h2>Movie Name : {moviename}</h2>
    <h2>Movie Actor : {Actor}</h2>
    <h2>Release Date : {relesedate}</h2>
    <button onClick={changemovie}>change moviedata</button>
    
    </>
  )
}

export default NewState