import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handlerClick, text}) => (
  <button onClick={handlerClick}>{text}</button>
)

const Display = ({value, text}) => (
  <p>{text}: {value}</p>
)

const Statistics = ({good, bad, neutral}) => {
  const sum = good + bad + neutral
  let avarge = 0
  let positives = good / sum
  if ({sum} !== 0) {
    avarge = (good * 1 + bad * -1 + neutral * 0) / sum
  }
  return (
    <div>
      <p>All: {sum}</p>
      <p>avarge: {avarge}</p>
      <p>Positives: {positives} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Button handlerClick={() => setGood(good + 1)} text='good'/>
      <Button handlerClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handlerClick={() => setBad(bad + 1)} text='bad'/>
      <Display value={good} text='good'/>
      <Display value={neutral} text='neutral'/>
      <Display value={bad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)