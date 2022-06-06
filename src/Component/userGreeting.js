import React, { Component } from 'react'

class userGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
         isLoggedin:true
         }
         
     }
    render() {
      
        return this.state.isLoggedin && <div>hello clarke</div>
        
        /*return (
          this.state.isLoggedin? <div>hello ricky</div>: <div>hello james</div>
      )*/
      
      
      
        /* let message
        
        if (this.state.isLoggedin) {
            message = <div>hello pranav</div>
        } else {
            message = <div>hello guest</div>
        } 
        return <div>{message}</div> */
     /* if (this.state.isLoggedin) {
          return (
            <div>hello vishwas</div>
        ) 
      } else {
          return (
              <div>hello guest</div>
          )
    } */
  }
}

export default userGreeting