import React from 'react'

const Greetting = (props) => {

    let {children } = props

  return (
    <>
    <h1>{children}</h1>
    </>
  )
}

export default Greetting