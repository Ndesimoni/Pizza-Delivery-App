import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order from "./features/order/Order";
import Card from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import AppLayOut from "./ui/AppLayOut";

const router = createBrowserRouter([
  {
    element: <AppLayOut />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/order/:id", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
      { path: "/cart", element: <Card /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
