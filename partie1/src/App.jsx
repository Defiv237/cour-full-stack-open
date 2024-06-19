import { useState } from 'react'

const Boutton = ({ev, text}) => {
  return (
    <button onClick={ev}> {text} </button>
  )
}

const SetValue = ({value}) => {
  return(
    <span> {value} </span>
  )
}

const Header = ({title}) => {
  return(
    <h1> {title} </h1>
  )
}

const Stat = ({text}) => {
  return(
    <h2> {text} </h2>
  )
}

const Tot = ({exp}) => {
  return(
    <span>{exp}</span>
  )
}

const Pourc = ({exp}) => {
  return(
    <span> {exp} </span>
  )
  
}

const sum = (a, b, c) => {
  return (a + b + c)
}

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={"give feedback"} />
      <Boutton ev={() => setGood(good + 1)} text={"good"} />
      <Boutton ev={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Boutton ev={() => setBad(bad + 1)} text={"bad"} />
      <Stat text={"statistics"} />
      <div>
        good : <SetValue value={good} /><br></br>
        neutral : <SetValue value={neutral} /><br></br>
        bad : <SetValue value={bad} /><br></br>
        all : <Tot exp={sum(good, neutral, bad)} /><br></br>
        positive : <Pourc exp={(good * 100) / sum(good, neutral, bad)} />%
      </div>

    </div>
  )
}

export default App