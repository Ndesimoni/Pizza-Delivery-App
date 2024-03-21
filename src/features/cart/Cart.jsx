
import LinkBtn from "../../ui/LinkBtn";
import Button from "../../ui/Button";
import CartItem from "./CartItem"
import { useDispatch, useSelector } from "react-redux";
import { clearItems, getCart } from "./cartSlice";
// import EmptyCart from './EmptyCart'

import EmptyCart from './EmptyCart'

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetable",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const dispatch = useDispatch()
  const cart =  useSelector(getCart)
  const  username = useSelector((state)=>state.user.username)

  if(cart.length<=0) return <EmptyCart/>


  return (
    <div className="py-4 px-3 ">
      {/* <Link to="/menu" className="text-blue-500 hover:text-red-500 hover:underline">&larr; Back to menu</Link> */}
      <LinkBtn to="/menu" > &larr; Back to menu </LinkBtn>


      <h2 className="mt-7 mb-4 text-xl font-semibold">Your cart, {username}</h2>


      <ul className="divide-y divide-slate-200 border-b mt-3">{cart.map((items) => <CartItem item={items} key={items. pizzaId}/>)}</ul>

      <div className="mt-7 space-x-3">

        <Button to="/order/new" type="primary">Order pizzas </Button>
        
        <Button type="secondary" onClick={()=> dispatch(clearItems())}> clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
