export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    console.log("News API Response:", data); // Debug log

    if (!data.articles) {
      return res.status(500).json({ message: "No news found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("News API error:", error);
    res.status(500).json({ message: "Failed to fetch news" });
  }
}
