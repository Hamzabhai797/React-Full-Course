    //Reusable Component
function Reuseable() {
  let Number = Math.random() * 2
  return <h5 style={{'background-color': '#776691'}}>Hi How are you I am: {Number}</h5>
}
export default Reuseable;