export default function Home() {
  const posts = [
    { title: "Welcome to GoodGalRiyak!", content: "Your first blog post is here." },
    { title: "AI Assistant Ready", content: "Get AI-powered blog suggestions." },
    { title: "Latest World News", content: "This section will auto-update soon." },
  ];

  return (
    <div className="bg-pink-50 min-h-screen">
      <header className="bg-pink-500 p-4 text-white text-center text-3xl font-bold">
        GoodGalRiyak Blog
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{post.content}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-pink-500 text-white text-center p-4 mt-6">
        © 2025 GoodGalRiyak Blog
      </footer>
    </div>
  );
}
