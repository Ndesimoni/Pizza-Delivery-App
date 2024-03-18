import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state)=> state.user.username)


  return (
    <div className="text-center my-10 sm:my-16">
      <h1 className="font-semibold mb-8 text-xl md:text-3xl mx-16">
        The best pizza.
        <br />
      <span className="text-yellow-500">
      Straight out of the oven, straight to you.
        </span> 
      </h1>

    {username===" "?<CreateUser/>: <Button to="/menu" type="primary">continue ordering: {username} </Button>}  
    </div>
  );
}

export default Home;
