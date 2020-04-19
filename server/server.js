const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
// File Imports
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server started on port ${PORT} in ${process.env.NODE_ENV.yellow.bold} mode`
  )
);
