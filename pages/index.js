import { useState, useEffect } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [articleText, setArticleText] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  // Fetch news
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        if (data.articles) setNews(data.articles.slice(0, 5));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchNews();
  }, []);

  // Live AI Suggestions (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (articleText.trim()) {
        getAISuggestions(articleText);
      }
    }, 2000); // wait 2s after typing
    return () => clearTimeout(timeout);
  }, [articleText]);

  // Fetch AI Suggestions
  const getAISuggestions = async (prompt) => {
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setAiSuggestions([data.result]);
    } catch (error) {
      setAiSuggestions(["Error fetching AI suggestions."]);
    }
  };

  // Chatbot send message
  const sendChatMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = { role: "user", text: chatInput };
    setChatMessages([...chatMessages, userMessage]);
    setChatInput("");
    setLoadingAI(true);
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: chatInput }),
      });
      const data = await response.json();
      setChatMessages((msgs) => [
        ...msgs,
        { role: "assistant", text: data.result },
      ]);
    } catch (error) {
      setChatMessages((msgs) => [
        ...msgs,
        { role: "assistant", text: "AI is not responding." },
      ]);
    }
    setLoadingAI(false);
  };

  return (
    <div className="main-container">
      {/* HEADER */}
      <header className="header">
        <h1>GoodGalRiyak</h1>
        <p>Beauty • Lifestyle • Trends</p>
      </header>

      {/* NEWS TICKER */}
      <div className="news-ticker">
        <div className="ticker-content">
          {news.length > 0 ? (
            news.map((item, i) => (
              <span key={i}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </span>
            ))
          ) : (
            <span>Loading latest news...</span>
          )}
        </div>
      </div>

      {/* ARTICLE BOX */}
      <section className="article-section">
        <h2>Write Your Article</h2>
        <textarea
          placeholder="Start typing your article here..."
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
        />
        {aiSuggestions.length > 0 && (
          <div className="ai-suggestions">
            <h4>AI Suggestions:</h4>
            <p>{aiSuggestions[0]}</p>
          </div>
        )}
      </section>

      {/* CHATBOT */}
      <div className={`chatbot ${chatOpen ? "open" : ""}`}>
        {chatOpen && (
          <div className="chat-window">
            <div className="chat-messages">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`message ${msg.role === "user" ? "user" : "assistant"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Ask AI..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
              />
              <button onClick={sendChatMessage} disabled={loadingAI}>
                {loadingAI ? "..." : "Send"}
              </button>
            </div>
          </div>
        )}
        <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? "Close Chat" : "AI Copilot"}
        </button>
      </div>
    </div>
  );
                             }
