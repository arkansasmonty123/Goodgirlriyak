import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-green-600 to-blue-700 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold">About GoodGalRiyak Blog</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We bring you AI-powered blogs, current news, and trending topics — all in one place.
        </p>
        <Link href="/" className="block mt-4 text-indigo-100 hover:underline">← Back to Home</Link>
      </header>

      <main className="flex-grow max-w-4xl mx-auto px-5 py-10 text-gray-700 leading-7">
        <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
        <p>
          GoodGalRiyak Blog is a platform built with AI, designed to deliver smart blog suggestions, 
          live news updates, and deep insights into global trends. Whether it's tech, world events, or 
          AI breakthroughs, we've got you covered.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p>
          We aim to create a **modern, AI-driven blog experience** that provides value, clarity, and 
          real-time updates.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p>
          Reach us at <a href="mailto:goodgalriyak@blog.com" className="text-blue-500 hover:underline">goodgalriyak@blog.com</a>.
        </p>
      </main>
    </div>
  );
}
