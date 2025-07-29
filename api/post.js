import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('blog');
  const posts = await db.collection('posts').find({}).toArray();
  res.status(200).json(posts);
}
