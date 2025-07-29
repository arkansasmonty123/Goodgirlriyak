import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs').then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GoodGalRiyak Blog</h1>
      <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-600">{blog.content.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
