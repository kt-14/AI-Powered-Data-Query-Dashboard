import { useSelector } from "react-redux";

const QueryHistory = () => {
  const { history } = useSelector((state) => state.query);

  return (
    <div className="p-4 bg-cardBg rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Query History</h2>
      <ul className="space-y-2">
        {history.map((query, index) => (
          <li key={index} className="text-sm bg-darkBg p-2 rounded-md">
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
