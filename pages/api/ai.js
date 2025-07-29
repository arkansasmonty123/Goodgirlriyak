export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { prompt } = req.body;
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    const data = await response.json();
    console.log("HF AI Response:", data);

    if (data.error) {
      return res.status(500).json({ result: `HF API Error: ${data.error}` });
    }

    const aiText = Array.isArray(data)
      ? data[0]?.generated_text || "No response"
      : "No response";

    res.status(200).json({ result: aiText });
  } catch (error) {
    console.error("HF API error:", error);
    res.status(500).json({ message: "AI request failed" });
  }
}
