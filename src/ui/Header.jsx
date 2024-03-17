import { Link } from "react-router-dom";
import CreateSearch from "../features/order/CreateSearch";
import UserName from "../features/user/UserName";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-r-stone-200 sm:px-6  flex justify-between items-center ">
      <Link to="/" className="tracking-widest">Fast Chops llc</Link>
      <CreateSearch />
    <UserName/>
    </header>
  );
};

export default Header;


