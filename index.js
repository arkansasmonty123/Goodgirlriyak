import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/getPosts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      {/* Navigation */}
      <header className="bg-pink-500 text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GoodGalRiyak</h1>
        <input
          type="text"
          placeholder="Search articles..."
          className="p-2 rounded text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post._id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {post.content.slice(0, 80)}...
                </p>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center p-4 mt-6">
        <p>© 2025 GoodGalRiyak Blog</p>
      </footer>
    </div>
  );
}
