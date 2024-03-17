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
        <input value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search order #" 
        className="rounded-full px-4 py-2 bg-slate-100 text-sm
         placeholder:text-blue-950 sm:w-64 sm:focus:w-72 transition-all
          duration-300 focus:ring-slate-300 focus:ring-opacity-50 focus:ring"/>
      </div>
    </form>
  );
};

export default CreateSearch;
