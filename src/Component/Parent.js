import React, { Component } from 'react'
import RegularComponent from './regularComponent'
import PureComponent from './pureComponent'
class Parent extends Component {
     
  constructor(props) {
    super(props)
  
    this.state = {
      name: "pranav"
      }
      
    }
 componentDidMount() {
    setInterval(() => {
      this.setState({
          name:"pranav"
        })
    },100)
  }
    render() {
        console.log("parent component")
    return (
        <div>Parent 
            <RegularComponent name={this.state.name}></RegularComponent>
            <PureComponent name={ this.state.name }></PureComponent>
      </div>
    )
  }
}

export default Parent