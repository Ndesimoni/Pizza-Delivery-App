
import PropTypes from "prop-types"
import { formatCurrency } from "../../utils/helpers";

// function OrderItem({ item, isLoadingIngredients, ingredients }) {


function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="text-sm flex items-center justify-between gap-4">
        <p >
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes ={
  item: PropTypes.any.isRequired,
//   isLoadingIngredients: PropTypes.any.isRequired,
//   ingredients: PropTypes.any.isRequired
}

export default OrderItem;
