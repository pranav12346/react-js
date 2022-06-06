import React from 'react'
import Person from "./Person"
function NameList() {
  //  const Names = ["ricky","clarke","james","ricky"]
    const Persons = [
        {
            id: 1,
            name: 'thor',
            power:'thunder strike'
        },
        {
            id: 2,
            name: 'captain america',
            power: 'vibranium shield strike'
        },
        {
            id: 3,
            name: 'iron man',
            power:'iron missiles'
        }
  ]
    const personList = Persons.map(person => <Person person={ person}></Person> )
  return (
      <div>
          {
           personList
          }
    </div>
  )
}

export default NameList