export default async function handler(req, res) {
  try {
    // Request top global headlines
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await response.json();
    console.log("News API Response:", data);

    // If no articles, show backup dummy news
    if (!data.articles || data.articles.length === 0) {
      return res.status(200).json({
        articles: [
          {
            title: "Welcome to GoodGalRiyak Blog!",
            url: "#",
            urlToImage: null,
          },
          {
            title: "AI Copilot is ready to help you write amazing posts!",
            url: "#",
            urlToImage: null,
          },
          {
            title: "Stay tuned for the latest global trends and fashion updates.",
            url: "#",
            urlToImage: null,
          },
        ],
      });
    }

    // Send fetched news
    res.status(200).json({ articles: data.articles });
  } catch (error) {
    console.error("News API error:", error);
    res.status(500).json({ message: "Failed to fetch news" });
  }
}
