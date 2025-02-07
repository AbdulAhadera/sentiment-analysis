import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
    {
        feedbackText: {
            type: String,
            required: true
        },
        sentiment: {
            type: String,
            required: true
        },  // either Positive, Negative, or Neutral
        sentimentScore: {
            type: Number,
            required: true
        },
        improvementSuggestions: {
            type: String
        },
    },
    { timestamps: true }
);

export const Feedback = mongoose.model('Feedback', feedbackSchema);

