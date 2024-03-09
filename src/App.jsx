import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
// change import name from loader to menuLoader
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import Card from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayOut from "./ui/AppLayOut";
import Error from "./ui/Error";
const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    // this errorElement holds the error component
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },

      // the loader holds the api results which is given to the menu component
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
        // we pass the loader from order here
        loader: orderLoader,
        errorElement: <Error />,
      },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/cart", element: <Card /> },
    ],
  },
]);

// this is the router provider component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
