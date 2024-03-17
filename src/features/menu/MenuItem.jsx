import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

function MenuItem({ pizza }) {

  const {  name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut?"opacity-40 grayscale":" "}`}/>
      <div className="flex flex-col  grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto items-center justify-between flex">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className=" uppercase text-stone-500 font-medium">Sold out</p>}
          <Button type="small">add to cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};
export default MenuItem;
