import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { decreaseItemsQuantity, increaseItemsQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemsQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-xs pt-2 font-bold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemsQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.any.isRequired,
  currentQuantity: PropTypes.any.isRequired,
};

export default UpdateItemQuantity;
