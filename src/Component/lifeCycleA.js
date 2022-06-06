import React, { Component } from 'react'
import LifeCycleB from './lifeCycleB'

 class lifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:'pranav'
      }
      console.log("life cycle constructor")
   }
  
    static getDerivedStateFromProps(props,state){
      console.log("lifecycle getDerivedStateFromProps")
      return null
   }

    
    componentDidMount() {
        console.log("lifecycle component mount")
   }
   shouldComponentUpdate() {
     console.log("lifecycle  shouldComponentUpdate")
      return true
   }
   getSnapshotBeforeUpdate(prevState, prevProps) {
     console.log("lifecycle  getsnapshot before update")
      return null
   }
   componentDidUpdate() {
     console.log("lifecycle componentDidUpdate")
   }
    changeHandler = () =>{
     this.setState({
       username:"software programmer"
     })
   }
    render() {
         console.log("life cycle render")
    return (
      <div>
        <h1>lifeCycleA</h1>
        <LifeCycleB></LifeCycleB>
        <button onClick={ this.changeHandler}>click</button>
      </div>
     
    )
  }
}
export default  lifeCycleA

