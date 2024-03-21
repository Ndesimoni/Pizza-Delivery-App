import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";


function CartOverview() {
  const totalPizzaQuantity = useSelector(getTotalCartQuantity)
  const totalPizzaPrice = useSelector(getTotalCartPrice)

  if(!totalPizzaQuantity) return null

  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 uppercase sm:px-6 text-sm flex justify-between items-center">
      <p className="text-stone-300 space-x-4 sm:space-x-6 md:text-base">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>${totalPizzaPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
