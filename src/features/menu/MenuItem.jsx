import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import { addItems, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteBtn from "../cart/DeleteBtn";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currenQuantityId = useSelector(getCurrentQuantityById(id));
  const isInCart = currenQuantityId > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItems(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-40 grayscale" : " "}`}
      />
      <div className="flex flex-col  grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto items-center justify-between flex">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" uppercase text-stone-500 font-medium">Sold out</p>
          )}

          {/* this is delete btn  */}
          {isInCart && (
            <div className="flex gap-3 items-center sm:gap-9">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currenQuantityId}
              />
              <DeleteBtn pizzaId={id} />{" "}
            </div>
          )}

          {!soldOut && !isInCart && (
            <>
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};
export default MenuItem;
