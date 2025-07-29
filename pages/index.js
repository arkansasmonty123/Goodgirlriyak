export default function Home() {
  const posts = [
    { title: "Welcome to GoodGalRiyak!", content: "This is your first blog post." },
    { title: "AI Assistant Ready", content: "Your AI helper will suggest articles here." },
    { title: "Latest World News", content: "This section will auto-update with news." }
  ];

  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      {/* Navigation */}
      <header className="bg-pink-500 text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">GoodGalRiyak Blog</h1>
        <input
          type="text"
          placeholder="Search articles..."
          className="p-2 rounded text-black"
        />
      </header>

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center p-4 mt-6">
        <p>© 2025 GoodGalRiyak Blog</p>
      </footer>
    </div>
  );
}
