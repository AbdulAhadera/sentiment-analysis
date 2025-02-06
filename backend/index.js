import express from "express";
import connectDB from "./config/db.js";
import chalk from "chalk";

const app = express();
const port = process.env.PORT || 4000;



connectDB()

try {
    app.listen(port, () => {
        console.log(chalk.bgYellow(`Server is Running at Port : ${port}`))
    })
} catch (error) {
    console.log(chalk.bgRed("MongoDB connection failed !!! ", err))
}