import { GoogleGenerativeAI } from '@google/generative-ai';
import asyncHandler from "../utils/Asynchandler";


const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateSentimentScore = asyncHandler(async () => {

    try {
        // analyze user sentiment
        prompt = "Every User Feedback and score it's sentiment";

        // generate sentimnt score eithre (+1, -1, 0) or (positive, negative, neutral)
        const result = await model.generateContent(prompt);

        // log or show the sentiment in frontend
        console.log(result.response.text());

    } catch (error) {
        err => console.log(err)
    }
})

export { generateSentimentScore };