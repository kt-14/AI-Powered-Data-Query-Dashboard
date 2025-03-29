import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ResultsDisplay = () => {
  const { result, error, loading } = useSelector((state) => state.query);

  return (
    <div className="p-4 bg-cardBg rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Query Results</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={result.data.map((val, index) => ({ name: `Data ${index + 1}`, value: val }))}>
            <XAxis dataKey="name" stroke="#E2E8F0" />
            <YAxis stroke="#E2E8F0" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366F1" />
            {console.log("Updated Result Data:", result)};
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ResultsDisplay;
