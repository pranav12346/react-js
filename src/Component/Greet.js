import React from 'react'

const Greet = (props) => {
    const { name,nickname } = props
    return (
        <div>
            <h1>hello { name } a.k.a {nickname}</h1>
            {props.children }
            </div>
     )
}


export default Greet