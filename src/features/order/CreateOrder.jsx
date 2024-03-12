// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { object } from "prop-types";

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
    name: "Vegetale",
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

  const navigation = useNavigation();
  const orderStateComponent = navigation.state === "submitting";
  const formErrors = useActionData();

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>
      {/* import Form from react-router */}
      <Form method="Post">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formErrors?.phone && <p>{formErrors.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* add custom input */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={orderStateComponent}>
            {orderStateComponent ? "creating new order" : "create order"}
          </button>
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
  console.log(data);

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
  if (object.key(error).length > 0) return error;

  // create newOrder here
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
