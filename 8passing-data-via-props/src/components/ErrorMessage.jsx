const ErrorMessage = ( {items} ) => {

  // let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
    {items.length === 0 && <p>No food items available</p>}
    </>
  )
}
export default ErrorMessage;