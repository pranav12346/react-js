import React, { Component } from 'react'

export class regularComponent extends Component {
    render() {
      console.log("regular component")
    return (
        <div>regularComponent {this.props.name }</div>
    )
  }
}

export default regularComponent