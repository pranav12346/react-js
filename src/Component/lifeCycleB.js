import React, { Component } from 'react'

 class lifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:'pranav'
      }
      console.log("life cycle B constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle B getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("lifecycle B component mount")
     }
    shouldComponentUpdate() {
     console.log("lifecycleB  shouldComponentUpdate")
      return true
     }
   getSnapshotBeforeUpdate(prevState, prevProps) {
     console.log("lifecycleB  getsnapshot before update")
      return null
   }
   componentDidUpdate() {
     console.log("lifecycleB componentDidUpdate")
   }
    render() {
         console.log("life cycle B render")
    return (
        <div>lifeCycleB</div>
     
    )
  }
}
export default  lifeCycleB
