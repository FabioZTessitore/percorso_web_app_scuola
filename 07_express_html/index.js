import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  // invia il file index.html presente nella directory public
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(port, () => {
  console.log(`app in ascolto sulla porta ${port}`);
});
