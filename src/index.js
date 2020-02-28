import React from 'react'
import ReactDOM from 'react-dom'


// const Header = (props) => {
//   return(
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Part = (props) => {
//   return(
//     <>
//       <p>
//           {props.part} {props.exercises}
//       </p>
//     </>
//   )
// }

// const Content = (props) => {
//   const items = props.parts.map((element) =>
//     <Part key={element.name} parts={element.name} exercises={element.exercises}/>
//   )
//   return(
//     <>
//       {items}
//     </>
//   )
// }


// const Total = (props) => {
//   const items = props.parts.map(el => el.exercises).reduce((a,c)=>a+c)
//   return(
//     <>
//       <p>
//         Number of exercises {items}
//     </p>
//     </>
//   )
// }



// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       'name': 'Fundamentals of React',
//       'exercises': 10,
//     },
//     {
//       'name': 'Using props to pass data',
//       'exercises': 7,
//     },
//     {      'name': 'State of a component',
//       'exercises': 14,
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts}/>
//       <Total parts={parts} />
//     </div>
//   )
// }


const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>
        Greetings
      </h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <div>
        {counter}
      </div>
    </div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()

// ReactDOM.render(<App counter={counter} />, document.getElementById('root'))