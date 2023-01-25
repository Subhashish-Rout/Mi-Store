import React from 'react'
import "../styles/Heading.css"


const Heading = ({text}) => {
  console.log("I am here")
    return (
    <div className='heading'>
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Heading