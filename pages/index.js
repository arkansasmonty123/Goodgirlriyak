export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <header className="bg-white shadow p-5">
        <h1 className="text-3xl font-bold text-center">GoodGalRiyak Blog</h1>
        <nav className="flex justify-center space-x-6 mt-3">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/articles" className="text-blue-600 hover:underline">Articles</a>
          <a href="/about" className="text-blue-600 hover:underline">About</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto p-5">
        <h2 className="text-2xl font-semibold mt-6">Latest Articles</h2>
        <article className="bg-white rounded-lg shadow p-4 mt-4">
          <h3 className="text-xl font-bold">Welcome to GoodGalRiyak!</h3>
          <p className="text-gray-700">Your first blog post is here.</p>
        </article>

        <article className="bg-white rounded-lg shadow p-4 mt-4">
          <h3 className="text-xl font-bold">AI Assistant Ready</h3>
          <p className="text-gray-700">Get AI-powered blog suggestions.</p>
        </article>
      </main>

      <footer className="text-center text-gray-500 py-5">
        © 2025 GoodGalRiyak Blog
      </footer>
    </div>
  );
}
