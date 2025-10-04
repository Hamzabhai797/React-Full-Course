// export function User(props){
//   return(
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }

// 2nd method
// export function User({name}){
//   return(
//     <div>
//       <h1>{name}</h1>
//     </div>
//   )
// }

// 3rd method (destructuring in parameter as well as in function body)  
// export function User({name,age}){
//   return(
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//     </div>
//   )
// }

// 4th method (destructuring in parameter as well as in function body with default value)
// export function User({name,age,email}){  // added email to destructuring
//   return(
//     <div>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//       <h1>Email: {email}</h1>
//     </div>
//   )
// }


// with object
export function User({user}){  // added email to destructuring
  return(
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  )
}
