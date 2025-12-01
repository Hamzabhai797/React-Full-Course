const ErrorMessage = () => {

  let foodItems = ["Dal", "green vegitable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
    {foodItems.length === 0 && <p>No food items available</p>}
    </>
  )
}
export default ErrorMessage;