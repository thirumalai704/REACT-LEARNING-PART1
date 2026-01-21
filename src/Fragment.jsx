import React from 'react'

const Fragment = () => {
  return (
    // ! first way
    // <React.Fragment>
    //        <h1>Fragment is used to wrap multiple elements
    //         without creating any extra node in the DOM tree
    //          </h1>

    //          <p>We cannot use any props in except one "key" prop</p>
    // </React.Fragment>

    // ! second way
    //  <Fragment>
    //     <h1>Fragment is used to wrap multiple elements
    //         without creating any extra node in the DOM tree
    //          </h1>

    //          <p>We cannot use any props in except one "key" prop</p>
    //  </Fragment>

    // * third way 
      <>
        <h1>Fragment is used to wrap multiple elements
            without creating any extra node in the DOM tree
             </h1>

             <p>We cannot use any props </p>
      </>

  )

}

export default Fragment