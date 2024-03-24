import OrderItem from "./OrderItem";

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  // this holds the search data gotten from our search component
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex flex-wrap   items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">order #{id} Status</h2>

        <div>
          {priority && (
            <span className="bg-red-500 px-3 py-1 rounded-full text-xs text-yellow-50 mr-1 uppercase">
              Priority
            </span>
          )}
          <span className="bg-green-500 px-3 py-1 rounded-full text-xs text-yellow-50 ml-1 uppercase">
            {status} order{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap   items-center justify-between gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-50">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className=" dive-stone-200 divide-y border-t  border-b">
        {" "}
        {cart.map((items) => (
          <OrderItem item={items} key={items.pizzaId} />
        ))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold  text-stone-600">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}
// takes the searched data id and give it params.orderId
// now we export the loader to App.js

export async function loader({ params }) {
  // getOrder is the function that make the api request
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
