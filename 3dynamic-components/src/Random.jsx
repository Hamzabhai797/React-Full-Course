// function Random() {

//   let number = Math.random() * 10
//   return (
//      <h4>random number is: {number}</h4>
//   )
// }
// export default Random

// 2nd method

function Random() {

  let number = Math.random() * 10
  return (
     <h4 style={{'backgroundColor': '#776691'}}> random number is: {Math.round(number)}</h4>
  )
}
export default Random;