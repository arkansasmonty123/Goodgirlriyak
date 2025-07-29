export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">GoodGalRiyak Blog</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          AI-powered articles, world news, and smart recommendations.
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow flex justify-center space-x-8 py-4">
        <a href="#" className="text-indigo-600 font-medium hover:underline">Home</a>
        <a href="#" className="text-gray-700 hover:underline">Articles</a>
        <a href="#" className="text-gray-700 hover:underline">AI Assistant</a>
        <a href="#" className="text-gray-700 hover:underline">About</a>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-5 py-10">
        {/* Latest Articles */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Article 1 */}
            <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="https://source.unsplash.com/600x400/?technology" alt="Article" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Welcome to GoodGalRiyak!</h3>
                <p className="text-gray-700 text-sm mt-2">Your first blog post is here.</p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="https://source.unsplash.com/600x400/?ai" alt="AI" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">AI Assistant Ready</h3>
                <p className="text-gray-700 text-sm mt-2">Get AI-powered blog suggestions.</p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src="https://source.unsplash.com/600x400/?news" alt="News" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Latest World News</h3>
                <p className="text-gray-700 text-sm mt-2">This section will auto-update with news.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="bg-indigo-50 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-indigo-700 mb-3">AI Assistant Suggests</h2>
          <p className="text-gray-700 mb-4">
            Your AI helper is ready to suggest trending articles tailored for you. Soon, this will connect to an AI API.
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Get AI Suggestions
          </button>
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
