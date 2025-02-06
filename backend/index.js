import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";

// initializing and using app
const app = express();

// dotenv file import statement
const port = process.env.PORT || 4000;

// used some middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));


// mongodb connection called 
connectDB()

//server listening
try {
    app.listen(port, () => {
        console.log(chalk.bgYellow(`Server is Running at Port : ${port}`))
    })
} catch (error) {
    console.log(chalk.bgRed("MongoDB connection failed !!! ", err))
}