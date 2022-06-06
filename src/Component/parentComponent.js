import React, { Component } from 'react'
import ChildComponent from "./childComponent"
export class ParentComponent extends Component {

constructor(props) {
  super(props)

   this.state = {
     parentName:'parent'
    }
    this.greetParent= this.greetParent.bind(this)
}
    greetParent(childName) {
       alert(`hello ${this.state.parentName} of ${childName}`)
   } 

    render() {
    return (
        <div> <ChildComponent greetHandler={ this.greetParent}></ChildComponent></div>   
      )
  }
}
