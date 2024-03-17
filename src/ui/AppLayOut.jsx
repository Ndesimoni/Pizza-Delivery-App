import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayOut = () => {
  // we get our state with the useNavigation custom hook
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  


  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen ">
      {isLoading&& <Loader />}
  

      <Header />

       <div className="overflow-auto">
          <main className="  mx-auto max-w-3xl">
          <Outlet />
          </main>
      </div> 

      <CartOverview />
     
    </div>
  );
};

export default AppLayOut;
