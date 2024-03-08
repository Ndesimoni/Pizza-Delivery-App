import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayOut = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);

  return (
    <div className="layout ">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayOut;
