import { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">GoodGalRiyak Blog</h1>
        <input
          type="text"
          placeholder="Search articles..."
          className="p-2 border rounded-lg"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </nav>

      {/* Articles */}
      <div className="max-w-4xl mx-auto p-6 grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post._id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-pink-700">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No posts found.</p>
        )}
      </div>
    </div>
  );
}
