// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import EmptyCart from "../cart/EmptyCart";

import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearItems, getCart, getTotalCartPrice } from "../cart/cartSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const dispatch = useDispatch();

  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  console.log(address);

  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const orderStateComponent = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priority = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priority;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* import Form from react-router */}
      <Form method="Post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />

            {formErrors?.phone && (
              <p className="mt-2 text-red-600 text-xs bg-red-100 p-2 rounded-full">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              disabled={isLoadingAddress}
              type="text"
              name="address"
              required
              defaultValue={address}
              className="input w-full"
            />
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-[5px] pb-2">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                get position
              </Button>
            </span>
          )}
        </div>

        <div className=" mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-4 h-4 accent-blue-500 
            focus:ring focus:outline-none
             focus:ring-blue-500 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/* add custom input */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <Button disabled={isLoadingAddress} type="primary">
            {orderStateComponent
              ? "creating new order"
              : `order now for: ${formatCurrency(totalPrice)}`}
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
    priority: data.priority === "true",
  };

  // this is checking for the right phone number
  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "please enter a valid phone number";
  // this is returning the phone number error
  if (Object.keys(error).length > 0) return error;

  // create newOrder here
  const newOrder = await createOrder(order);
  // do not over use this method it kills performance
  store.dispatch(clearItems());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
