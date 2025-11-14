import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT ?? 5000) || 6000;
const PROJECT_NAME = "Ananta Custom AI CLI";
const PROJECT_REPO = "https://github.com/anantasharma510/ananta-custom-ai-cli";

app.get("/health", (_req, res) => {
  res.send("ok");
});

app.get("/", (_req, res) => {
  res.json({
    name: PROJECT_NAME,
    status: "online",
    version: process.env.npm_package_version ?? "0.1.0",
    repo: PROJECT_REPO,
    description: "REST entrypoint for the Ananta CLI server"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






