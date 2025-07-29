export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    console.log("AI API raw response:", data); // Debug log

    if (!data.choices || !data.choices[0]?.message?.content) {
      return res.status(500).json({ result: "AI returned no response" });
    }

    res.status(200).json({ result: data.choices[0].message.content });
  } catch (error) {
    console.error("AI API error:", error);
    res.status(500).json({ message: "AI request failed" });
  }
}
