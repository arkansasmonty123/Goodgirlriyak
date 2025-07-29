import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content } = req.body;
    const client = await clientPromise;
    const db = client.db('blog');
    await db.collection('posts').insertOne({ title, content });
    res.status(200).json({ message: 'Post created successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
