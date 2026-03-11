import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

export const generateForexAnalysis = async (prompt: string) => {
  if (!apiKey) {
    return "AI analysis is currently unavailable. Please configure your Gemini API key.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [{ text: `You are a professional Forex analyst. Provide a detailed analysis for the following request: ${prompt}` }]
        }
      ],
      config: {
        systemInstruction: "You are an expert Forex trading assistant. Provide clear, data-driven insights, trend analysis, and risk management advice. Always include a disclaimer that trading involves risk.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate an analysis at this moment. Please try again later.";
  }
};

export const getSignalExplanation = async (signalData: any) => {
  const prompt = `Explain this Forex signal: ${JSON.stringify(signalData)}. Include trend direction, indicator confirmations, and market conditions.`;
  return generateForexAnalysis(prompt);
};
