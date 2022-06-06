import React from 'react'

function Person({ person,key}) {
  return (
      <div> { key}<h1>i am {person.name}. and i have a power of { person.power}</h1></div>
  )
}

export default Person