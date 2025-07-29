import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!global.mongoose) {
  global.mongoose = mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default async function handler(req, res) {
  await global.mongoose;
  if (req.method === 'GET') {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } else if (req.method === 'POST') {
    const blog = await Blog.create(req.body);
    res.status(201).json({ message: 'Blog post created!', blog });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
