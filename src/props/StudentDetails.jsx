import React, { Fragment } from 'react'

const StudentDetails = (props) => {
  
    let {students} = props 

    console.log(students);
    
  return (
    <>
    <h1>StudentDetails</h1>
    <ul>
        {
            students.map(
                (value,index) =>
                {
                    return(
                        <Fragment key={index}>
                          <li> {value}</li> 
                        </Fragment>
                    )
                }
            )
        }
    </ul>
    </>
  )
}

export default StudentDetails