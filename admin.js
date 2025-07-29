import { useState } from 'react';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const submitPost = async () => {
    const res = await fetch('/api/createPost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    const data = await res.json();
    setMessage(data.message);
    setTitle('');
    setContent('');
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Admin Panel</h1>
      <input
        type="text"
        placeholder="Title"
        className="p-2 border rounded w-full mb-4"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="p-2 border rounded w-full mb-4 h-40"
        value={content}
        onChange={e => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={submitPost}
        className="bg-pink-600 text-white p-2 rounded"
      >
        Publish Post
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
