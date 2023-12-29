const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.parts.partName} {props.parts.exercises} </p>
    </div>
  )

}

const Content = (props) => {
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Total  = (props) => {
  return (
    <div>
      <b> Total number of exercices: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises }</b>
    </div>
  )

}


const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts: [
      {
        partName: 'Fundamentals of React',
        exercises: 10
      },
      {
        partName: 'Using props to pass data',
        exercises: 7
      },
      {
        partName: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    
    </div>
  )
}

export default App