import { useState } from 'react'

// function App() {
//   console.log('Hello from component')
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return (
//     <>
//     <div>
//     <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>

//     </>
//   )
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Part (props) {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

function Content(props) {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React';
const exercises1 = 10;
const part2 = 'Using props to pass data';
const exercises2 = 7;
const part3 = 'State of a component';
const exercises3 = 14;

  return (
    <div>
      <Header  course = {course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total tot = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

 export default App

//  const [count, setCount] = useState(0)

//  <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>