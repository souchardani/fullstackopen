const Hello = (props) => {
  console.log(props)
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = [ 'Peter', 'Maya']
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App