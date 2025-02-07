import { GoogleGenerativeAI } from '@google/generative-ai';
import asyncHandler from "../utils/Asynchandler";

const genAI = new GoogleGenerativeAI("YOUR_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateFeedback = asyncHandler(async () => {

    try {
        // read user feedback
        prompt = "Every User Feedback";

        // generate actionable suggestions
        const result = await model.generateContent(prompt);

        // log or show the response in frontend
        console.log(result.response.text());

    } catch (error) {
        err => console.log(err)
    }
})

export { generateFeedback };