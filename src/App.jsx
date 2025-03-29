import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  return (
    <div className="min-h-screen bg-darkBg p-6 text-textPrimary">
      <h1 className="text-3xl font-bold text-center mb-6">AI-Powered Data Query Dashboard</h1>

      {/* Input on Left, History on Right */}
      <div className="max-w-6xl mx-auto flex gap-6">
        <div className="flex-1">
          <QueryInput />
        </div>

        {/* History on the Right */}
        <div className="w-1/3">
          <QueryHistory />
        </div>
      </div>

      {/* Full-Width Results Section */}
      <div className="max-w-6xl mx-auto mt-6">
        <ResultsDisplay />
      </div>
    </div>
  );
}

export default App;
