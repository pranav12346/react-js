import React, { Component } from "react"

class Welcome extends Component{
    render() {
      const  { name,nickname } =this.props
        return (
            <h1>hello {name} a.k.a { nickname}</h1>
        )
    }
}

export default Welcome