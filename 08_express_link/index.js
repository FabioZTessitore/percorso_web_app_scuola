import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.get("/seconda", (req, res) => {
  res.sendFile(path.resolve("public", "seconda.html"));
});

app.listen(port, () => {
  console.log(`app in ascolto sulla porta ${port}`);
});
