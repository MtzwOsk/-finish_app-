import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({length, onClick}) => {
  let selected = Math.floor((Math.random() * length))
  return (
    <button onClick={() => onClick(selected)}>next anecdote</button>
  )
}



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const length = anecdotes.length
  const [points, upVote] = useState(Array.from({length:length},(v,k)=>k).reduce((o, key) => ({ ...o, [key]: 0}), {}))


  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <Button length={length} onClick={setSelected}/>
      <button onClick={() => upVote({...points, selected: points[selected] += 1})}>vote</button>
      <p>has {points[selected]}</p>
      <div>
        <p>Anecdote with most votes</p>
        <p>{props.anecdotes[Object.keys(points).filter((x) => (points[x] ===  Math.max(...Object.values(points))))[0]]}</p>
      </div>
    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)