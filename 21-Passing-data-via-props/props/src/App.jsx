import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { User } from './User.jsx'

function App() {

  let name = "Hamza"
  return (
    <>
    <h2>Props in react js</h2>
    <h5>{name}</h5>
      <User></User>
    </>
  )
}

export default App
