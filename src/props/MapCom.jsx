import { Fragment } from "react"

const MapCom = (props)=> {

    let {frutis} =  props
    return (
     <>  
      <ul>
        <h1>Frutis</h1>
        {
            frutis.map( (value, index)=>{
                return (
                    <Fragment key={index}>
                        <li>{value}</li>
                    </Fragment>
                )
            } )
        }
      </ul>

        </>
    )
}

export default MapCom