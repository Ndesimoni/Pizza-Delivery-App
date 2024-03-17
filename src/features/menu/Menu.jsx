import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

// this is the menu component
function Menu() {
  // useLoaderData holds to data gotten from the api
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2 ">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// function to fetch api pizza data
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
