
import { GoogleGenAI } from "@google/genai";
import { DOG_BREEDS } from '../constants';

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export interface QuizAnswers {
  apartment: string;
  playful: string;
  kids: string;
  grooming: string;
  budget: string;
}

export const getBreedRecommendation = async (answers: QuizAnswers): Promise<string | null> => {
  const breedDataString = DOG_BREEDS.map(breed => {
    const traits = Object.entries(breed.traits)
        .map(([key, value]) => `${key}: ${value}`)
        .join('; ');
    return `- ${breed.name}: ${traits}`;
  }).join('\n');

  const prompt = `
    You are an expert dog breed recommender. Based on the user's preferences, recommend the single best dog breed from the provided list.

    User Preferences:
    - Lives in an apartment: ${answers.apartment}
    - Wants a playful dog: ${answers.playful}
    - Has kids: ${answers.kids}
    - Time for grooming: ${answers.grooming}
    - Budget (INR): ${answers.budget}
    
    Here is a list of available dog breeds and their traits:
    ${breedDataString}
    
    Analyze the user's preferences and the traits of each breed, paying close attention to the budget. Recommend the single most suitable breed.
    Return only the name of the single most suitable breed from the list, and nothing else. For example: "Golden Retriever".
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    const text = response.text.trim();
    
    // Validate that the response is one of the breeds
    const isValidBreed = DOG_BREEDS.some(b => b.name.toLowerCase() === text.toLowerCase());
    
    if (isValidBreed) {
        return text;
    } else {
        console.error("Gemini returned a breed not in our list:", text);
        // Fallback to a default if the response is invalid
        return "Golden Retriever";
    }

  } catch (error) {
    console.error('Error getting breed recommendation from Gemini:', error);
    return null;
  }
};