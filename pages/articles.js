import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      title: "How AI is Changing the World",
      content: "An in-depth look at the rise of AI technologies.",
      image: "https://source.unsplash.com/600x400/?ai,robotics"
    },
    {
      title: "The Future of Space Travel",
      content: "Exploring upcoming missions and commercial space travel.",
      image: "https://source.unsplash.com/600x400/?space,rocket"
    },
    {
      title: "Climate Change: What You Need to Know",
      content: "A detailed article on the latest global climate reports.",
      image: "https://source.unsplash.com/600x400/?climate,earth"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 text-center shadow">
        <h1 className="text-4xl font-extrabold">Articles</h1>
        <p className="mt-2 text-lg">Explore AI, tech, and current affairs.</p>
        <Link href="/" className="block mt-4 text-indigo-100 hover:underline">← Back to Home</Link>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p className="text-gray-700 text-sm mt-2">{article.content}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
