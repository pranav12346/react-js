import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
      <div>
          FunctionClick
          <br></br>
          <button onClick={ clickHandler}>Click me</button>
    </div>
  )
}

export default FunctionClick