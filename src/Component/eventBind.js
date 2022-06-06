import React, { Component } from 'react'
import Button from '@mui/material/Button';

 class eventBind extends Component {
    constructor(props) {
      super(props)

        this.state = {
            message: 'hello'
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message:"goodbye"
        })
        console.log(this)
    }
    
    render() {
      
    return (
        <div>
            <h1>{this.state.message}</h1>
            <br></br>
            {/*<button onClick={this.clickHandler.bind(this)}>click me </button> */}
            { /* <button onClick={() => this.clickHandler()}>click me</button> */}
            <Button variant="contained" onClick={this.clickHandler}>click Me</Button>
     </div>
    )
  }
}

export default eventBind