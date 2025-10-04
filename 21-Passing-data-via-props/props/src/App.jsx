// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { User } from './User.jsx'

// function App() {

//   return (
//     <>
//     <h2>Props in react js</h2>
//       {/* <User name="Hamza" /> */}
//       {/* <User name="Hamza" age={25} /> */}
//       <User name="Hamza" age={25} email="hamza@example.com" />
//     </>
//   )
// }

// export default App


// 2nd method   ya variable ke saat hay

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { User } from './User.jsx'

// function App() {

//   let Username = "Hamza"
//   let age = 22
//   let email = "hamza@example"
//   return (
//     <>
//     <h2>Props in react js</h2>
//       <User name={Username} age={age} email={email} />
//     </>
//   )
// }

// export default App



// with object

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { User } from './User.jsx'

// function App() {

//   let Userobject = {
//     name: "Hamza",
//     age: 22,
//     email: "hamza@examplegmail.com"
//   }
//   return (
//     <>
//     <h2>Props in react js</h2>
//       <User user={Userobject} />
//     </>
//   )
// }

// export default App


// with 2 object

// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { User } from './User.jsx'
// import { College } from './College.jsx'

// function App() {

//   let Userobject = {
//     name: "Hamza",
//     age: 22,
//     email: "hamza@examplegmail.com"
//   }

//   let Userobject2 = {
//     name: "Osama",
//     age: 24,
//     email: "Osama@examplegmail.com"
//   }
//   return (
//     <>
//     <h2>Props in react js</h2>
//       <College />
//       <User user={Userobject} />
//       <hr />
//       <User user={Userobject2} />
//     </>
//   )
// }

// export default App

// with New component =name: college

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { User } from './User.jsx'
import { College } from './College.jsx'

function App() {

  let Userobject = {
    name: "Hamza",
    age: 22,
    email: "hamza@examplegmail.com"
  }

  let Userobject2 = {
    name: "Osama",
    age: 24,
    email: "Osama@examplegmail.com"
  }

  let CollegeNames = ["SMIU", "DJ", "FDC", "APS"] 
  return (
    <>
    <h2>Props in react js</h2>
      <College names={CollegeNames}/>
      <User user={Userobject} />
      <hr />
      <User user={Userobject2} />
    </>
  )
}

export default App