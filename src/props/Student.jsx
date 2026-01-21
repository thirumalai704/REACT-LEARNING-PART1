const Student = (props)=>{
 // ! one way to default props 
//    let {name="Raja", id=101 , house="Blue"} = props

// ! second way 
   let {name, id , house} = props
    return (
        <>
        <h2>Student Default Props</h2>
        <h3>Name : {name ? name : "student" }</h3>
        <h3>Id : {id ? id : "101" }</h3>
        <h3>House : {house ? house : "Green" }</h3>
        </>
    )
}

export default Student