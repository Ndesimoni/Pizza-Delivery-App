
import LinkBtn from "../../ui/LinkBtn";

function EmptyCart() {
  return (
    <div className="px-5 py-5">
          <LinkBtn to="/menu" > &larr; Back to menu </LinkBtn>

      <p className="font-semibold mt-5">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
