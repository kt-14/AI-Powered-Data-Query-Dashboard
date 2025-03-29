import { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, setQueryResult, setError } from "../store/querySlice";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuerySubmit = () => {
    if (!query.trim()) return;

    dispatch(submitQuery());

    setTimeout(() => {
      if (query.toLowerCase().includes("error")) {
        dispatch(setError("Invalid query format"));
      } else {
        dispatch(setQueryResult({ query, data: [40, 60, 80, 100] }));
      }
    }, 1000);
  };

  return (
    <div className="p-4 bg-cardBg rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Ask a business question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 bg-darkBg text-white rounded-md border border-gray-600 focus:outline-none focus:border-accent"
      />
      <button
        onClick={handleQuerySubmit}
        className="mt-3 w-full p-2 bg-accent text-white rounded-md hover:bg-indigo-600 transition"
      >
        Submit Query
      </button>
    </div>
  );
};

export default QueryInput;
