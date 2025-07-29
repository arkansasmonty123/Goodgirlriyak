import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([
    { title: "Welcome to GoodGalRiyak!", content: "Your first blog post is here.", image: "https://source.unsplash.com/600x400/?welcome" },
    { title: "AI Assistant Ready", content: "Get AI-powered blog suggestions.", image: "https://source.unsplash.com/600x400/?ai,technology" },
    { title: "Latest World News", content: "This section will auto-update with news.", image: "https://source.unsplash.com/600x400/?world,news" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);

  // Fetch current news (dummy API)
  useEffect(() => {
  fetch("https://gnews.io/api/v4/top-headlines?token=c6dcd94f1ac8f10fcb818c2cce026535&lang=en&country=in")
    .then(res => res.json())
    .then(data => {
      if (data.articles) {
        setNews(data.articles.slice(0, 5)); // Show top 5 news
      }
    })
    .catch(() => {
      setNews([]);
    });
}, []);

  // Filtered articles
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">GoodGalRiyak Blog</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          AI-powered articles, current affairs, and smart news updates.
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow flex justify-center space-x-8 py-4">
           <a href="/" className="text-indigo-600 font-medium hover:underline">Home</a>
           <a href="/articles" className="text-gray-700 hover:underline">Articles</a>
           <a href="/ai" className="text-gray-700 hover:underline">AI Assistant</a>
           <a href="/about" className="text-gray-700 hover:underline">About</a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-5 py-10">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Latest Articles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => (
                <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
                  <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{article.title}</h3>
                    <p className="text-gray-700 text-sm mt-2">{article.content}</p>
                  </div>
                </div>
              ))
            ) : (
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      title: "10 Trending Saree Styles in 2025",
      content: "Discover the latest fashion in sarees and how to style them.",
      image: "https://picsum.photos/id/1011/600/400"
    },
    {
      title: "Top Makeup Tips for a Natural Glow",
      content: "Achieve a flawless look with these trending beauty hacks.",
      image: "https://picsum.photos/id/1015/600/400"
    },
    {
      title: "AI in Fashion – The Future of Style",
      content: "How artificial intelligence is changing the beauty and fashion industry.",
      image: "https://picsum.photos/id/1025/600/400"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [news, setNews] = useState([]);
  const [aiSuggestions, setAISuggestions] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);

  // Fetch current news
  useEffect(() => {
    fetch("https://gnews.io/api/v4/top-headlines?token=c6dcd94f1ac8f10fcb818c2cce026535&lang=en&country=in")
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setNews(data.articles.slice(0, 5));
        }
      })
      .catch(() => setNews([]));
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getAISuggestions = () => {
    setLoadingAI(true);
    setTimeout(() => {
      setAISuggestions([
        "5 Must-Have Saree Accessories",
        "AI Makeup Apps That Transform Your Look",
        "The Future of Fashion E-commerce"
      ]);
      setLoadingAI(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">GoodGalRiyak Blog</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          AI-powered articles, current affairs, fashion tips, and more.
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow flex justify-center space-x-8 py-4">
        <a href="/" className="text-indigo-600 font-medium hover:underline">Home</a>
        <a href="/articles" className="text-gray-700 hover:underline">Articles</a>
        <a href="/ai" className="text-gray-700 hover:underline">AI Assistant</a>
        <a href="/about" className="text-gray-700 hover:underline">About</a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-5 py-10">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Latest Articles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => (
                <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
                  <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{article.title}</h3>
                    <p className="text-gray-700 text-sm mt-2">{article.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No articles found.</p>
            )}
          </div>
        </section>

        {/* Current Affairs / News Section */}
        <section className="bg-indigo-50 rounded-xl p-6 shadow-md mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">Current Affairs & News</h2>
          {news.length > 0 ? (
            <ul className="space-y-4">
              {news.map((n, idx) => (
                <li key={idx} className="border-b pb-4 flex space-x-4">
                  <img
                    src={n.image || "https://picsum.photos/200/120"}
                    alt={n.title}
                    className="w-40 h-24 object-cover rounded"
                  />
                  <div>
                    <a href={n.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-indigo-600 hover:underline">
                      {n.title}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{n.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Fetching the latest news...</p>
          )}
        </section>

        {/* AI Assistant Section */}
        <section className="bg-gray-100 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">AI Assistant Suggests</h2>
          <p className="text-gray-700 mb-4">
            Get personalized AI-powered suggestions for blog topics.
          </p>
          <button
            onClick={getAISuggestions}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loadingAI ? "Loading..." : "Get AI Suggestions"}
          </button>

          {aiSuggestions.length > 0 && (
            <ul className="mt-6 space-y-3">
              {aiSuggestions.map((s, i) => (
                <li key={i} className="bg-white shadow p-4 rounded-lg text-gray-700">{s}</li>
              ))}
            </ul>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        <p>© 2025 GoodGalRiyak Blog. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </footer>
    </div>
  );
            }
