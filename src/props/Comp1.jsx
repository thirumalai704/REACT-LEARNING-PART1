import React from 'react'

const Comp1 = (props) => {

  
  let {student , rollno , member ,task ,project } = props ;
  
  console.log(props);

  console.log(task);

  console.log(project);
    
  return (
    <>
    <h1>Comp1</h1>
    <h1>Name : {student}</h1>
    <h1>RollNo : {rollno}</h1>
    <h1>Member : { member ? "Active" : "UnActive" } </h1>
    <h1>Project : {project == undefined ? "Not Assignned":" Assigned"}</h1>
    <h1>Task : {task == null ? "Task not done":"Tsask done"}</h1>
    
    </>
  )
}

export default Comp1