import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Part({part, exercises}) {
  console.log(part);
  return (
    <p>{part} {exercises}</p>
  )
}

function Content({value}) {
  console.log(value, "fuck");
  return (
    <div>
      <Part part={value.part} exercises={value.exercises} />
    </div>
  );
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.tot}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course.name} />
      
      
      {
        course.parts.map(value => {
          return <p>{value.name} {value.exercises} </p>
        })
      }
    
      <Total tot={course.parts.reduce((acc, part) => acc + part.exercises, 0)}/>
    </div>
  )
}

export default App