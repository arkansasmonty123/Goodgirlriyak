import Link from "next/link";
import { useState } from "react";

export default function AI() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAISuggestions = () => {
    setLoading(true);
    setTimeout(() => {
      setSuggestions([
        "Top 10 AI Startups to Watch",
        "How AI Will Change Jobs in 2030",
        "AI Ethics: What You Should Know"
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold">AI Assistant</h1>
        <p className="mt-2 text-lg">Get AI-powered article suggestions instantly.</p>
        <Link href="/" className="block mt-4 text-indigo-100 hover:underline">← Back to Home</Link>
      </header>

      <main className="max-w-3xl mx-auto px-5 py-10 text-center">
        <button
          onClick={fetchAISuggestions}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Get AI Suggestions
        </button>

        {loading && <p className="mt-6 text-gray-500">Fetching AI suggestions...</p>}

        {suggestions.length > 0 && (
          <ul className="mt-6 space-y-3">
            {suggestions.map((s, i) => (
              <li key={i} className="bg-white shadow p-4 rounded-lg text-gray-700">{s}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
