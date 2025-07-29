import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [articleText, setArticleText] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([]);

  // Fetch latest news
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6dcd94f1ac8f10fcb818c2cce026535`
        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 8)); // Show top 8 headlines
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  // AI Suggestion (Placeholder)
  const getAISuggestions = () => {
    // In future, integrate with OpenAI API here
    setAiSuggestions([
      "Tip: Start with a strong intro related to current trends.",
      "Add 3-4 bullet points with subheadings.",
      "Consider adding statistics or examples.",
    ]);
  };

  // Filter news by search
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">GoodGalRiyak Blog</h1>
        <p className="text-gray-500 mt-1">Your hub for articles and world news</p>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search articles or news..."
          className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* News Section */}
      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Latest World News</h2>
        <div className="bg-white p-4 rounded shadow divide-y">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <div key={index} className="py-2">
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description || "No description."}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading news...</p>
          )}
        </div>
      </section>

      {/* Article Editor */}
      <section className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Write Your Article</h2>
        <textarea
          className="w-full h-40 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-400"
          placeholder="Type your article here..."
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
        />
        <div className="mt-3">
          <button
            onClick={getAISuggestions}
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            Ask AI Copilot
          </button>
        </div>
        {aiSuggestions.length > 0 && (
          <div className="mt-3 bg-gray-100 p-3 rounded">
            <h3 className="font-bold text-gray-700 mb-2">AI Suggestions:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {aiSuggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-8">
        © 2025 GoodGalRiyak Blog
      </footer>
    </div>
  );
}
