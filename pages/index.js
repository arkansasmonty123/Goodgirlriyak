import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [articleText, setArticleText] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);

  // Fetch news from API route
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  // Fetch AI response
  const getAISuggestions = async () => {
    if (!articleText.trim()) {
      setAiSuggestions(["Please write something for AI to assist."]);
      return;
    }
    setLoadingAI(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: articleText }),
      });
      const data = await response.json();
      setAiSuggestions([data.result]);
    } catch (error) {
      console.error("AI Error:", error);
      setAiSuggestions(["Error fetching AI response."]);
    }
    setLoadingAI(false);
  };

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 text-white shadow-lg py-6">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">GoodGalRiyak</h1>
          <p className="text-lg mt-2">Beauty • Lifestyle • Current Trends</p>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto mt-8 px-4">
        <input
          type="text"
          placeholder="Search news or blog posts..."
          className="w-full p-4 border-2 border-pink-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* NEWS SECTION */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Latest World News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-shadow duration-300"
              >
                {item.urlToImage ? (
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="rounded-lg mb-3 w-full h-40 object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 h-40 rounded-lg mb-3" />
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description || "No description available."}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-pink-500 hover:text-pink-700 text-sm font-medium"
                >
                  Read more →
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading news...</p>
          )}
        </div>
      </section>

      {/* ARTICLE EDITOR */}
      <section className="max-w-4xl mx-auto mt-14 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Write Your Article</h2>
        <textarea
          className="w-full h-48 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none text-gray-700"
          placeholder="Type your article here..."
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
        />
        <div className="mt-4 flex justify-between">
          <button
            onClick={getAISuggestions}
            className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-2 rounded-lg shadow hover:shadow-xl transition-all duration-300"
            disabled={loadingAI}
          >
            {loadingAI ? "Thinking..." : "Ask AI Copilot"}
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
            Save Draft
          </button>
        </div>

        {/* AI Suggestions */}
        {aiSuggestions.length > 0 && (
          <div className="mt-5 bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
            <h3 className="font-semibold text-pink-700 mb-2">AI Suggestions:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {aiSuggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-8 mt-14">
        © 2025 GoodGalRiyak Blog • All rights reserved
      </footer>
    </div>
  );
}
