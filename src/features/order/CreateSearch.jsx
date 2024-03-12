import { useState } from "react";
import { useNavigate } from "react-router-dom";

// this function component create the search id params
const CreateSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
    </form>
  );
};

export default CreateSearch;
