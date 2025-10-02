import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GENAI_API_KEY, // backend .env key
});

export default {
  async generateSummary(ctx) {
    const { prompt } = ctx.request.body;
    if (!prompt) return ctx.badRequest("Missing prompt");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      ctx.send({ text: response.text });
    } catch (err) {
      ctx.send({ error: err.message });
    }
  },
};
