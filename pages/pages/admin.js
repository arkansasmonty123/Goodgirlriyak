import { useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [msg, setMsg] = useState('');

  const submitPost = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/blogs', { title, content });
    setMsg(res.data.message);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={submitPost} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border p-2 rounded h-32"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Post</button>
        {msg && <p className="text-green-600">{msg}</p>}
      </form>
    </div>
  );
}
