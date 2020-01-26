import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>
          {props.part} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const elements = props.part
  const items = []
  for (const [index, value] of elements.entries()) {
    items.push(<Part part={value} exercises={props.exercises[index]}/>)
  }
  return(
    <>
      {items}
    </>
  )
}


const Total = (props) => {
  return(
    <>
      <p>
        Number of exercises {props.sum}
    </p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} exercises={[exercises1, exercises2,exercises3]}/>
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))