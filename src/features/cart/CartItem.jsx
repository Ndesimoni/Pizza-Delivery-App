import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import DeleteBtn from "./DeleteBtn";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currenQuantityId = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1.5 sm:mb-0">
        {quantity}&times; {name}
      </p>

      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currenQuantityId}
        />
        <DeleteBtn pizzaId={pizzaId} />
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
