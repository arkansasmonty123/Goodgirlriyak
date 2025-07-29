import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Static articles with guaranteed image URLs
  const articles = [
    {
      title: "Welcome to GoodGalRiyak!",
      description: "Your first blog post is here.",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      title: "AI Assistant Ready",
      description: "Get AI-powered blog suggestions.",
      image: "https://picsum.photos/600/400?random=2",
    },
  ];

  // Fetch latest news using NewsAPI
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6dcd94f1ac8f10fcb818c2cce026535`
        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.slice(0, 5)); // Show top 5 news articles
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  // Filtered articles based on search
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fallback image if news API doesn't provide one
  const getImage = (url, fallbackId) =>
    url ? url : `https://picsum.photos/600/400?random=${fallbackId}`;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">GoodGalRiyak Blog</h1>
        <nav className="mt-2 space-x-4">
          <a href="#" className="text-blue-600 hover:underline">
            Home
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Articles
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            About
          </a>
        </nav>
      </header>

      {/* Search bar */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Latest Articles */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
        <div className="grid gap-4">
          {filteredArticles.map((article, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest World News */}
      <section className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Latest World News</h2>
        <div className="grid gap-4">
          {news.length > 0 ? (
            news.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img
                  src={getImage(item.urlToImage, index + 10)}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="max-w-3xl mx-auto mt-10 bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
        <p className="text-gray-600">
          Type a topic, and AI will suggest blog ideas (coming soon).
        </p>
      </section>

      <footer className="text-center mt-10 text-gray-500">
        © 2025 GoodGalRiyak Blog
      </footer>
    </div>
  );
            }
