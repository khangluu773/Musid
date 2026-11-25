import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:8081",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Musid backend is running!");
});

// API test endpoint
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Frontend successfully connected to Musid banckend!",
  });
});

app.listen(PORT, () => {
  console.log(`Musid backend running at http://localhost:${PORT}`);
});