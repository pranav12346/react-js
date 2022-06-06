import React from 'react'
import './myStyle.css'

function Styles(props) {
    let className= props.primary? "primary": ""
  return (
      <div><h1 className={`${className} font-xl  `}>style sheet</h1></div>
  )
}

export default Styles