import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendHTML("index.html");
});

app.listen(port, () => {
  console.log(`app in ascolto sulla porta ${port}`);
});
