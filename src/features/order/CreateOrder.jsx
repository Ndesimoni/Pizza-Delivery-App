// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

import Button from "../../ui/Button";
import { useSelector } from "react-redux";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetable",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);

  const username = useSelector(state=>state.user.username)

  const navigation = useNavigation();
  const orderStateComponent = navigation.state === "submitting";
  const formErrors = useActionData();
 

  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* import Form from react-router */}
      <Form method="Post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" defaultValue={username} required className="input grow"/>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow"> 

            <input type="tel" name="phone" required  className="input w-full"/>

            {formErrors?.phone && <p className="mt-2 text-red-600 text-xs bg-red-100 p-2 rounded-full">{formErrors.phone}</p>}

          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required
             className="input w-full"  />
          </div>
        </div>

        <div className=" mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-4 h-4 accent-blue-500 
            focus:ring focus:outline-none
             focus:ring-blue-500 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}

          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* add custom input */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          {/* <button disabled={orderStateComponent}>
            {orderStateComponent ? "creating new order" : " order now"}
          </button> */}

          <Button disabled={orderStateComponent} type="primary"> 
            {orderStateComponent ? "creating new order" : " order now"} 
          </Button>

        </div>
      </Form>
    </div>
  );
}
// this is our action
export async function action({ request }) {
  const formData = await request.formData();
  //  turn function to object
  const data = Object.fromEntries(formData);
  

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // this is checking for the right phone number
  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "please enter a valid phone number";
  // this is returning the phone number error
  if (Object.keys(error).length > 0) return error;

  // create newOrder here
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
