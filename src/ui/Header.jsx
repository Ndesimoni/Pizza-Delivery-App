import { Link } from "react-router-dom";
import CreateSearch from "../features/order/CreateSearch";

const Header = () => {
  return (
    <div>
      <Link to="/">Fast Chops llc</Link>
      <CreateSearch />
      <p>simon </p>
    </div>
  );
};

export default Header;
