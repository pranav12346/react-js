import React, { Component } from 'react'

 class classClick extends Component {
     clickHandler() {
         console.log("class click")
     }
  
     render() {
         return (
             <div>
                 classClick
                 <br></br>
                 <button onClick={ this.clickHandler}>click me</button> 
             </div>
         )
         
        }
}

  export default classClick