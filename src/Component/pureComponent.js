import React, { PureComponent } from 'react'

 class pureComponent extends PureComponent {
     render() {
      console.log("pure component ")
    return (
        <div>pureComponent { this.props.name}</div>
    )
  }
}

export default pureComponent