import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

const AppLayOut = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayOut;
