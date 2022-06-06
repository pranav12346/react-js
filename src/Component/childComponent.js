import React from 'react'

function childComponent(props) {
  return (
      <button onClick={() => props.greetHandler("child") }>Greet</button>
  )
}

export default childComponent