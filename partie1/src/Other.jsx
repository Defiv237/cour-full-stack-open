import { useState } from 'react'

function Other() {
    const t = [
        {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
    ]


t.forEach(value => {
  console.log(value.name)
})
t.forEach(value => {
    console.log(value.exercises)
  })  
}

export default Other