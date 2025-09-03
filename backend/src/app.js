const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

app.get("/api/health", (_, res) => res.json({ ok: true }));


app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

module.exports = app;
