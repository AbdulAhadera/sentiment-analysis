const mongoose = require('mongoose');

const sentimentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            trim: true
        },
        sentiment: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);


export const Sentiment = mongoose.model("Sentiment", sentimentSchema)
